import { MOVIES_GET, MOVIES_GET_FAILURE, MOVIES_GET_REQUEST, MOVIES_GET_SUCCESSFULL } from '../consts';

const moviesDefaultState = {
    errorMsg: null,
    hasError: false,
    isSuccess: false,
    isLoading: false,
    data: null
}

export default (state = moviesDefaultState, action) => {
    switch (action.type) {
        case MOVIES_GET_REQUEST: {
            return {
                ...state,
                errorMsg: null,
                hasError: false,
                isSuccess: false,
                isLoading: true
            }
        }
        case MOVIES_GET_SUCCESSFULL: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                data: action.payload,
            }
        }
        case MOVIES_GET_FAILURE: {
            return {
                errorMsg: action.payload,
                hasError: true,
                isSuccess: false,
                isLoading: false,
            }
        }
        case MOVIES_GET: {
            return {
                ...state
            }
        }
        default:
            return {
                ...state
            }
    }
}