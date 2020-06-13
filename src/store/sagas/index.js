import {fork, all} from "redux-saga/effects"
import EntitySaga from "../../base/EntityContainer/saga";
import System from "./system";

export default function* rootSaga() {
    yield all([
        fork(EntitySaga),
        fork(System)
    ])
}

