/* eslint-disable no-restricted-globals */
/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import MainPage from '../MainPage'
import About from '../../containers/about'
import Portfolio from '../../containers/projects'
import Contact from '../../containers/contact'

import posts_new from '../Posts/posts_new';
import Footer from '../Footer';

// Import DevTools, only for dev environment
import '../../sass/css/main.css'
import '../../sass/css/custom.css'
// Set Moment Global locale

class App extends React.Component {

  render() {
    return (
      <div
        className='is-fluid is-transparent'>
        <Helmet titleTemplate="%s - Celso Oliveira" defaultTitle="Celso Oliveira">
          <meta name="description" content="Portfolio Site" />
        </Helmet>

        <Switch>
          <Route exact path="/:page(\d+)?" component={MainPage} />
          <Route
            exact path="/comment/new"
            component={posts_new} />
          <Route
            exact path="/about"
            component={About} />
          <Route
            exact path="/projects"
            component={Portfolio} />
          <Route
            exact path="/contact"
            component={Contact} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
// function mapDispatchToProps(dispatch) {
//   return {
//     loadStatus: () => dispatch({ type:  }),
//     dispatch,
//   };
// }

// const withConnect = connect(
//   null,
//   mapDispatchToProps,
// );
export default App;
// export default compose(
//   withConnect,

// )(App);
