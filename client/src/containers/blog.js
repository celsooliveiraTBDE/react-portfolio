import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PostsIndex from '../components/Posts/posts_index'
import PostsNew from '../components/Posts/posts_new'
import PostsShow from '../components/Posts/posts_show'

export default class Blog extends Component {
    render() {
        return (
            <div>
                <Switch>
                <Route path="/blog/new" component={PostsNew}></Route>
                <Route path="/blog/:id" component={PostsShow}></Route>
                </Switch>
                <PostsIndex />
            </div>
        )
    }
}
