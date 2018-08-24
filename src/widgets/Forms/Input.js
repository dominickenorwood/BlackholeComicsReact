import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';
import ValidateControl from '../../helpers/ValidateForm';
import ErrorMessages from '../../components/Errors/Errors';

class Input extends Component {
    state = {
        value : this.props.value,
        isValid : {
            valid: true,
            errors: []
        },
        touched: false
    }

    validate = value => {
        const isValid  = ValidateControl(value, this.props.validate, this.props.placeholder);
        this.setState({ isValid });
        this.props.validateContainer( isValid.valid );
    }

    changed = value => {
        this.setState({ value, touched: true });
        
        if(this.props.validate){
            this.validate(value);
        }

        this.props.updateStore(value);
    }

    render(){
        let invalidControl = null;
        let errors = null;
        
        if(!this.state.isValid.valid) {
            invalidControl = this.props.invalidClass;
            errors = <ErrorMessages messages={ this.state.isValid.errors } />
        }

        if(this.props.match && this.state.touched){
            const isValid = ValidateControl(this.state.value, { matchVal : true, val: this.props.match }, this.props.placeholder);
            if(!isValid.valid){
                invalidControl = this.props.invalidClass;
                errors = <ErrorMessages messages={ isValid.errors } />
            } else {
                invalidControl = null;
                errors = null;
            }
        }

        if(this.props.required && !this.state.touched){
            const isValid = ValidateControl(this.state.value, { required : true }, this.props.placeholder);
            errors = <ErrorMessages messages={ isValid.errors } />
        }

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