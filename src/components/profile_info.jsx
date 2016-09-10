import React, { Component } from 'react';

export default class ProfileInfo extends Component {

  render() {
    return (
      <div className="profile-info col-sm-4 test">
      <h2 className="user-name">George Weiler</h2>
      <img className="profile-img" src="http://www.clker.com/cliparts/B/R/Y/m/P/e/blank-profile-hi.png" alt="profile"/>
      </div>
    );
  }
}