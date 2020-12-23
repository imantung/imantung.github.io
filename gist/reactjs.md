---
layout: gist
title: ReactJS
---

# ReactJS

- <https://codeburst.io/how-to-call-api-in-a-smart-way-2ca572c6fe86>
- <https://obedparla.com/code/a-visual-guide-to-react-mental-models/>
- <https://obedparla.com/code/a-visual-guide-to-react-mental-models-part-2-use-state-use-effect-and-lifecycles/>


From official first generated readme

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
- [React documentation](https://reactjs.org/).
- [Code Splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
- [Analyzing the Bundle Size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
- [Making a Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
- [Advanced Configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
- [Deployment](https://facebook.github.io/create-react-app/docs/deployment)
- [`npm run build` fails to minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### Setup

Node
```bash   
npm install -g create-react-app
npx create-react-app my-app
cd my-app
```

CDN
```html
<script src='https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/react.js'></script>
```

Component Life Cycle ([pre 16.3](https://medium.com/@baphemot/understanding-reactjs-component-life-cycle-823a640b3e8d), [16.3](https://medium.com/@baphemot/understanding-react-react-16-3-component-life-cycle-23129bc7a705)) 
- Creation
  1. `constructor()`
  2. `componentWillMount()` -- deprecated 
  3. `render()`
  4. *create all direct-child component*
  5. `componentDidMount()`
- Re-rendering due to re-rendering parent
  1. `componentWillReceiveProps()` -- deprecated
  2. `shouldComponentUpdate()`
  3. `componentWillUpdate()`
  4. `render()`
  5. *send new props to all direct child components*
  6. `componentDidUpdate()`
- Re-rendering due to `this.setState()`
  1. `shouldComponentUpdate()`
  2. `componentWillUpdate()`
  3. `render()`
  4. *send new props to all direct child components*
  5. `componentDidUpdate()`
- Re-rendering due to `this.forceUpdate()`
  1. `render()`
  2. *send new props to all direct child components*
  3. `componentDidUpdate()`
- Re-rendering due to catching error
  1. parent `render()`
  2. *send new props to all direct child component*
  3. *error thrown in any life-cycle method*
  4. *parent componentDidCatch() - store error data*

Using react element ref ([more](https://www.javascriptstuff.com/use-refs-not-ids/))
```js
class RefComponent extends React.Component {
  onFocus() {
    this.myInput.setAttribute("class", "highlight");
  }

  onBlur() {
    this.myInput.setAttribute("class", "");
  }

  render() {
    return (
      <div>
        <input
          ref={input => {
            this.myInput = input;
          }}
          onFocus={this.onFocus.bind(this)}
          onBlur={this.onBlur.bind(this)}
        />
      </div>
    );
  }
}
```

## JSX

JSX = Script to render component

Multiple tag component
```js
function renderSomething(){
  return <>
    <div>div-1</div>
    <div>div-2</div>
  </>

}
```


## Hook

Second argument of useEffect is dependency option
- none: run on every render
- `[]`: run once
- `[a,b]`: run when a or b change


Run once example
```js
useEffect(() => {
  fetchSettings().then((settings) => {
    setSettings(settings);
  });
}, []);
```

