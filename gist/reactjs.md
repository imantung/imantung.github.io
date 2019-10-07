---
layout: gist
title: ReactJS
---

### Setup

Node
```sh
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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
