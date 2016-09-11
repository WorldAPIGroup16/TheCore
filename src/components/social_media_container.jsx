import React, { Component } from 'react';

export default class SocialMediaContainer extends Component {

  render() {
    return (
      <div className="social-media-container col-md-4">
         <article className="sub-score card-docs">
          <h1>Social: 87</h1>
          <img className="ecommerce-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/2000px-F_icon.svg.png"/><p>89%</p>
          <img className="ecommerce-logo" src="http://www.stayonsearch.com/wp-content/uploads/2013/03/GooglePlus-Logo-02.png"/><p>87%</p>
          <img className="ecommerce-logo" src="http://icons.iconarchive.com/icons/limav/flat-gradient-social/512/Twitter-icon.png"/><p>85%</p>
        </article>
      </div>
    );
  }
}