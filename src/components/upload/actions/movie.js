import { ADD_MOVIE, ADD_MOVIE_REQUEST, ADD_MOVIE_SUCCESS, ADD_MOVIE_FAILURE } from '../consts';

export const addMovieRequest = data => ({
    payload: data,
    type: ADD_MOVIE_REQUEST
})

export const addMovieSuccess = response => ({
    payload: response,
    type: ADD_MOVIE_SUCCESS
})

export const addMovieFailure = error => ({
    payload: error,
    type: ADD_MOVIE_FAILURE
})

export const addMovie = {
    type: ADD_MOVIE
}
