import React, { Component } from 'react';
// import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';

import Aux from './hoc/Auxillary/Auxillary';
import Auth from './containers/Authenticate/Authenticate';
import classes from './App.css';


class App extends Component {
  render() {
    return (
      <Aux>
        <Auth />
        <div className={classes.Backdrop}></div>
      </Aux>
    );
  }
}

export default App;
