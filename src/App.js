import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Aux from './hoc/Auxillary/Auxillary';
import Auth from './containers/Authenticate/Authenticate';


class App extends Component {
  render() {
    return (
      <Aux>
        <h1>Blackhole Comics</h1>
        <Auth />
      </Aux>
    );
  }
}

export default App;
