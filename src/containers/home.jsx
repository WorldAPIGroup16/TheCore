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
          <Header />
          <Jumbotron />
          <UserSearch />
          <SignUp />
          <Footer />
        </div>
    );
  }
}