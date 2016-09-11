import React, { Component } from 'react';
import ProfileInfo from "./profile_info.jsx";
import CoreScore from "./core_score.jsx";
import TraitifyContainer from "../components/traitify_container.jsx";
import ECommerceContainer from "./ecommerce_container.jsx";
import SocialMediaContainer from "./social_media_container.jsx";
import Header from '../components/header.jsx';

export default class SignUp extends Component {

  render() {
    return (

      <div className="container">
      <Header/>
      <div className="row">
        <ProfileInfo />
        <CoreScore />
      </div>
        <div className="row score-data">
            <TraitifyContainer />
            <ECommerceContainer />
            <SocialMediaContainer />
          </div>
      </div>
    );
  }
}
