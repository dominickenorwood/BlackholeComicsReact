import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Auxillary/Auxillary';
import Login from '../../components/User/Login/Login';
import Register from '../../components/User/Register/Register';
import ValidateControl from '../../helpers/ValidateForm';
import * as actions from '../../store/actions';

class Authenticate extends Component {

    state = {
        login: true,
        authenticate: {
            email: null,
            password: null,
            confirmPassword: null,
            username: null
        },
        valid: true,
        required: false,
        errors: [],
        success: []
    };

    validateHandler = valid => {
        this.setState({ valid })
    }

    updateAuthState = newState => {
        this.setState({ authenticate: { ...this.state.authenticate, ...newState }})
    }

    submitHandler = event => {
        event.preventDefault();
        if(!this.state.valid){
            return console.log('Cannot submit, form is invalid!!!');
        }

        

        console.log('Submit Form');
        // const username = (form.form_name === 'register') ? form.username.value : null;
        // console.log('[USER]', form);
        // this.props.onAuth(form.email.value, form.password.value, username);
    }

    authenticateRegister = (event) => {
        console.log('Authenticate and Register New User');
    }

    authenticateLogin = (event) => {
        event.preventDefault();

        if(!this.state.authenticate.email || !this.state.authenticate.password){
            return this.setState({ required : true })
        }
        
        if(!this.state.valid){
            return console.log('Cannot submit, form is invalid!!!');
        }

        this.setState({ required : false })
        console.log('[Auth User]', this.state.authenticate);
        this.props.onAuth(this.state.authenticate.email, this.state.authenticate.password, null);
    }

    switch = (event) => {
        event.preventDefault();
        console.log('switch views')
        this.setState({ login : !this.state.login });
    }

    render() {
        let form = <Login 
                    submitHandler={ this.authenticateLogin } 
                    switchHandler={ this.switch }
                    validateHandler={ this.validateHandler }
                    required={ this.state.required }
                    update={ this.updateAuthState } />;

        if(!this.state.login){
            form = <Register 
                    submitHandler={ this.submitHandler } 
                    switchHandler={ this.switch } />;
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