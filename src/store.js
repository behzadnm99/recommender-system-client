import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

let middleware = [sagaMiddleware, logger];

export default createStore(
    combineReducers({

    }),
    applyMiddleware(...middleware)
)

function* watchAll() {
    yield all([

    ])
}
sagaMiddleware.run(watchAll);