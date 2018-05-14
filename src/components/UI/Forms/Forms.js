import React from 'react';
import Element from './Elements/Elements';
import classes from './Forms.css';

const form = props => {
    const document = [];

    for(let key in props.document){
        document.push({
            config: props.document[key],
            key
        })
    }

    return (
        <form>           
            {
                document.map(element => (
                    <Element 
                        key={element.key}
                        config={element.config} />
                ))
            } 
        </form>
    );
}

export default form;