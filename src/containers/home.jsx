import React, { Component } from 'react';
import UserSearch from '../components/user_search.jsx';
import SignUp from '../components/sign_up.jsx';

export default class Home extends Component {

  render() {
    return (
      <div>
      <div className="jumbotron">
        <h3>THE CORE</h3>
        <h5>Get your Core Score</h5>
      </div>
        <UserSearch />
        <SignUp />
      </div>
    );
  }
}