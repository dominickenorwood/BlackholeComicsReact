import React from 'react';
import Password from './Password/Password';
import FormInput from '../../../UI/FormElements/Input';

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
                        {/*<input className={ classes.Input } type="text" placeholder={ props.username} />*/}
                        <FormInput elementClass={ classes.Input } type="text" value={ props.username } />
                    </div>
                    <div className={ classes.Control }>
                        <label className={ classes.Label }>Email</label>
                        {/*<input className={ classes.Input } type="email" placeholder={ props.email } />*/}
                        <FormInput elementClass={ classes.Input } type="email" value={ props.email } />
                    </div>
                    <Password />
                </div>
            </div>
            <div className={ classes.Story }>
                <label className={ classes.Label }>Story</label>
                <textarea 
                    className={ classes.TextArea } 
                    placeholder="What is your origin story?" 
                    defaultValue={ props.story } 
                    maxLength="200"></textarea>
            </div>
        </header>
    )
}

export default siteData;