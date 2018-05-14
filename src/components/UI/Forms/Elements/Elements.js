import React from 'react';
import classes from './Elements.css';

const element = props => {
    let element = null;
    console.log(props.config);
    switch(props.config.element){
        case('label'):
            element = <label />;
            break;
        case('input'):
            element = <input {...props.config.config} value={props.config.value} />;
            break;
        case('textarea'):
            element = <textarea />;
            break;
        case('select'):
            element = <select></select>
            break;
        case('button'):
            element = <button></button>;
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