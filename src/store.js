import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { loginReducers, signupReducers } from './components/header/reducers';
import { addBookReducers, addMovieRducers } from './components/upload/reducers';
import { booksReducers, moviesReducers } from './components/home/reducers'

import watchAllHeaderActions from './components/header/sagas';
import watchAllAddActions from './components/upload/sagas';
import watchAllHomeActions from './components/home/sagas';

const sagaMiddleware = createSagaMiddleware();

let middleware = [sagaMiddleware, logger];

export default createStore(
    combineReducers({
        forms: combineReducers({
            login: loginReducers,
            signup: signupReducers,
            addBook: addBookReducers,
            addMovie: addMovieRducers
        }),
        books: combineReducers({
            homeBooks:booksReducers,
            homeMovies: moviesReducers
        })
    }),
    applyMiddleware(...middleware)
)

function* watchAll() {
    yield all([
        fork(watchAllHeaderActions),
        fork(watchAllAddActions),
        fork(watchAllHomeActions)
    ])
}   
sagaMiddleware.run(watchAll);