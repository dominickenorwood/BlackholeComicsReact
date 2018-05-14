import React, { Component } from 'react';
import Element from '../../components/UI/FormElements/FormElements';
import classes from './Forms.css';

class Forms extends Component {
    state = {
        controls: this.props.document
    }

    inputChangeHandler = (event, key) => {
        const updateAuthState = {
            controls: {
                ...this.state.controls,
                [key]: {
                    ...this.state.controls[key],
                    value: event.target.value
                }

            }

        }
        this.setState(updateAuthState);
    }

    render(){
        return (
            <form>           
                {
                    Object.keys(this.state.controls).map(key => {
                        let label = null;

                        if(this.state.controls[key].label){
                            label = <Element 
                                        name={key} 
                                        config={{element: 'label'}} 
                                        text={this.state.controls[key].label} />;
                        }
                        return (
                            <div key={key}>
                                {label}
                                <Element 
                                    config={this.state.controls[key]}
                                    name={key}
                                    changed={(event) => this.inputChangeHandler(event, key)} 
                                    />
                            </div>
                        )
                    })
                }
            </form>
        );
    }
}

export default Forms;