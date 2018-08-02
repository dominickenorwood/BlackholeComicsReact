import React, { Component } from 'react';

class Input extends Component {
    state = {
        value : this.props.value
    }

    changed = value => {
        this.setState({ value })
    }

    render(){

        return(
            <input 
                className={ this.props.elementClass } 
                value={ this.state.value }
                type={ this.props.type }
                onChange={ (event) => this.changed(event.target.value) } />
        )
    }
}

export default Input;