import React from 'react';
import Form from '../../../containers/Forms/Forms';

import classes from './Register.css';

const register = props => {
    const document = {
        email: {
            element: 'input',
            config: {
                type: 'email',
                placeholder: 'Enter Email Address'
            },
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false,
            label: 'How will the mayor contact you?'
        },
        username: {
            element: 'input',
            config: {
                type: 'text',
                placeholder: 'Username'
            },
            value: '',
            validation: {
                required: true,
                minLength: 3
            },
            valid: false,
            touched: false,
            label: 'Your secret identity'
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
            label: 'Your secret magical phrase.'
        },
        confirm: {
            element: 'input',
            config: {
                type: 'password',
                placeholder: 'Confirm password'
            },
            value: '',
            validation: {
                required: true,
                minLength: 8
            },
            valid: false,
            touched: false,
            label: 'What was that phrase again?'
        },
        button: {
            element: 'button',
            config: {
                text: 'Submit'
            }
        }
    };

    return (
        <div className={classes.Register}>
            <h1 className={classes.Heading}>Become A Member</h1>
            <p>Find out what the advantages are from becoming a member.</p>
            <Form document={document} submit={props.submitHandler} name={'register'} />
            <footer>
                <p>Want to go back to <a href="#" onClick={(event) => props.switchHandler(event)}>login</a>?</p>
            </footer>
        </div>
    );
}

export default register;