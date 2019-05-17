import {call, put, all, takeEvery} from 'redux-saga/effects';
import fetcher from '../../utils/fetch';
import {BOOKS_GET_REQUEST, MOVIES_GET_REQUEST} from './consts';
import {
    booksFailure,
    booksSuccessfull,
    moviesFailure,
    moviesSuccessfull
} from './actions';

function* getBooks(action) {
    try {

    } catch(err) {

    }
}

function* getMovies(action) {
    try {

    } catch(err) {
        
    }
}

export default function* watchAllHomeActions() {
    yield all([
        takeEvery(BOOKS_GET_REQUEST, getBooks),
        takeEvery(MOVIES_GET_REQUEST, getMovies)
    ])
}