import {takeLatest, call, put, all} from "redux-saga/effects"
import {api} from "../../services";
import * as Constants from "../constants/todos"
import {normalize} from "normalizr";
import todoSchema from "../schemas/todos";
import {LOAD_ENTITIES} from "../constants/entities";

function* TodoListRequest(action) {
    try {
        const {data} = yield call(api.request.get, '/todos', action.payload);
        const normalized = normalize(data.todos.data, [todoSchema]);
        console.log({normalized});
        yield put({
            type: LOAD_ENTITIES,
            payload: normalized.entities
        });

        yield put({
            type: Constants.TODO_ALL_SUCCESS,
            payload: normalized.result,
            meta: data.todos._metadata,
        })
    } catch (error) {
        yield put({
            type: Constants.TODO_ALL_FAILURE,
            payload: error
        })
    }
}

export default function* root() {
    yield all([
        takeLatest(Constants.TODO_ALL_REQUEST, TodoListRequest)
    ])
}