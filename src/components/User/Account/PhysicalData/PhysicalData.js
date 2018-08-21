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
                        type="text" 
                        value={ props.user.first_name || '' }
                        elementClass={ classes.Input } 
                        validateContainer={ props.validateHandler }
                        updateStore={ (value) => props.update({ first_name: value }) } />
                </div>
                <div className={ classes.Control }>
                    <label className={ classes.Label }>Last Name</label>
                    <FormInput 
                        type="text" 
                        value={ props.user.last_name || '' }
                        elementClass={ classes.Input } 
                        validateContainer={ props.validateHandler }
                        updateStore={ (value) => props.update({ last_name: value }) } />
                </div>
            </div>
            <div className={ classes.Address }>
                <label className={ classes.Label }>Home Address</label>
                <FormInput 
                        type="text" 
                        value={ props.user.home_address.street || '' }
                        placeholder='Street'
                        elementClass={ classes.Input } 
                        validateContainer={ props.validateHandler }
                        updateStore={ (value) => props.update({ home_address:{ ...props.user.home_address, street: value } }) } />
                <FormInput 
                        type="text" 
                        value={ props.user.home_address.apartment || '' }
                        placeholder='Apartment #'
                        elementClass={ classes.Input } 
                        validateContainer={ props.validateHandler }
                        updateStore={ (value) => props.update({ home_address:{ ...props.user.home_address, apartment: value } }) } />
            </div>
        </main>
    )
}

export default physicalData;