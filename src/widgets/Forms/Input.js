import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';
import ValidateControl from '../../helpers/ValidateForm';
import ErrorMessages from '../../components/Errors/Errors';

class Input extends Component {
    state = {
        value : this.props.value,
        isValid : {
            valid: true
        }
    }

    changed = value => {
        this.setState({ value });
        
        if(this.props.validate){
            const isValid  = ValidateControl(value, this.props.validate, this.props.placeholder);
            this.setState({ isValid });
            this.props.validateContainer( isValid.valid );
        }

        this.props.updateStore(value);
    }

    render(){
        const invalidControl = !this.state.isValid.valid ? this.props.invalidClass : null;
        const errors = !this.state.isValid.valid ? <ErrorMessages messages={ this.state.isValid.errors } /> : null;

        return(
            <Aux>
                <input 
                    className={[ this.props.elementClass, invalidControl ].join(' ') } 
                    value={ this.state.value }
                    type={ this.props.type }
                    onChange={ (event) => this.changed(event.target.value) }
                    placeholder={ this.props.placeholder } />
                { errors }
            </Aux>
        )
    }
}

export default Input;