import instance from '../../api/postToAPI';
import * as actionTypes from './actionTypes';

export const newUser = (userId, email, username) => {
    return {
        type: actionTypes.NEW_USER,
        userId,
        email,
        username
    }
}

export const fetchUser = user => {
    return {
        type: actionTypes.FETCH_USER,
        ...user
    }
}

export const getUser = (token, userId) => {
    return dispatch => {
        const queryParams = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`;

        instance.get(`/users.json${queryParams}`)
            .then(response => {
                console.log('[FETCHED USER]', response);
            })
            .catch(error => {
                console.log('[GET NEW USER ERROR]', error);
            });
    }
}

export const postNewUser = user => {
    return dispatch => {
        instance.post('/users.json', user)
            .then(response => {
                console.log('[NEW USER]', response);
                dispatch(newUser(user.userId, user.email, user.username));
            })
            .catch(error => {
                console.log('[POST NEW USER ERROR]', error);
            });
    }
}