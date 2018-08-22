import React from 'react';

import classes from './Errors.css';

const errors = props => {

    return(
        <div className={ classes.Errors }>
            {
                props.messages.map((error, index) => <p className={ classes.Error } key={ index }>{ error.message }</p>)
            }
        </div>
    )
}

export default errors;