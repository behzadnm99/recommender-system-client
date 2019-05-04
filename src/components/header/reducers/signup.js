import { USER_SIGNUP, USER_SIGNUP_FAILURE, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS } from '../consts';

const signupDefaultState = {
    errorMsg: null,
    hasError: false,
    isSuccess: false,
    isLoading: false,
    data: null
}

export default (state = signupDefaultState, action) => {
    switch (action.type) {
        case USER_SIGNUP_REQUEST: {
            return {
                ...state,
                errorMsg: null,
                hasError: false,
                isSuccess: false,
                isLoading: true
            }
        }
        case USER_SIGNUP_SUCCESS: {
            return {
                ...signupDefaultState,
                isSuccess: true,
                data: action.payload,
            }
        }
        case USER_SIGNUP_FAILURE: {
            return {
                errorMsg: action.payload,
                hasError: true,
                isSuccess: false,
                isLoading: false,
            }
        }
        case USER_SIGNUP: {
            return {
                ...signupDefaultState
            }
        }
        default:
            return {
                ...signupDefaultState
            }
    }
}