---
title: React 16 time slicing trick
date: 2018-09-09 22:47:10
tags:
- reactjs
- javasccript
---

Normally React wants to keep the UI consistent with what you told it to render.
So if you render
```
function Slideshow() {
  return (
    <div>
      <Expensive1 />
      <Expensive2 />
      <Expensive3 />
    </div>
  );
}
```
then it will have to call render methods and create DOM nodes for the whole trees of Expensive1, Expensive2, and Expensive3, when Slideshow is being mounted.

However, maybe you're only showing Expensive1 on the first render, and Expensive2 and Expensive3 are not immediately visible. Like if this is really a side show.

Today, it's idiomatic to render just the current node, e.g.
```
function Slideshow(props) {
  return (
    <div>
      {props.current === 0 && <Expensive1 />}
      {props.current === 1 && <Expensive2 />}
      {props.current === 2 && <Expensive3 />}
    </div>
  );
}
```
The upside of this is that now your first render of `<Slideshow current={0} />` only includes Expensive1. However, the downside is that the moment you switch to `<Slideshow current={1} />`, you will experience jank from creating and rendering the whole Expensive2 tree.

Ideally what we want to do is to tell React that when we render `<Slideshow current={0} />`, we want to show Expensive1, but we want to start preparing Expensive2 when the browser is idle. This way it won't block the initial render or cause jank, but by the time you click "next" Expensive2 might just already be complete, and in this case it'll just replace the DOM node.

This is exactly what time slicing which I partially demoed in my talk will allow. Your code might look something like:
```
function Slideshow(props) {
  return (
    <div>
      <div hidden={props.current !== 0}>
        <Expensive1 />
      </div>
      <div hidden={props.current !== 1}>
        <Expensive2 />
      </div>
      <div hidden={props.current !== 2}>
        <Expensive3 />
      </div>
    </div>
  );
}
```
Note that hidden is a real HTML attribute. (It acts similar to display: none.) But it could also serve as a hint to React that the tree inside it doesn't actually need to be committed immediately — because it's not visible anyway. Also note: this is not a final API, I’m just explaining what it lets you do.

So when you render `<Slideshow current={0} />`, React mounts
```
<div>
  <div hidden={false}>
    <Expensive1 />
  </div>
  <div hidden={true}>
    <!-- not ready yet -->
  </div>
  <div hidden={true}>
    <!-- not ready yet -->
  </div>
</div>
```
and whenever the browser is idle (e.g. when you look at the first slideshow item), it will start working on Expensive2 in small chunks. When it's ready, it will just append it to the hidden div — which won't be observable to the user because it's hidden.
```
<div>
  <div hidden={false}>
    <Expensive1 />
  </div>
  <div hidden={true}>
    <!-- not visible, but prepared during idle periods and now ready! -->
    <Expensive2 />
  </div>
  <div hidden={true}>
    <!-- not ready yet, but React will start working on it next -->
  </div>
</div>
```
Now if you switch to `<Slideshow current={1} />`, React doesn't need to do any extra rendering because it has already "prepared" Expensive2 ahead of time.

And if you switch too fast, and React hasn't been able to fully prepare Expensive2 yet, it will just pick it up where it left off but set a much more aggressive deadline since we want to see results within ~150ms.

I hope this explains it a bit! The crucial part here is time slicing. This optimization wouldn't make sense if pre-rendering Expensive2 or Expensive3 blocked the thread since in this case it wouldn't be worth slowing down the interactions while Expensive1 is visible. But thanks to React's architecture, we can actually start pre-rendering Expensive2 and Expensive3 in small chunks without blocking the thread, and that's what will enable this optimization.

Source: [github](https://github.com/oliviertassinari/react-swipeable-views/issues/453#issuecomment-417939459)