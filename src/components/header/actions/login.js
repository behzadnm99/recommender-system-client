import { USER_LOGIN, USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from '../consts';

export const loginRequest = data => ({
    payload: data,
    type: USER_LOGIN_REQUEST
})

export const loginSuccess = response => ({
    payload: response,
    type: USER_LOGIN_SUCCESS
})

export const loginFailure = error => ({
    payload: error,
    type: USER_LOGIN_FAILURE
})

export const login = {
    type: USER_LOGIN
}