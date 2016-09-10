import React, { Component } from 'react';
import axios from 'axios';
import Home from '../containers/home.jsx'
import Profile from '../components/profile.jsx'

/* Main App Component */
export default class App extends Component {

  render() {
    return (
      <div className='app container'>
        <Profile />
      </div>
    );
  }
}
