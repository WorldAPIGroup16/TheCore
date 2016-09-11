import React, { Component } from 'react';
import ProfileInfo from "./profile_info.jsx"
import CoreScore from "./core_score.jsx"
import TraitifyContainer from "./traitify_container.jsx"
import ECommerceContainer from "./ecommerce_container.jsx"
import SocialMediaContainer from "./social_media_container.jsx"

export default class SignUp extends Component {

  render() {
    return (
      <div className="test">
      <div className="row test">
        <ProfileInfo />
        <CoreScore />
      </div>
        <div className="row test">
            <TraitifyContainer />
            <ECommerceContainer />
            <SocialMediaContainer />
          </div>
      </div>
    );
  }
}
