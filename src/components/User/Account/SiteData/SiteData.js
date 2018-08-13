import React from 'react';
import Password from './Password/Password';
import FormInput from '../../../../widgets/Forms/Input';
import FormTextArea from '../../../../widgets/Forms/TextArea';

import defaultAvatar from '../../../../images/batman-logo.png'
import classes from './SiteData.css';

const siteData = props => {
    const avatar = props.avatar ? props.avatar : defaultAvatar;
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
                            elementClass={ classes.Input } 
                            type="text" 
                            value={ props.username }
                            validate={{ required: true, minLength: 6 }}
                            invalidClass={ classes.Invalid }
                            validateContainer={ props.validateHandler }
                            updateKey="username"
                            updateStore={ props.update } />
                    <div className={ classes.Control }>
                        <label className={ classes.Label }>Email</label>
                        <FormInput 
                            elementClass={ classes.Input } 
                            type="email" 
                            value={ props.email }
                            validate={{ required: true, isEmail: true }}
                            invalidClass={ classes.Invalid }
                            validateContainer={ props.validateHandler }
                            updateKey="email"
                            updateStore={ props.update } />
                    </div>
                    </div>
                    <Password />
                </div>
            </div>
            <div className={ classes.Story }>
                <label className={ classes.Label }>Story</label>
                <FormTextArea
                    elementClass={ classes.TextArea }
                    placeholder="What is your origin story?"
                    value={ props.story ? props.story : '' }
                    maxLength='200'
                    updateKey="story"
                    updateStore={ props.update } />
            </div>
        </header>
    )
}

export default siteData;