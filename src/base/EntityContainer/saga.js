import {put, call, takeEvery, all} from "redux-saga/effects";
import {normalize} from "normalizr";
import {api} from "../../services"
import EntityActions from "./actions";
import EntitySchema from "./schema"
import {Load} from "../../store/actions/entity";

function* FetchAll(action) {
    const {entity, name, url, params, appendIds} = action.payload;
    try {
        const {data} = yield call(api.request.get, api.queryBuilder(url, params));
        const normalized = normalize(data[entity].data, [EntitySchema(entity)]);
        yield put(Load.success(normalized.entities));
        yield put(EntityActions.FetchAll.success({
            entity,
            name,
            ids: normalized.result,
            appendIds,
            params,
            meta: data[entity]._metadata
        }))
    } catch (error) {
        yield put(EntityActions.FetchAll.failure({
            entity,
            error
        }));
    }
}

function* FetchOne(action) {
    const {entity, name, url, params} = action.payload;
    try {
        const {data} = yield call(api.request.get, api.queryBuilder(url, params));
        const normalized = normalize(data[name], EntitySchema(entity));
        yield put(Load.success(normalized.entities));
        yield put(EntityActions.FetchOne.success({
            id: normalized.result,
            entity,
            name,
        }))
    } catch (error) {
        yield put(EntityActions.FetchOne.failure({
            entity,
            error
        }));
    }
}

export default function* EntitySaga() {
    yield all([
        takeEvery(EntityActions.FetchAll.REQUEST, FetchAll),
        takeEvery(EntityActions.FetchOne.REQUEST, FetchOne)
    ])
}
