---
title: Why call super or super(props)
date: 2017-12-13 22:44:08
tags: [reactjs, javascript]
---

In react world, many time we call `super` and `super(props)`, I do that and saw in many places, however I've never asked myself what does it actually do...

eg.
```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.onClickDiv = this.onClickDiv.bind(this);
  }

  onClickDiv() {
    // do stuff
  }

  render() {
    return <div onClick={this.onClickDiv} />;
  }
}
```

So according to React [source code](https://github.com/facebook/react/blob/52752446760dee0bc7232b4146f5a309ac57f065/src/isomorphic/modern/class/ReactComponent.js#L23)
```jsx
    function ReactComponent(props, context) {
      this.props = props;
      this.context = context;
    }
```

The only reason is to let you use `this` or `this.props` inside of the constructor, however you could always use `props` from the constructor attribute...
 There is only one reason when one needs to pass props to super():

 Passing:
```jsx
 class MyComponent extends React.Component {
     constructor(props) {
         super(props)

         console.log(this.props)
         // goood
     }
 }
 ```

 Not passing:

```jsx
 class MyComponent extends React.Component {
     constructor(props) {
         super()

         console.log(this.props)
         // -> undefined

         // Props parameter is still available
         console.log(props)
         // good
     }

     render() {
         // No difference outside constructor
         console.log(this.props)
         // good
     }
 }

```

 Not calling:

```jsx
 class MyComponent extends React.Component {
     constructor(props) {
           console.log(this)
         // undefined
     }
 }
 ```

 Source: [Stackoverflow](https://stackoverflow.com/questions/30571875/whats-the-difference-between-super-and-superprops-in-react-when-using-e)