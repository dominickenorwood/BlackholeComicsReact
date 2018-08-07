import instance from '../../api/postToAPI';
import * as actionTypes from './actionTypes';

export const updateUser = user => {
    return {
        type: actionTypes.UPDATE_USER,
        user
    }
}

export const getUser = (token, userId) => {
    return dispatch => {
        const queryParams = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`;

        instance.get(`/users.json${queryParams}`)
            .then(response => {
                console.log('[FETCHED USER]', response);
                const userKey = Object.keys(response.data);
                const userData = {
                    ...response.data[userKey]
                };
                dispatch(updateUser(userData));
            })
            .catch(error => {
                console.log('[GET USER ERROR]', error);
            });
    }
}

export const postNewUser = user => {
    console.log('[Post New User]', user);
    return dispatch => {
        instance.post('/users.json', user)
            .then(response => {
                console.log('[NEW USER]', response);
                dispatch(updateUser(user));
            })
            .catch(error => {
                console.log('[POST NEW USER ERROR]', error);
            });
    }
}

export const updateCurrentUser = user => {
    return dispatch => {
        instance.post('/users.json', user)
            .then(response => {
                console.log('[UPDATE CURRENT USER]', response);
                dispatch(() => console.log())
            })
            .catch(error => {
                console.log('[UPDATE CURRENT USER ERROR]', error);
            });
    }
}