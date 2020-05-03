import {fork, all} from "redux-saga/effects"
import EntitySaga from "../../base/EntityContainer/saga";

export default function* rootSaga() {
    yield all([
        fork(EntitySaga)
    ])
}

