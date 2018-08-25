---
title: React 16 fragment vs container divs
date: 2017-12-13 22:17:10
tags: [reactjs, javascript]
---

In React 16.2, improved support for Fragments has been added. More information can be found on React's blog post [here](https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html).

We are all familiar with the following code:

```jsx
render() {
  return (
    // Extraneous div element :(
    <div>
      Some text.
      <h2>A heading</h2>
      More text.
      <h2>Another heading</h2>
      Even more text.
    </div>
  );
}
```


Yes, we need a container div, but it's not that big of a deal.

In React 16.2, we can do this to avoid the surrounding container div:

```jsx
render() {
  return (
    <Fragment>
      Some text.
      <h2>A heading</h2>
      More text.
      <h2>Another heading</h2>
      Even more text.
    </Fragment>
  );
}
```


In either case, we still need need a container element surround the inner elements.

Why is using a Fragment preferable? Does it help with performance? If so, why? Would love some insight.

* It’s a tiny bit faster and has less memory usage (no need to create an extra DOM node). This only has a real benefit on very large and/or deep trees, but application performance often suffers from death by a thousand cuts. This is one cut less.
* Some CSS mechanisms like Flexbox and CSS Grid have a special parent-child relationship, and adding divs in the middle makes it hard to keep the desired layout while extracting logical components.
* The DOM inspector is less cluttered. :-)

Source: [Stackoverflow](https://stackoverflow.com/questions/47761894/why-are-fragments-in-react-16-better-than-container-divs)