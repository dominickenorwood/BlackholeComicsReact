import React from 'react';

import FormInput from '../../../../widgets/Forms/Input';
import FormTextArea from '../../../../widgets/Forms/TextArea';

import classes from './PhysicalData.css';

const physicalData = props => {

    return (
        <main className={ classes.Main }>
            <div className={ classes.Wrapper }>
                <div className={ classes.Control }>
                    <label className={ classes.Label }>First Name</label>
                    <FormInput 
                        elementClass={ classes.Input } 
                        type="text"
                        value={ props.firstName || '' }
                        updateKey="first_name"
                        updateStore={ props.update } />
                </div>
                <div className={ classes.Control }>
                    <label className={ classes.Label }>Last Name</label>
                    <FormInput 
                        elementClass={ classes.Input } 
                        type="text"
                        value={ props.lastName || '' }
                        updateKey="last_name"
                        updateStore={ props.update } />
                </div>
            </div>
        </main>
    )
}

export default physicalData;