---
title: Default implementation of shouldComponentUnpdate
date: 2017-12-13 22:56:20
tags: [reactjs, javascript]
---

tl;dr

According to [React documentation](https://stackoverflow.com/questions/30571875/whats-the-difference-between-super-and-superprops-in-react-when-using-e)

It just returns `true`

You can also see it in the [source code](https://github.com/facebook/react/blob/1637b43e27c40c73f9489603145f9bb1d0ece618/packages/react-reconciler/src/ReactFiberClassComponent.js#L200) (react 16.2.0)

When it's `PureComponent` it does shallow equals
```jsx
if (type.prototype && type.prototype.isPureReactComponent) {
      return (
        !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState)
      );
    }
```

Example:

[codepen.io](https://codepen.io/kossel/pen/ZvYXQG?editors=1111)

Consider following code:

```jsx
class Hello extends React.Component {
  render(){
    const {name, handleOnClick} = this.props
    console.log('rendered Hello')
    return (<div>
        hello {name}
        <button onClick={handleOnClick}> Test </button>
      </div>)
  }
}

class App extends React.Component {
          constructor(props){
            super(props);
            const afunction = function(){
              console.log('clicked');
            }
            this.a = afunction;  // yes they are referring to same function
            this.b = afunction;  // yes they are referring to same function
            this.state = {
              selected: this.a
            }
            this.changeSelected = this.changeSelected.bind(this);
          }

          changeSelected() {
            this.setState({
              selected: this.b
            })
          }

          render() {
            console.log('rendered app')
            return(
              <div>
                <Hello name="World" handleOnClick={this.state.selected} />
                <button onClick={this.changeSelected}>Swap function</button>
              </div>
            );

          }
        }

```

The output log
`rendered app`
`rendered Hello`
Everytime you press "Swap function" button, the render function is called even the props hasn't changed.


However if you change the Hello component to extends to `React.PureComponent`
Pression "Swap function" will not call Hello component's render function.

But, don't think it's an easy optimization!! you have to be specially careful rolling your own `shouldComponentUpdate`!! read this awesome post first please [Shoul I use ShouldComponentUpdate?](http://jamesknelson.com/should-i-use-shouldcomponentupdate/)