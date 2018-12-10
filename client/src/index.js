import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import promise from 'redux-promise';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import reducers from './reducers'
import './index.css';
import App from './App';
import About from './components/about'
import Contact from './components/ContactModal'

import PostsNew from './components/posts_new'
import PostsShow from './components/posts_show'
import PostsIndex from './components/PostList'
import Portfolio from './components/projects'
import * as serviceWorker from './serviceWorker';


const createStoreWithMiddleware = applyMiddleware((promise))
const composedEnhancers = compose (createStoreWithMiddleware)

const store = createStore(reducers, undefined, composedEnhancers)

ReactDOM.render(<Provider store={store}>

<BrowserRouter>

        <Switch>
          
          <Route path="/blog/new" component={PostsNew}></Route>
          <Route path="/blog/:id" component={PostsShow}></Route>

          <Route path="/about" component={About}></Route>
          <Route path="/blog" component={PostsIndex}></Route>
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
