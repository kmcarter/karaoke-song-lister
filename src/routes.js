import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import LookupPage from './containers/LookupPage'; // eslint-disable-line import/no-named-as-default
import SearchPage from './containers/SearchPage'; // eslint-disable-line import/no-named-as-default
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="lookup/:search" component={SearchPage} />
    <Route path="lookup/:artist_or_song/:letter" component={LookupPage} />
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
