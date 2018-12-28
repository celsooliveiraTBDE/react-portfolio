import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import promise from 'redux-promise';
import reducers from './reducers'

import App from './components/App/index';
import About from './containers/about'
import Contact from './components/Contact/ContactModal'
import Portfolio from './containers/projects'
import Blog from "./containers/blog"
import * as serviceWorker from './serviceWorker';

const createStoreWithMiddleware = applyMiddleware((promise))
const composedEnhancers = compose(createStoreWithMiddleware)

const store = createStore(reducers, undefined, composedEnhancers)

ReactDOM.render(<Provider store={store}>

  <BrowserRouter>

    <Switch>

      <Route path="/blog" component={Blog}></Route>

      <Route path="/about" component={About}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="/projects" component={Portfolio}></Route>

      <Route path="/" component={App}></Route>

    </Switch>

  </BrowserRouter>

</Provider>

  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
