import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import promise from 'redux-promise';
import reducers from './reducers'
import App from './components/App/index';
import * as serviceWorker from './serviceWorker';

const createStoreWithMiddleware = applyMiddleware((promise))
const composedEnhancers = compose(createStoreWithMiddleware)
const store = createStore(reducers, undefined, composedEnhancers)

ReactDOM.render(
  <Provider store={store}>
      {/* <LanguageProvider messages={messages}>
      <ConnectedRouter history={history}> */}
    <BrowserRouter>
        <Route component={App}></Route>
    </BrowserRouter>
    {/* </LanguageProvider>
    </ConnectedRouter> */}
  </Provider>
  , document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
