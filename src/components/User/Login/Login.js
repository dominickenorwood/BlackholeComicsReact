import React from 'react';
import Form from '../../../containers/Forms/Forms';

import classes from './Login.css';

const login = props => {
    const document = {
        email: {
            element: 'input',
            config: {
                type: 'email',
                placeholder: 'Email or Username'
            },
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false,
            label: 'Enter a Secret Identity.'
        },
        password: {
            element: 'input',
            config: {
                type: 'password',
                placeholder: 'Password'
            },
            value: '',
            validation: {
                required: true,
                minLength: 6
            },
            valid: false,
            touched: false,
            label: 'Cast Your Magical Spell.'
        },
        button: {
            element: 'button',
            config: {
                text: 'Submit'
            }
        }
    };

    return (
        <div className={classes.Login}>
            <h1 className={classes.Heading}>Login</h1>
            <Form document={document} submit={props.submitHandler} name={'user-login'} />
            <footer>
                <p>Want to become a <a href="#" onClick={(event) => props.switchHandler(event)}>member</a>?</p>
                <p>Forgot your <a href="#">password</a> or <a href="#">email</a>?</p>
            </footer>
        </div>
    );
}

export default login;