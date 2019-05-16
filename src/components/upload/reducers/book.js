import { ADD_BOOK, ADD_BOOK_FAILURE, ADD_BOOK_REQUEST, ADD_BOOK_SUCCESS } from '../consts';

const addBookDefaultState = {
    errorMsg: null,
    hasError: false,
    isSuccess: false,
    isLoading: false,
    data: null
}

export default (state = addBookDefaultState, action) => {
    switch (action.type) {
        case ADD_BOOK_REQUEST: {
            return {
                ...state,
                errorMsg: null,
                hasError: false,
                isSuccess: false,
                isLoading: true
            }
        }
        case ADD_BOOK_SUCCESS: {
            return {
                ...addBookDefaultState,
                isSuccess: true,
                data: action.payload,
            }
        }
        case ADD_BOOK_FAILURE: {
            return {
                errorMsg: action.payload,
                hasError: true,
                isSuccess: false,
                isLoading: false,
            }
        }
        case ADD_BOOK: {
            return {
                ...addBookDefaultState
            }
        }
        default:
            return {
                ...addBookDefaultState
            }
    }
}