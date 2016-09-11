import React, { Component } from 'react';
import traitify from 'traitify';
import databaseAPI from '../../server/databaseAPI';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUserTraitify } from '../actions/traitify_actions.js';


class TraitifyContainer extends Component {
  componentWillMount(){
    const username = 'George Weiler';
    if (!traitify.publicKey){
      databaseAPI.getUserTraitify(username, this.props.getUserTraitify.bind(this));
    }
  }
  render() {
    const traitify = this.props.traitify;
    console.log(traitify);
    if (traitify.publicKey) {
      Traitify.setPublicKey(traitify.publicKey);
      Traitify.setHost(traitify.setHost);
      Traitify.setVersion('v1');
      Traitify.ui.load(traitify.assessmentId, ".assessment")
    }
    return (
      <div className="traitify-container col-sm-4">
        <div className="assessment">loading</div>
      </div>
    );
  }
}

function mapStateToProps({traitify}) {
  return { traitify };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({getUserTraitify}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TraitifyContainer);