import {fork, all} from "redux-saga/effects"

import todo from './todos'

export default function* rootSaga() {
    yield all([
        fork((todo))
    ])
}