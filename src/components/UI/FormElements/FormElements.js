import React from 'react';
import classes from './FormElements.css';

const element = props => {
    let element = null;
    let elementClasses = [];

    if(!props.invalid && props.touched){
        elementClasses.push(classes.Invalid);
    }

    switch(props.config.element){
        case('label'):
            elementClasses.push(classes.Label)
            element = <label 
                        htmlFor={props.name}
                        className={elementClasses.join(' ')}>{props.text}</label>;
            break;
        case('input'):
            const _type = props.config.config.type;
            if(_type !== 'checkbox' || _type !== 'radio'){                   
                elementClasses.push(classes.InputText);
            }
            element = <input 
                        {...props.config.config}  
                        name={props.name}
                        value={props.config.value}
                        onChange={props.changed}
                        className={elementClasses.join(' ')} />;
            break;
        case('textarea'):
            element = <textarea />;
            break;
        case('select'):
            element = <select></select>
            break;
        case('button'):
            element = <button type="submit">{props.config.config.text}</button>;
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

    return <div className={classes.FormControl}>{element}</div>;
};

export default element;