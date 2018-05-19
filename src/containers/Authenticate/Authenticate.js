import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Auxillary/Auxillary';
import Login from '../../components/User/Login/Login';
import Register from '../../components/User/Register/Register';
import * as actions from '../../store/actions';

class Authenticate extends Component {

    state = {
        login: true
    };

    componentDidMount(){

    }

    submitHandler = (event, form) => {
        event.preventDefault();
        const username = (form.form_name === 'register') ? form.username.value : null;
        console.log('[USER]', form);
        this.props.onAuth(form.email.value, form.password.value, username);
    }

    switch = (event) => {
        event.preventDefault();
        console.log('switch views')
        this.setState({ login : !this.state.login });
    }

    render() {
        let form = <Login 
                    submitHandler={this.submitHandler} 
                    switchHandler={this.switch} />;

        if(!this.state.login){
            form = <Register 
                    submitHandler={this.submitHandler} 
                    switchHandler={this.switch} />;
        }

        return(
            <Aux>
                {form}
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