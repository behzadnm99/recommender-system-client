import { USER_SIGNUP, USER_SIGNUP_FAILURE, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS } from '../consts';

export const signupRequest = data => ({
    payload: data,
    type: USER_SIGNUP_REQUEST
})

export const signupSuccess = response => ({
    payload: response,
    type: USER_SIGNUP_SUCCESS
})

export const signupFailure = error => ({
    payload: error,
    type: USER_SIGNUP_FAILURE
})

export const signup = {
    type: USER_SIGNUP
}