import { call, put, all, takeEvery } from "redux-saga/effects";
import fetcher from '../../utils/fetch';
import {USER_LOGIN_REQUEST,USER_LOGIN_FAILURE,USER_LOGIN_SUCCESS, USER_SIGNUP_REQUEST, USER_SIGNUP_FAILURE, USER_SIGNUP_SUCCESS, USER_SIGNUP} from './consts';
import { USER_LOGIN, USER_SINGUP } from '../../routes';
import { loginFailure, loginSuccess, signupSuccess } from './actions/index';

function* login(action) {
    try {
        const response = yield call(fetcher, {
            url: USER_LOGIN,
            method: 'post',
            data: {user: action.payload}
        })
        yield put(loginSuccess(response))
    } catch(err) {
        yield put(loginFailure(err))
    }
}

function* signup(action) {
    try {
        const response = yield call(fetcher, {
            url: USER_SIGNUP,
            method: 'post',
            data: {user: action.payload}
        });
        yield put(signupSuccess(response));
    } catch(err) {

    }
}

export default function* watchAllHeaderActions() {
    yield all([
        takeEvery(USER_LOGIN_REQUEST, login),
        takeEvery(USER_SIGNUP_REQUEST, signup)   
    ])
}