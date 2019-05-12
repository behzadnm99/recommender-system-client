import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { loginReducers, signupReducers } from './components/header/reducers';
import watchAllHeaderActions from './components/header/sagas';
import watchAllAddActions from './components/upload/sagas';

const sagaMiddleware = createSagaMiddleware();

let middleware = [sagaMiddleware, logger];

export default createStore(
    combineReducers({
        forms: combineReducers({
            login: loginReducers,
            signup: signupReducers
        })
    }),
    applyMiddleware(...middleware)
)

function* watchAll() {
    yield all([
        fork(watchAllHeaderActions),
        fork(watchAllAddActions)
    ])
}
sagaMiddleware.run(watchAll);