import { call, put, all, takeEvery } from "redux-saga/effects";
import fetcher from '../../utils/fetch';
import {ADD_BOOK_REQUEST, ADD_BOOK_FAILURE, ADD_MOVIE_SUCCESS, ADD_MOVIE_FAILURE, ADD_BOOK_SUCCESS, ADD_MOVIE_REQUEST} from './consts';
import { BOOKS_ADD, MOVIES_ADD } from '../../routes';
import { 
    addBook, 
    addBookFailure, 
    addBookRequest, 
    addMovie,
    addMovieFailure,
    addMovieRequest,
    addBookSuccess,
    addMovieSuccess
 } from './actions';

function* _addBook(action) {
    try {
        const response = yield call(fetcher, {
            url: BOOKS_ADD,
            method: 'post',
            data: action.payload,
            formData: true
        });
        yield put(addBookSuccess(response))
    } catch(err) {
        yield put(addBookFailure(err));
    }
}

function* _addMovie(action) {
    try {
        const response = yield call(fetcher, {
            url: MOVIES_ADD,
            method: 'post',
            data: {movie: action.payload}
        });
        yield put(addMovieSuccess(response))
    } catch(err) {
        yield put(addMovieFailure(err));
    }
}

export default function* watchAllAddActions() {
    yield all([
        takeEvery(ADD_BOOK_REQUEST, _addBook),
        takeEvery(ADD_MOVIE_REQUEST, _addMovie)   
    ])
}