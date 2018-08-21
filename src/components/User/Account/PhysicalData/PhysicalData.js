import React from 'react';

import FormInput from '../../../../widgets/Forms/Input';
import Select from '../../../../widgets/Forms/Select';
import countryConfig from '../../../../helpers/CountrySelectConfig';
import stateConfig from '../../../../helpers/StateSelectConfig';

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
                <Select
                    value={ props.user.home_address.country.code || '' }
                    placeholder='Country'
                    config={ countryConfig }
                    elementClass={ classes.Select }
                    containerClass={ classes.Container }
                    spriteClass={ classes.Sprite }
                    validateContainer={ props.validateHandler }
                    updateStore={ (value, name) => props.update({ home_address:{ ...props.user.home_address, country: { name, code: value } }}) } />
                <div className={ classes.Wrapper }>
                    <div className={ classes.Control }>
                        <Select
                            value={ props.user.home_address.state.code || '' }
                            placeholder='State'
                            config={ stateConfig }
                            elementClass={ classes.Select }
                            containerClass={ classes.Container }
                            spriteClass={ classes.Sprite }
                            validateContainer={ props.validateHandler }
                            updateStore={ (value, name) => props.update({ home_address:{ ...props.user.home_address, state: { name, code: value } }}) } />
                    </div>
                    <div className={ classes.Control }>
                        <FormInput 
                            type="text" 
                            value={ props.user.home_address.zipcode || '' }
                            placeholder='Zipcode'
                            elementClass={ classes.Input } 
                            validateContainer={ props.validateHandler }
                            updateStore={ (value) => props.update({ home_address:{ ...props.user.home_address, zipcode: value } }) } />
                    </div>
                </div>
            </div>
            <div className={ classes.Address }>
                <label className={ classes.Label }>Shipping Address</label>
                <FormInput 
                    type="text" 
                    value={ props.user.shipping_address.street || '' }
                    placeholder='Street'
                    elementClass={ classes.Input } 
                    validateContainer={ props.validateHandler }
                    updateStore={ (value) => props.update({ shipping_address:{ ...props.user.shipping_address, street: value } }) } />
                <FormInput 
                    type="text" 
                    value={ props.user.shipping_address.apartment || '' }
                    placeholder='Apartment #'
                    elementClass={ classes.Input } 
                    validateContainer={ props.validateHandler }
                    updateStore={ (value) => props.update({ shipping_address:{ ...props.user.shipping_address, apartment: value } }) } />
                <Select
                    value={ props.user.shipping_address.country.code || '' }
                    placeholder='Country'
                    config={ countryConfig }
                    elementClass={ classes.Select }
                    containerClass={ classes.Container }
                    spriteClass={ classes.Sprite }
                    validateContainer={ props.validateHandler }
                    updateStore={ (value, name) => props.update({ shipping_address:{ ...props.user.shipping_address, country: { name, code: value } }}) } />
                <div className={ classes.Wrapper }>
                    <div className={ classes.Control }>
                        <Select
                            value={ props.user.shipping_address.state.code || '' }
                            placeholder='State'
                            config={ stateConfig }
                            elementClass={ classes.Select }
                            containerClass={ classes.Container }
                            spriteClass={ classes.Sprite }
                            validateContainer={ props.validateHandler }
                            updateStore={ (value, name) => props.update({ shipping_address:{ ...props.user.shipping_address, state: { name, code: value } }}) } />
                    </div>
                    <div className={ classes.Control }>
                        <FormInput 
                            type="text" 
                            value={ props.user.shipping_address.zipcode || '' }
                            placeholder='Zipcode'
                            elementClass={ classes.Input } 
                            validateContainer={ props.validateHandler }
                            updateStore={ (value) => props.update({ shipping_address:{ ...props.user.shipping_address, zipcode: value } }) } />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default physicalData;