import React, { Component } from 'react';

export default class SignUp extends Component {

  render() {
    return (
      <div className="col-sm-6">
        <h5>Sign up for a core account</h5>
        <form>
          <p>Username:</p>
          <br/>
          <input type="text"/>
          <p>Password:</p>
          <br/>
          <input type="text"/>
          <br/><br/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}