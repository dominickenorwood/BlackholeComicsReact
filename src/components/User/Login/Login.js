import React from 'react';
import Form from '../../../containers/Forms/Forms';

const login = props => {
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
        <div>
            <h1>Login to Blackhole Comics</h1>
            <Form document={document} />
            <footer>
                <p>Forgot your password or email?</p>
            </footer>
        </div>
    );
}

export default login;