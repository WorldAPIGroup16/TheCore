import React, { Component } from 'react';

export default class ProfileInfo extends Component {

  render() {
    return (
      <div className="profile-info col-sm-4 ">
      <h2 className="user-name">George Weiler</h2>
      <img className="profile-img" src="profile.jpg" alt="profile"/>
      </div>
    );
  }
}