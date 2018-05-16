import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Auxillary/Auxillary';
import Login from '../../components/User/Login/Login';
import Register from '../../components/User/Register/Register';
import * as actions from '../../store/actions';

class Authenticate extends Component {

    state = {};

    componentDidMount(){

    }

    submitHandler = (event, form) => {
        event.preventDefault();
        const username = (form.form_name === 'register') ? form.username.value : null;
        console.log('[USER]', form);
        this.props.onAuth(form.email.value, form.password.value, username);
    }

    render() {
        return(
            <Aux>
                <div>Authenticate User</div>
                <Login submitHandler={this.submitHandler} />
                <Register submitHandler={this.submitHandler} />
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
        error: state.auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, username) => dispatch(actions.auth(email, password, username))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Authenticate);