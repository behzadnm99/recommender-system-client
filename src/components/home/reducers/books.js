import { BOOKS_GET, BOOKS_GET_FAILURE, BOOKS_GET_REQUEST, BOOKS_GET_SUCCESSFULL } from '../consts';

const booksDefaultState = {
    errorMsg: null,
    hasError: false,
    isSuccess: false,
    isLoading: false,
    data: null
}

export default (state = booksDefaultState, action) => {
    switch (action.type) {
        case BOOKS_GET_REQUEST: {
            return {
                ...state,
                errorMsg: null,
                hasError: false,
                isSuccess: false,
                isLoading: true
            }
        }
        case BOOKS_GET_SUCCESSFULL: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                data: action.payload,
            }
        }
        case BOOKS_GET_FAILURE: {
            return {
                errorMsg: action.payload,
                hasError: true,
                isSuccess: false,
                isLoading: false,
            }
        }
        case BOOKS_GET: {
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