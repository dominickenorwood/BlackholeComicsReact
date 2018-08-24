import React from 'react';
import FormInput from '../../../widgets/Forms/Input';
import ErrorMessages from '../../Errors/Errors';

import classes from './Register.css';

const register = props => {
    const errors = props.errors ? <div className={ classes.FormErrors }><ErrorMessages messages={ props.errors } /></div> : null;

    return (
        <div className={classes.Register}>
            <h1 className={classes.Heading}>Become A Member</h1>
            <p>Find out what the advantages are from becoming a member.</p>
            <form className={ classes.Form } onSubmit={ props.submitHandler } noValidate>
                { errors }
                <div className={ classes.Control }>
                    <label className={ classes.Label }>How will the mayor contact you?</label>
                    <FormInput 
                        type="email" 
                        value={ props.authenticate.email || '' }
                        placeholder="Email Address"
                        elementClass={ classes.Input } 
                        invalidClass={ classes.Invalid }
                        validate={{ isEmail: true }}
                        validateContainer={ props.validateHandler }
                        required={ props.required }
                        updateStore={ (value) => props.update({ email : value }) } />
                </div>
                <div className={ classes.Control }>
                    <label className={ classes.Label }>What is your secret identity?</label>
                    <FormInput 
                        type="text" 
                        value={ props.authenticate.username || '' }
                        placeholder="Username"
                        elementClass={ classes.Input } 
                        invalidClass={ classes.Invalid }
                        validate={{ username : true }}
                        validateContainer={ props.validateHandler }
                        required={ props.required }
                        updateStore={ (value) => props.update({ username : value }) } />
                </div>
                <div className={ classes.Control }>
                    <label className={ classes.Label }>What is your secret magical word?</label>
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
                <div className={ classes.Control }>
                    <label className={ classes.Label }>What was that secret magic phrase again?</label>
                    <FormInput 
                        type="password" 
                        value={ props.authenticate.confirmPassword || '' }
                        placeholder="Confirm Password"
                        elementClass={ classes.Input } 
                        invalidClass={ classes.Invalid }
                        validateContainer={ props.validateHandler }
                        required={ props.required }
                        match={ props.authenticate.password }
                        updateStore={ (value) => props.update({ confirmPassword: value }) } />
                </div>
                <button className={ classes.Button }>Submit</button>
            </form>
            <footer>
                <p>Want to go back to <a href="#" onClick={(event) => props.switchHandler(event)}>login</a>?</p>
            </footer>
        </div>
    );
}

export default register;