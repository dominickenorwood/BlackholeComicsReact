import React from 'react';
import Password from './Password/Password';

import defaultAvatar from '../../../../images/batman-logo.png'
import classes from './SiteData.css';

const siteData = props => {
    const avatar = props.avatar ? props.avatar : defaultAvatar;
    return (
        <header className={ classes.Header }>
            <div className={ classes.Avatar }>
                <img src={ avatar } alt="avatar" />
            </div>
            <div className={ classes.Credentials }>
                <div className={ classes.Control }>
                    <label className={ classes.Label }>Username</label>
                    <input className={ classes.Input } type="text" value={ props.username} />
                </div>
                <div className={ classes.Control }>
                    <label className={ classes.Label }>Email</label>
                    <input className={ classes.Input } type="email" value={ props.email } />
                </div>
                <Password />
            </div>
        </header>
    )
}

export default siteData;