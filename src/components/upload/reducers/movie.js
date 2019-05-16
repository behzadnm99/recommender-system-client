import { ADD_MOVIE, ADD_MOVIE_FAILURE, ADD_MOVIE_REQUEST, ADD_MOVIE_SUCCESS } from '../consts';

const addMovieDefaultState = {
    errorMsg: null,
    hasError: false,
    isSuccess: false,
    isLoading: false,
    data: null
}

export default (state = addMovieDefaultState, action) => {
    switch (action.type) {
        case ADD_MOVIE_REQUEST: {
            return {
                ...state,
                errorMsg: null,
                hasError: false,
                isSuccess: false,
                isLoading: true
            }
        }
        case ADD_MOVIE_SUCCESS: {
            return {
                ...addMovieDefaultState,
                isSuccess: true,
                data: action.payload,
            }
        }
        case ADD_MOVIE_FAILURE: {
            return {
                errorMsg: action.payload,
                hasError: true,
                isSuccess: false,
                isLoading: false,
            }
        }
        case ADD_MOVIE: {
            return {
                ...addMovieDefaultState
            }
        }
        default:
            return {
                ...addMovieDefaultState
            }
    }
}