import {all, call, put, takeLatest} from "redux-saga/effects";

import * as Constants from '../constants';
import {api, storage} from "../../services";
import EntityActions from "../../base/EntityContainer/actions";
import {Load} from "../actions/entity";
import {normalize} from "normalizr";
import EntitySchema from "../../base/EntityContainer/schema";

//only for my express backend
const ExtractErrors = errors => {
    let extracted;
    if (errors.response.data) {
        extracted = errors.response.data;
    } else {
        extracted = errors
    }

    return extracted
};

function* SigninForm(action) {
    try {
        const {data} = yield call(api.request.post, `/auth/signin`, action.payload);
        yield put({
            type: Constants.SIGNIN_SUCCESS,
            payload: {token: data.token, data: data.user}
        });
        storage.set('token', data.token);
        yield call(action.cb);
    } catch (error) {
        yield put({
            type: Constants.SIGNIN_FAILURE,
            payload: ExtractErrors(error)
        });
        yield call(action.errorCb);
    }
}

function* SignupForm(action) {
    try {
        const {data} = yield call(api.request.post, `/auth/signup`, action.payload);

        yield put({
            type: Constants.SIGNUP_SUCCESS,
            payload: data
        });

        yield call(action.cb);
    } catch (error) {
        yield put({
            type: Constants.SIGNUP_FAILURE,
            payload: ExtractErrors(error)
        });
        yield call(action.errorCb);
    }
}

function* Authenticate(action) {
    try {
        const {data} = yield call(api.request.get, '/auth/authenticate');
        yield put({
            type: Constants.AUTHENTICATE_SUCCESS,
            payload: {
                ...data,
                token: storage.get('token')
            }
        });

        yield call(action.cb);
    } catch (error) {
        yield put({
            type: Constants.AUTHENTICATE_FAILURE,
            payload: ExtractErrors(error)
        });
        yield call(action.errorCb);
    }
}

function* Logout(action) {
    try {
        yield put({
            type: Constants.LOGOUT_SUCCESS,
        });
        storage.remove('token');
        yield call(action.cb);
    } catch (error) {
        yield put({
            type: Constants.LOGOUT_FAILURE,
            payload: 'failure'
        });
        yield call(action.errorCb);
    }
}

function* UserUpdate(action) {
    try {
        const {data} = yield call(api.request.put, `/users/${action.payload.id}`, action.payload);

        yield put({
            type: Constants.USER_UPDATE_SUCCESS,
            payload: {
                data: data.data,
                token: storage.get('token')
            }
        });

        yield call(action.cb);
    } catch (error) {
        yield put({
            type: Constants.USER_UPDATE_FAILURE,
            payload: error
        });
        yield call(action.errorCb);
    }
}

function* UserSetStatus(action) {
    try {
        const {data} = yield call(api.request.put, `/users/${action.payload.id}`, action.payload);

        const normalized = normalize(data, [EntitySchema('users')]);

        yield put(Load.success(normalized.entities));

        yield put({
            type: Constants.USER_SET_STATUS_SUCCESS,
            payload: {
                data: data.data,
            }
        });

        yield call(action.cb);
    } catch (error) {
        yield put({
            type: Constants.USER_SET_STATUS_FAILURE,
            payload: error
        });
        yield call(action.errorCb);
    }
}

function* MovieSetStatus(action) {
    try {
        const {data} = yield call(api.request.put, `/movies/${action.payload.id}`, action.payload);

        const normalized = normalize(data, [EntitySchema('movies')]);

        yield put(Load.success(normalized.entities));

        yield put({
            type: Constants.MOVIE_SET_STATUS_SUCCESS,
            payload: {
                data: data.data,
            }
        });

        yield call(action.cb);
    } catch (error) {
        yield put({
            type: Constants.MOVIE_SET_STATUS_FAILURE,
            payload: error
        });
        yield call(action.errorCb);
    }
}

function* ChangePassword(action) {
    try {
        const {data} = yield call(api.request.put, '/auth/change-password', action.payload);

        yield put({
            type: Constants.PASSWORD_CHANGED_SUCCESS,
            payload: data
        });

        yield call(action.cb);
    } catch (error) {
        yield put({
            type: Constants.PASSWORD_CHANGED_FAILURE,
            payload: error
        });
        yield call(action.errorCb);
    }
}

function* ResetPassword(action) {
    try {
        const {data} = yield call(api.request.post, '/auth/reset-password', action.payload);

        yield put({
            type: Constants.RESET_PASSWORD_SUCCESS,
            payload: data
        });

        yield call(action.cb);
    } catch (error) {
        yield put({
            type: Constants.RESET_PASSWORD_FAILURE,
            payload: error
        });
        yield call(action.errorCb);
    }
}

function* UserDelete(action) {
    try {
        const {data} = yield call(api.request.delete, `/users/${action.payload}`);

        yield put({
            type: Constants.USER_DELETE_SUCCESS,
            payload: data
        });

        yield put(EntityActions.DeleteOne.success({
            id: action.payload,
            entity: 'users',
            name: 'All'
        }));

        yield call(action.cb);
    } catch (error) {
        yield put({
            type: Constants.USER_DELETE_FAILURE,
            payload: error
        });
        yield call(action.errorCb);
    }
}

function* MovieDelete(action) {
    try {
        const {data} = yield call(api.request.delete, `/movies/${action.payload}`);

        yield put({
            type: Constants.MOVIE_DELETE_SUCCESS,
            payload: data
        });

        yield put(EntityActions.DeleteOne.success({
            id: action.payload,
            entity: 'movies',
            name: 'All'
        }));

        yield call(action.cb);
    } catch (error) {
        yield put({
            type: Constants.MOVIE_DELETE_FAILURE,
            payload: error
        });
        yield call(action.errorCb);
    }
}

function* CommentDelete(action) {
    try {
        const {data} = yield call(api.request.delete, `/comments/${action.payload}`);

        yield put({
            type: Constants.COMMENT_DELETE_SUCCESS,
            payload: data
        });

        yield put(EntityActions.DeleteOne.success({
            id: action.payload,
            entity: 'comments',
            name: 'All'
        }));

        yield call(action.cb);
    } catch (error) {
        yield put({
            type: Constants.COMMENT_DELETE_FAILURE,
            payload: error
        });
        yield call(action.errorCb);
    }
}


export default function* root() {
    yield all([
        takeLatest(Constants.SIGNIN_REQUEST, SigninForm),
        takeLatest(Constants.SIGNUP_REQUEST, SignupForm),
        takeLatest(Constants.AUTHENTICATE_REQUEST, Authenticate),
        takeLatest(Constants.LOGOUT_REQUEST, Logout),
        takeLatest(Constants.USER_UPDATE_REQUEST, UserUpdate),
        takeLatest(Constants.PASSWORD_CHANGED_REQUEST, ChangePassword),
        takeLatest(Constants.RESET_PASSWORD_REQUEST, ResetPassword),
        takeLatest(Constants.USER_DELETE_REQUEST, UserDelete),
        takeLatest(Constants.USER_SET_STATUS_REQUEST, UserSetStatus),
        takeLatest(Constants.COMMENT_DELETE_REQUEST, CommentDelete),
        takeLatest(Constants.MOVIE_SET_STATUS_REQUEST, MovieSetStatus),
        takeLatest(Constants.MOVIE_DELETE_REQUEST, MovieDelete),
    ]);
}
