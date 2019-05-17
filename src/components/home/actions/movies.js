import { MOVIES_GET, MOVIES_GET_FAILURE, MOVIES_GET_REQUEST, MOVIES_GET_SUCCESSFULL } from '../consts';

export const moviesRequest = data => ({
    type: MOVIES_GET_REQUEST,
    payload: data
});

export const moviesSuccessfull = data => ({
    type: MOVIES_GET_SUCCESSFULL,
    payload: data
});

export const moviesFailure = data => ({
    type: MOVIES_GET_FAILURE,
    payload: data
});

export const movies = data => ({
    type: MOVIES_GET,
    payload: data
})