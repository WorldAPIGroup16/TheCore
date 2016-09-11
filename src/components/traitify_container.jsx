import React, { Component } from 'react';

export default class TraitifyContainer extends Component {

  componentDidMount(){
    Traitify.setPublicKey("u5os5vt0c5jdjlhi0jf8o5nu63");
    Traitify.setHost("https://api-sandbox.traitify.com");
    Traitify.setVersion("v1");
    var assessmentId = 'dbad6ce1-31c5-4d1c-b02a-e521bd43464c';
    Traitify.ui.load(assessmentId, ".assessment")
  }
  
  render() {
    return (

      <div className="traitify-container col-xs-12 col-md-4">
        <article className="sub-score card-docs">
          <div className="assessment"></div>
        </article>
      </div>
    );
  }
}