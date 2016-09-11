import React, { Component } from 'react';
import { Link } from 'react-router';
export default class Header extends Component {

  render() {
    return (
          <header className="site-header nav">
            <nav role="navigation" className="navbar navbar-default">
              <div className="">
                <div className="navbar-header">
                  <button type="button" data-toggle="collapse" data-target="#navbar-collapse" className="navbar-toggle"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button>
                  <h1 className="navbar-logo">
                    <Link to="/">
                    <img src="http://i.imgur.com/3zTH12v.png" alt="logo"/>
                    <span>The Core</span>
                    </Link></h1>
                </div>
                <div id="navbar-collapse" className="collapse navbar-collapse">
                  <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/profile" className="signin-button login">Login</Link></li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
    );
  }
}