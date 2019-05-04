import { USER_LOGIN, USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from '../consts';

const loginDefaultState = {
    errorMsg: null,
    hasError: false,
    isSuccess: false,
    isLoading: false,
    data: null
}

export default (state = loginDefaultState, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST: {
            return {
                ...state,
                errorMsg: null,
                hasError: false,
                isSuccess: false,
                isLoading: true
            }
        }
        case USER_LOGIN_SUCCESS: {
            return {
                ...loginDefaultState,
                isSuccess: true,
                data: action.payload,
            }
        }
        case USER_LOGIN_FAILURE: {
            return {
                errorMsg: action.payload,
                hasError: true,
                isSuccess: false,
                isLoading: false,
            }
        }
        case USER_LOGIN: {
            return {
                ...loginDefaultState
            }
        }
        default:
            return {
                ...loginDefaultState
            }
    }
}