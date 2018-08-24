import React from 'react';
import Form from '../../../containers/Forms/Forms';
import FormInput from '../../../widgets/Forms/Input';

import classes from './Login.css';

const login = props => {

    return (
        <div className={classes.Login}>
            <h1 className={classes.Heading}>Login</h1>
            <div className={ classes.Control }>
                <label className={ classes.Label }>Enter a Secret Identity.</label>
                <FormInput 
                    type="email" 
                    value=""
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
                    value=""
                    placeholder="Password"
                    elementClass={ classes.Input } 
                    invalidClass={ classes.Invalid }
                    validate={{ minLength: 6 }}
                    validateContainer={ props.validateHandler }
                    required={ props.required }
                    updateStore={ (value) => props.update({ password: value }) } />
            </div>
            <button onClick={ props.submitHandler } className={ classes.Button }>Submit</button>
            <footer>
                <p>Want to become a <a href="#" onClick={(event) => props.switchHandler(event)}>member</a>?</p>
                <p>Forgot your <a href="#">password</a> or <a href="#">email</a>?</p>
            </footer>
        </div>
    );
}

export default login;

// const document = {
//     email: {
//         element: 'input',
//         config: {
//             type: 'email',
//             placeholder: 'Email or Username'
//         },
//         value: '',
//         validation: {
//             required: true,
//             isEmail: true
//         },
//         valid: false,
//         touched: false,
//         label: 'Enter a Secret Identity.'
//     },
//     password: {
//         element: 'input',
//         config: {
//             type: 'password',
//             placeholder: 'Password'
//         },
//         value: '',
//         validation: {
//             required: true,
//             minLength: 6
//         },
//         valid: false,
//         touched: false,
//         label: 'Cast Your Magical Spell.'
//     },
//     button: {
//         element: 'button',
//         config: {
//             text: 'Submit'
//         }
//     }
// };