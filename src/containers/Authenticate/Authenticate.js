import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Auxillary/Auxillary';
import Login from '../../components/User/Login/Login';
import Register from '../../components/User/Register/Register';
import APIErrorMessage from '../../helpers/APIErrorMessages';
import * as CONSTANTS from '../../helpers/ConstantVars';
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

    authenticateLogin = (event) => {
        event.preventDefault();
        this.setState({ required : false, errors: [] })

        if(!this.state.authenticate.email || !this.state.authenticate.password){
            return this.setState({ required : true, errors: [{ message : CONSTANTS.FORM_FIELDS_REQUIRED }] })
        }
        
        if(!this.state.valid){
            return this.setState({ errors: [{ message : CONSTANTS.FORM_FIELDS_NOT_VALID }] })
        }

        console.log('[Auth User]', this.state.authenticate);
        this.props.onAuth(this.state.authenticate.email, this.state.authenticate.password, null, false);
    }

    authenticateRegister = (event) => {
        event.preventDefault();
        this.setState({ required : false, errors: [] })

        if(!this.state.authenticate.email || !this.state.authenticate.password || !this.state.authenticate.username || !this.state.authenticate.confirmPassword){
            return this.setState({ required : true, errors: [{ message : CONSTANTS.FORM_FIELDS_REQUIRED }] })
        }
        
        if(!this.state.valid || this.state.authenticate.password !== this.state.authenticate.confirmPassword){
            return this.setState({ errors: [{ message : CONSTANTS.FORM_FIELDS_NOT_VALID }] })
        }

        console.log('[Auth User]', this.state.authenticate);
        this.props.onAuth(this.state.authenticate.email, this.state.authenticate.password, this.state.authenticate.username, true);
    }

    switch = (event) => {
        event.preventDefault();

        if(this.props.authError){
            this.props.authClearErr();
        }
        
        this.setState({ 
            login : !this.state.login,
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
         });
         
    }

    render() {
        let errors = null;

        if(this.state.errors.length > 0){
            errors = this.state.errors;
        }

        if(this.props.authError){
            errors = [{ message : APIErrorMessage(this.props.authError.message) }]
        }

        let form = <Login 
                    submitHandler={ this.authenticateLogin } 
                    switchHandler={ this.switch }
                    validateHandler={ this.validateHandler }
                    required={ this.state.required }
                    update={ this.updateAuthState }
                    errors={ errors }
                    authenticate={ this.state.authenticate } />;

        if(!this.state.login){
            form = <Register 
                    submitHandler={ this.authenticateRegister } 
                    switchHandler={ this.switch }
                    validateHandler={ this.validateHandler }
                    required={ this.state.required }
                    update={ this.updateAuthState }
                    errors={ errors }
                    authenticate={ this.state.authenticate } />;
        }

        return(
            <Aux>
                { form }
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
        authError: state.auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, username, isNew) => dispatch(actions.auth(email, password, username, isNew)),
        authClearErr: () => dispatch(actions.authClearErr())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Authenticate);