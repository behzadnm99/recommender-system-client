import {call, put, all, takeEvery} from 'redux-saga/effects';
import fetcher from '../../utils/fetch';
import {BOOKS_GET_REQUEST, MOVIES_GET_REQUEST} from './consts';
import {
    booksFailure,
    booksSuccessfull,
    moviesFailure,
    moviesSuccessfull
} from './actions';
import {
    BOOKS_GET_ALL,
    MOVIES_GET_ALL
} from '../../routes';


function* getBooks(action) {
    try {
        const response = yield call(fetcher, {
            url: BOOKS_GET_ALL + `?page=${1}&limit=${8}`,
            method: 'get'
        })
        yield put(booksSuccessfull(response));
    } catch(err) {
        yield put(booksFailure(err));
    }
}

function* getMovies(action) {
    try {
        const response = yield call(fetcher, {
            url: MOVIES_GET_ALL + `?page=${1}&limit=${8}`,
            method: 'get'
        })
        yield put(moviesSuccessfull(response))
    } catch(err) {
        yield put(moviesFailure(err));
    }
}

export default function* watchAllHomeActions() {
    yield all([
        takeEvery(BOOKS_GET_REQUEST, getBooks),
        takeEvery(MOVIES_GET_REQUEST, getMovies)
    ])
}