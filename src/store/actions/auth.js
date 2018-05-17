
import { postNewUser, getUser } from './';

// axios endpoint instances
import authNewUser from '../../api/authNewUser';
import authExistingUser from '../../api/authExistingUser';

// constants clusters
import * as keys from '../../api/keys';
import * as actionTypes from './actionTypes';


export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token,
        userId
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');

    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime);
    }
}

export const auth = (email, password, username = null) => {
    return dispatch => {
        dispatch(authStart());

        const authData = {
            returnSecureToken: true,
            email,
            password
        };

        let instance = authNewUser;
        if(!username){
            instance = authExistingUser;
        }

        instance.post(`?key=${keys.AUTH_KEY}`, authData)
            .then(response => {
                console.log(response);
                const tokenExpiration = response.data.expiresIn;

                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('tokenExpiration', tokenExpiration);
                localStorage.setItem('userId', response.data.localId);

                dispatch(authSuccess(response.data.idToken, response.data.localId));
                dispatch(checkAuthTimeout(tokenExpiration));

                console.log('[AUTH RESPONSE]', response);
                if(username){
                    const user = {
                        email: response.data.email,
                        userId: response.data.localId,
                        username
                    }
                    dispatch(postNewUser(user))
                } else {
                    dispatch(getUser(response.data.idToken, response.data.localId))
                }

            })
            .catch(err => {
                console.log('[CATCH ERROR]', err.response.data.error);
                dispatch(authFail(err.response.data.error));
            });
    }
}

export const setAuthRedirectPath = path => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');

        if(!token){
            dispatch(logout());
        } else {
            const tokenExpiration = new Date(localStorage.getItem('tokenExpiration'));
            if(tokenExpiration <= new Date()){
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout(tokenExpiration));
            }
        }
    }
}