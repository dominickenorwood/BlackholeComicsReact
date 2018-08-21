import React from 'react';
import Password from './Password/Password';
import FormInput from '../../../../widgets/Forms/Input';
import FormTextArea from '../../../../widgets/Forms/TextArea';

import defaultAvatar from '../../../../images/batman-logo.png'
import classes from './SiteData.css';

const siteData = props => {
    const avatar = props.user.avatar ? props.user.avatar : defaultAvatar;
    return (
        <header className={ classes.Header }>
            <div className={ classes.Wrapper }>
                <div className={ classes.Avatar }>
                    <img src={ avatar } alt="avatar" />
                </div>
                <div className={ classes.Credentials }>
                    <div className={ classes.Control }>
                        <label className={ classes.Label }>Username</label>
                        <FormInput 
                            type="text" 
                            value={ props.user.username || '' }
                            elementClass={ classes.Input } 
                            invalidClass={ classes.Invalid }
                            validate={{ required: true, minLength: 6 }}
                            validateContainer={ props.validateHandler }
                            updateStore={ (value) => props.update({ username: value }) } />
                    </div>
                    <div className={ classes.Control }>
                        <label className={ classes.Label }>Email</label>
                        <FormInput 
                            type="text" 
                            value={ props.user.email || '' }
                            elementClass={ classes.Input } 
                            invalidClass={ classes.Invalid }
                            validate={{ required: true, isEmail: true }}
                            validateContainer={ props.validateHandler }
                            updateStore={ (value) => props.update({ email: value }) } />
                    </div>
                    <Password />
                </div>
            </div>
            <div className={ classes.Story }>
                <label className={ classes.Label }>Story</label>
                <FormTextArea
                    maxLength='200'
                    value={ props.user.story || '' }
                    placeholder="What is your origin story?"
                    elementClass={ classes.TextArea }
                    updateStore={ (value) => props.update({ story: value }) } />
            </div>
        </header>
    )
}

export default siteData;