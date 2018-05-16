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

const createUser = (state, action) => {
    return updateObject(state, {
        userId: action.userId,
        email: action.email,
        username: action.username,
    })
}

const fetchUser = (state, action) => {
    return updateObject(state, {
        ...action
    })
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.NEW_USER: return createUser(state, action);
        case actionTypes.FETCH_USER: return fetchUser(state, action);
        default: return state;
    }
}

export default reducer;