import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducers from './reducers';
import Header from './components/header'
import PostsIndex from './components/posts_index';
import promise from 'redux-promise';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>

    <BrowserRouter>
      <div className="container">
      <Header></Header>
        <Switch>
          <Route path="/posts/new" component={PostsNew}></Route>
          <Route path="/posts/:id" component={PostsShow}></Route>

          <Route path="/" component={PostsIndex}></Route>
        </Switch>
      </div>
    </BrowserRouter>

  </Provider>
  , document.querySelector('.container'));