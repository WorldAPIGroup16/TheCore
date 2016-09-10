import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispathAction } from '../actions/actions.js';
import { bindActionCreators } from 'redux';

/* Example Container Component */
export default class ContainerExample extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
       <h2>TheCore</h2>
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ }, dispatch);
// }

// export default connect(null, mapDispatchToProps)(ContainerExample);