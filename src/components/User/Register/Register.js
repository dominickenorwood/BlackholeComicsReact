import React from 'react';
import Form from '../../../containers/Forms/Forms';

import classes from './Register.css';

const register = props => {
    const document = {
        email: {
            element: 'input',
            config: {
                type: 'email',
                placeholder: 'Enter Membership Email'
            },
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false,
            label: 'Secret Identity'
        },
        password: {
            element: 'input',
            config: {
                type: 'password',
                placeholder: 'Secret Words'
            },
            value: '',
            validation: {
                required: true,
                minLength: 8
            },
            valid: false,
            touched: false,
            label: 'Password'
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
            <h1 className={classes.Heading}>Register</h1>
            <Form document={document} submit={props.submitHandler} name={'register'} />
        </div>
    );
}

export default register;