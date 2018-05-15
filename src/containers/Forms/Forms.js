import React, { Component } from 'react';
import Element from '../../components/UI/FormElements/FormElements';
import classes from './Forms.css';

class Forms extends Component {
    state = {
        controls: this.props.document
    }

    validate = (value, rules) => {
        let valid = true;

        if(rules.required){
            valid = value.trim() !== '' && valid;
        };

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            valid = pattern.test(value) && valid;
        };

        if(rules.minLength){
            valid = value.length >= rules.minLength && valid;
        };

        return valid;
    }

    inputChangeHandler = (event, key) => {
        let _valid = {};
        if(this.state.controls[key].validation){
           _valid = {
               valid: this.validate(event.target.value, this.state.controls[key].validation)
            }; 
        };

        let _touched = {};
        if(!this.state.controls[key].touched){
            _touched = {touched: true};
        }

        const updateAuthState = {
            controls: {
                ...this.state.controls,
                [key]: {
                    ...this.state.controls[key],
                    value: event.target.value,
                    ..._valid,
                    ..._touched
                }
            }
        }

        this.setState(updateAuthState);
    }

    render(){
        return (
            <form onSubmit={(event) => this.props.submit(event, {...this.state.controls, form_name: this.props.name})}>           
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
                            <div key={key} className={classes.FormControls}>
                                {label}
                                <Element 
                                    config={this.state.controls[key]}
                                    name={key}
                                    changed={(event) => this.inputChangeHandler(event, key)}
                                    invalid={this.state.controls[key].valid}
                                    touched={this.state.controls[key].touched}
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