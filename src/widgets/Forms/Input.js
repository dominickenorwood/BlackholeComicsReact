import React, { Component } from 'react';
import ValidateControl from '../../helpers/ValidateForm';

class Input extends Component {
    state = {
        value : this.props.value,
        valid : true
    }

    changed = value => {
        this.setState({ value });
        
        if(this.props.validate){
            const valid  = ValidateControl(value, this.props.validate);
            this.setState({ valid });
            this.props.validateContainer( valid );
        }

        this.props.updateStore(value);
    }

    render(){
        const invalidControl = !this.state.valid ? this.props.invalidClass : null;

        return(
            <input 
                className={[ this.props.elementClass, invalidControl ].join(' ') } 
                value={ this.state.value }
                type={ this.props.type }
                onChange={ (event) => this.changed(event.target.value) }
                placeholder={ this.props.placeholder } />
        )
    }
}

export default Input;