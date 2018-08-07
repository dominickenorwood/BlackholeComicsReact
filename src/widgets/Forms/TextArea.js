import React, { Component } from 'react';
import ValidateControl from '../../helpers/ValidateForm';

class TextArea extends Component {
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

        const updateUser = {};
        updateUser[this.props.updateKey] = value;
        this.props.updateStore(updateUser);
    }

    render() {
        const invalidControl = !this.state.valid ? this.props.invalidClass : null;

        return(
            <textarea 
                className={[ this.props.elementClass, invalidControl ].join(' ') } 
                value={ this.state.value }
                maxLength={ this.props.maxLength }
                onChange={ (event) => this.changed(event.target.value) }
                placeholder={ this.props.placeholder }></textarea>
        )
    }
}

export default TextArea;