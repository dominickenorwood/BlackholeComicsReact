import React from 'react';
import classes from './FormElements.css';

const element = props => {
    let element = null;

    switch(props.config.element){
        case('label'):
            element = <label htmlFor={props.name}>{props.text}</label>;
            break;
        case('input'):
            element = <input 
                        {...props.config.config}  
                        name={props.name}
                        value={props.config.value}
                        onChange={props.changed} />;
            break;
        case('textarea'):
            element = <textarea />;
            break;
        case('select'):
            element = <select></select>
            break;
        case('button'):
            element = <button type="button">{props.config.config.text}</button>;
            break;
        case('datalist'):
            element = <datalist></datalist>;
            break;
        case('output'):
            element = <output></output>;
            break;
        case('fieldset'):
            element = <fieldset></fieldset>;
            break;
        case('legend'):
            element = <legend></legend>;
            break;
        default:
            element = <div>Element does not exist</div>;
    }

    return <div>{element}</div>;
};

export default element;