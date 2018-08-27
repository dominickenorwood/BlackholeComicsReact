import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Aux from './hoc/Auxillary/Auxillary';
import Auth from './containers/Authenticate/Authenticate';
import User from './containers/User/User';
import Comic from './containers/Comic/Comic';
import classes from './App.css';
import * as actions from './store/actions/index';


class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    
    let routes = (
      <Switch>
        <Route path="/" exact component={ Auth } />
        <Redirect to="/" />
      </Switch>
    )

    if(this.props.isAuthenticated){
      routes = (
        <Switch>
          <Route path="/comic" component={ Comic } />
          <Route path="/" exact component={ User } />
          <Redirect to="/" />
        </Switch>
      )
    }

    return (
      <Aux>
        { routes }
        <div className={classes.Backdrop}></div>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
