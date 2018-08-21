import React, { Component } from 'react';
import ValidateControl from '../../helpers/ValidateForm';

import Caret from '../../images/SVG/DownCaret';

class Select extends Component {
    state = {
        value : this.props.value,
        valid : true
    }

    changed = (value, name) => {
        this.setState({ value });
        
        if(this.props.validate){
            const valid  = ValidateControl(value, this.props.validate);
            this.setState({ valid });
            this.props.validateContainer( valid );
        }

        this.props.updateStore(value, name);
    }

    options = () => {
        return this.props.config.map((obj, index) => <option value={ obj.value } key={ index }>{ obj.name }</option>)
    }

    render(){
        const invalidControl = !this.state.valid ? this.props.invalidClass : null;

        return(
            <div className={[ this.props.containerClass, invalidControl ].join(' ') } >
                <select
                    className={ this.props.elementClass }
                    value={ this.state.value }
                    onChange={ (event) => this.changed(event.target.value, event.target.options[event.target.selectedIndex].text) }>
                    <option value="">{ this.props.placeholder }</option>
                    { this.options() }
                </select>
                <div className={ this.props.spriteClass }>
                    <Caret />
                </div>
            </div>
            
        )
    }
}

export default Select;

