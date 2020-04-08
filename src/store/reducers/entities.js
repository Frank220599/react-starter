import merge from "lodash/merge";
import * as Constants from "../constants/entities";

const initialState = {
    todos: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case Constants.LOAD_ENTITIES:
            return merge({}, state, action.payload);

        case Constants.UPDATE_ENTITIES:
            return {
                ...state,
                [action.entity]: {
                    ...state[action.entity],
                    [action.entityId]: {
                        ...state[action.entity][action.entityId],
                        ...action.payload
                    }
                }
            };

        default:
            return state;
    }
};
