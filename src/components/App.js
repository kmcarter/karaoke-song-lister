/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import HomePage from './HomePage';
import LookupPage from '../containers/LookupPage'; // eslint-disable-line import/no-named-as-default
import SearchPage from '../containers/SearchPage'; // eslint-disable-line import/no-named-as-default
import NotFoundPage from './NotFoundPage';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="lookup/:search" component={SearchPage} />
          <Route path="lookup/:artist_or_song/:letter" component={LookupPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
