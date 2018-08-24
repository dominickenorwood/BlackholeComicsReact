import React from 'react';
import FormInput from '../../../widgets/Forms/Input';
import ErrorMessages from '../../Errors/Errors';

import classes from './Login.css';

const login = props => {
    const errors = props.errors ? <div className={ classes.FormErrors }><ErrorMessages messages={ props.errors } /></div> : null;

    return (
        <div className={classes.Login}>
            <h1 className={classes.Heading}>Login</h1>
            <form className={ classes.Form } onSubmit={ props.submitHandler } noValidate>
                { errors }
                <div className={ classes.Control }>
                    <label className={ classes.Label }>Enter a Secret Identity.</label>
                    <FormInput 
                        type="email" 
                        value={ props.authenticate.email || '' }
                        placeholder="Email Address"
                        elementClass={ classes.Input } 
                        invalidClass={ classes.Invalid }
                        validate={{ isEmail: true }}
                        validateContainer={ props.validateHandler }
                        required={ props.required }
                        updateStore={ (value) => props.update({ email: value }) } />
                </div>
                <div className={ classes.Control }>
                    <label className={ classes.Label }>Cast Your Magical Spell.</label>
                    <FormInput 
                        type="password" 
                        value={ props.authenticate.password || '' }
                        placeholder="Password"
                        elementClass={ classes.Input } 
                        invalidClass={ classes.Invalid }
                        validate={{ isPassword: true }}
                        validateContainer={ props.validateHandler }
                        required={ props.required }
                        updateStore={ (value) => props.update({ password: value }) } />
                </div>
                <button className={ classes.Button }>Submit</button>
            </form>
            <footer>
                <p>Want to become a <a href="#" onClick={(event) => props.switchHandler(event)}>member</a>?</p>
                <p>Forgot your <a href="#">password</a> or <a href="#">email</a>?</p>
            </footer>
        </div>
    );
}

export default login;