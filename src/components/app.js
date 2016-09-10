import React, { Component } from 'react';

/* Main App Component */
export default class App extends Component {
  render() {
    return (
      <div className='app'>
        Example Parent Component
        {this.props.children}
      </div>
    );
  }
}
