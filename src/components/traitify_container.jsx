import React, { Component } from 'react';
import traitify from 'traitify';

export default class TraitifyContainer extends Component {

  componentDidMount(){
      Traitify.setPublicKey("14l611peerk44t640ht55onjg0");
      Traitify.setHost("https://api-sandbox.traitify.com");
      Traitify.setVersion("v1");
      var assessmentId = "67d67284-f37d-4a0e-b1b8-fc99c98b3d3a";
      Traitify.ui.load(assessmentId, ".assessment")
  }
  render() {
    return (
      <div className="traitify-container col-sm-4">
        <div className="assessment"></div>
      </div>
    );
  }
}