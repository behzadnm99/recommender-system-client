import { call, put, all, takeEvery } from "redux-saga/effects";
import fetcher from '../../utils/fetch';
import {USER_LOGIN_REQUEST,USER_LOGIN_FAILURE,USER_LOGIN_SUCCESS, USER_SIGNUP_REQUEST, USER_SIGNUP_FAILURE, USER_SIGNUP_SUCCESS} from './consts';

function* login(action) {
    try {

    } catch(e) {
        
    }
}

function* signup(action) {
    try {

    } catch(e) {
        
    }
}

export default function* watchAllHeaderActions() {
    yield all([
        takeEvery(USER_LOGIN_REQUEST, login),
        takeEvery(USER_SIGNUP_REQUEST, signup)   
    ])
}