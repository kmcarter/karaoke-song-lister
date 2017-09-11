/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import Icon from './common/Icon';
import LoadingSpinner from './common/LoadingSpinner';
import HomePage from '../containers/HomePage';
import LookupPage from '../containers/LookupPage'; // eslint-disable-line import/no-named-as-default
import SearchResultsPage from '../containers/SearchResultsPage'; // eslint-disable-line import/no-named-as-default
import NotFoundPage from '../containers/NotFoundPage';

class App extends React.Component {
  constructor (props) {
    super(props);
  }
  
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
        <LoadingSpinner />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
