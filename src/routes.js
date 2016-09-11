import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Profile from './components/profile.jsx';
import Home from './containers/home.jsx';
import App from './components/app.js';

/* Establish our client-side routes with React Router */
export default (
  <div>
    <Route path='/' component={Home} />
    <Route path='profile' component={Profile} />
  </div>
);

