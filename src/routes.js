import React from 'react';
import { Route, IndexRoute } from 'react-router';
import ContainerExample from './containers/container_example.js';

import App from './components/app.js';

/* Establish our client-side routes with React Router */
export default (
  <Route path='/' component={App}>
    <Route path='example' component={ContainerExample} />
  </Route>
);

