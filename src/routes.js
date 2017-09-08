import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import LookupPage from './containers/LookupPage'; // eslint-disable-line import/no-named-as-default
import SearchResultsPage from './containers/SearchResultsPage'; // eslint-disable-line import/no-named-as-default
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="search/:search" component={SearchResultsPage} />
    <Route path="lookup/:artistOrTitle/:letter" component={LookupPage} />
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
