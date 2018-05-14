import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Aux from './hoc/Auxillary/Auxillary';


class App extends Component {
  render() {
    return (
      <Aux>
        <h1>Blackhole Comics</h1>
      </Aux>
    );
  }
}

export default App;
