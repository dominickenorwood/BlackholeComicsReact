import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    userId: null,
    email: null, 
    username: null, 
    first_name: null, 
    last_name: null,
    avatar: null, 
    home_address: {
        street: null, 
        apartment: null, 
        state: {
            name: null,
            code: null,
        },
        country: {
            name: null,
            code: null
        },
        zipcode: null,
    },
    shipping_address: {
        street: null,
        apartment: null,
        state: {
            name: null,
            code: null,
        },
        country: {
            name: null,
            code: null
        },
        zipcode: null,
    },
    story: null
};

const updateUser = (state, action) => {
    return updateObject(state, {
        ...action.user
    })
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.UPDATE_USER: return updateUser(state, action);
        default: return state;
    }
}

export default reducer;