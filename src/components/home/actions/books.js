import { BOOKS_GET, BOOKS_GET_FAILURE, BOOKS_GET_REQUEST, BOOKS_GET_SUCCESSFULL } from '../consts';

export const booksRequest = data => ({
    type: BOOKS_GET_REQUEST,
    payload: data
});

export const booksSuccessfull = data => ({
    type: BOOKS_GET_SUCCESSFULL,
    payload: data
});

export const booksFailure = data => ({
    type: BOOKS_GET_FAILURE,
    payload: data
});

export const books = data => ({
    type: BOOKS_GET,
    payload: data
})