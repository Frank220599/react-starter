import EntityActions from "./actions";
import get from "lodash/get"
import uniq from "lodash/uniq"
import isEqual from "lodash/isEqual"

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case EntityActions.FetchAll.REQUEST: {
            const {name, entity,} = action.payload;
            return {
                ...state,
                [entity]: {
                    ...get(state, entity, {}),
                    [name]: {
                        ...get(state, `${entity}.${name}`, {}),
                        isFetched: false,
                    }
                }
            }
        }
        case EntityActions.FetchAll.SUCCESS: {
            const {entity, name, ids, meta, appendIds, prependIds, params: {filter, extra}} = action.payload;
            const isNewFilter = !isEqual({filter, extra}, get(state, `${entity}.${name}.params`, {}));
            const oldIds = appendIds || prependIds ? get(state, `${entity}.${name}.ids`, []) : [];
            const stateCurrentPage = get(state, `${entity}.${name}.meta.currentPage`, 1);
            const newIds = isNewFilter ? [...ids] : (appendIds && (meta.currentPage !== 1) ? [...oldIds, ...ids] : prependIds ? [...ids, ...oldIds] : [...ids]);
            return {
                ...state,
                [entity]: {
                    ...get(state, entity, {}),
                    [name]: {
                        ...get(state, `${entity}.${name}`, {}),
                        ids: uniq(newIds),
                        meta,
                        params: {filter, extra},
                        isFetched: true,
                    }
                }
            }
        }
        case EntityActions.FetchAll.FAILURE: {
            const {name, entity, error} = action.payload;
            return {
                ...state,
                [entity]: {
                    ...get(state, entity, {}),
                    [name]: {
                        ...get(state, `${entity}.${name}`, {}),
                        error,
                        isFetched: true,
                    }
                }
            }
        }
        case EntityActions.FetchOne.REQUEST: {
            const {entity, name} = action.payload;

            return {
                ...state,
                [entity]: {
                    ...get(state, entity, []),
                    [`${name}One`]: {
                        ...get(state, `${entity}.${name}One`, []),
                        isFetched: false
                    }
                }
            };
        }

        case EntityActions.FetchOne.SUCCESS: {
            const {entity, name, id} = action.payload;
            return {
                ...state,
                [entity]: {
                    ...get(state, entity, []),
                    [`${name}One`]: {
                        ...get(state, `${entity}.${name}One`, []),
                        id,
                        isFetched: true
                    }
                }
            };
        }

        case EntityActions.FetchOne.FAILURE: {
            const {entity, name, error} = action.payload;
            return {
                ...state,
                [entity]: {
                    ...get(state, entity, []),
                    [`${name}One`]: {
                        ...get(state, `${entity}.${name}One`, []),
                        error,
                        isFetched: true
                    }
                }
            };
        }
        case EntityActions.DeleteOne.SUCCESS: {
            const {entity, name, id} = action.payload;
            return {
                ...state,
                [entity]: {
                    ...get(state, entity, {}),
                    [name]: {
                        ...get(state, `${entity}.${name}`, {}),
                        ids: state[entity][name].ids.filter(itemId => itemId !== id),
                    }
                }
            }
        }
        case EntityActions.AppendItem.SUCCESS: {
            const {entity, name, id} = action.payload;
            return {
                ...state,
                [entity]: {
                    ...get(state, entity, {}),
                    [name]: {
                        ...get(state, `${entity}.${name}`, {}),
                        ids: [
                            ...state[entity][name].ids,
                            id
                        ],
                    }
                }
            }
        }

        default:
            return state
    }
}
