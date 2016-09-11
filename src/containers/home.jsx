import React, { Component } from 'react';
import UserSearch from '../components/user_search.jsx';
import SignUp from '../components/sign_up.jsx';
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';
import Jumbotron from '../components/jumbotron.jsx';
export default class Home extends Component {

  render() {
    return (
        <div>
        <Header/>
          <Jumbotron />
          <div className="section section-1">
            <div className='row'>
              <div className="content col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-1">
                <div className="section1-content">
                  <h3>The core score is a measure of your online accountability</h3>
                  <div className="intro-icons">
                    <ul>
                    <div className="card-docs">
                      <li><i className="card-docs-icon icon-budicon-312 green"></i>Your score is an online indicator that proves your accountability</li>
                      <li><i className="card-docs-icon icon-budicon-705 green"></i>Build a higher score through postive online interactions</li>
                      <li><i className="card-docs-icon icon-budicon green"></i>Scores are determined by Social media and ecommerce ratings</li>
                    </div>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="section section-2">
            <div className='row'>
              <div className="content col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-1">
                <div className="section1-content">
                  <h3>The core score is a measure of your online accountability</h3>
                  <div className="intro-icons">
                    <ul>
                    <div className="card-docs">
                      <li><i className="card-docs-icon icon-budicon-63 green"></i>Your score is an online indicator that proves your accountability</li>
                      <li><i className="card-docs-icon icon-budicon-705 green"></i>Build a higher score through postive online interactions</li>
                      <li><i className="card-docs-icon icon-budicon green"></i>Scores are determined by Social media and ecommerce ratings</li>
                    </div>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="section section-1">
            <div className='row'>
              <div className="content col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-7">
                <div className="section1-content">
                  <h3>Get your Core Score today</h3>
                  <div className="intro-icons">
                    <ul>
                    <div className="card-docs">
                      <SignUp />
                    </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}