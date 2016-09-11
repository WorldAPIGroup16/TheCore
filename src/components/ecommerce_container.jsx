import React, { Component } from 'react';

export default class ECommerceContainer extends Component {

  render() {
    return (
      <div className="ecommerce-container col-md-4">
        <article className="sub-score card-docs">
          <h1>Commerce: 91</h1>
          <img className="ecommerce-logo" src="https://s3.amazonaws.com/BURC_Pages/downloads/a-smile_color.jpg"/><p>99%</p>
          <img className="ecommerce-logo" src="https://upload.wikimedia.org/wikipedia/commons/4/48/EBay_logo.png"/> <p>89%</p>
          <img className="ecommerce-logo" src="https://d.ibtimes.co.uk/en/full/1486916/uber-logo-redesign.jpg?w=289"/><p> 4.5</p>
        </article>
      </div>
    );
  }
}