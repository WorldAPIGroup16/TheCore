import React, { Component } from 'react';

export default class TraitifyContainer extends Component {

  componentDidMount(){
    axios.get('/api/')
  }
  
  render() {
    return (
      <div className="traitify-container col-xs-12 col-md-4">
        <article className="card-docs">
          <div className="assessment"></div>
        </article>
      </div>
    );
  }
}