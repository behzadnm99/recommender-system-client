import { ADD_BOOK, ADD_BOOK_REQUEST, ADD_BOOK_SUCCESS, ADD_BOOK_FAILURE } from '../consts';

export const addBookRequest = data => ({
    payload: data,
    type: ADD_BOOK_REQUEST
})

export const addBookSuccess = response => ({
    payload: response,
    type: ADD_BOOK_SUCCESS
})

export const addBookFailure = error => ({
    payload: error,
    type: ADD_BOOK_FAILURE
})

export const addBook = {
    type: ADD_BOOK
}
