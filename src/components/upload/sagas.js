import { call, put, all, takeEvery } from "redux-saga/effects";
import fetcher from '../../utils/fetch';
import {ADD_BOOK_REQUEST, ADD_BOOK_FAILURE, ADD_MOVIE_SUCCESS, ADD_MOVIE_FAILURE, ADD_BOOK_SUCCESS, ADD_MOVIE_REQUEST} from './consts';

function* addBook(action) {

}

function* addMovie(action) {
    
}

export default function* watchAllAddActions() {
    yield all([
        takeEvery(ADD_BOOK_REQUEST, addBook),
        takeEvery(ADD_MOVIE_REQUEST, addMovie)   
    ])
}