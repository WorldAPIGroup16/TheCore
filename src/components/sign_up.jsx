import React, { Component } from 'react';

export default class SignUp extends Component {

  render() {
    return (
      <div className="col-sm-6 ">
        <div className="card-docs">
          <form id="signup">
            <fieldset>
              <legend>Sign up</legend>
              <p>
                <input type="email" id="signup-email" placeholder="Email" required/>
              </p>
              <p>
                <input type="password" id="signup-password" placeholder="Password" required/>
              </p>
              <input type="submit" value="Sign up"/>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}
