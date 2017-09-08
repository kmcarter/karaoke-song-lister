/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import Icon from './common/Icon';
import HomePage from './HomePage';
import LookupPage from '../containers/LookupPage'; // eslint-disable-line import/no-named-as-default
import SearchResultsPage from '../containers/SearchResultsPage'; // eslint-disable-line import/no-named-as-default
import NotFoundPage from './NotFoundPage';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/search/:search" component={SearchResultsPage} />
          <Route path="/lookup/:artistOrTitle/:letter" component={LookupPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <footer className="footer">
          <hr/>
          <p>Made with <Icon className="fa-heart love" /> by <a href="https://twitter.com/kellycodes" target="_blank"><Icon className="fa-twitter" /> kellycodes</a>. <a href="#"><Icon className="fa-github" /></a></p>
        </footer>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
