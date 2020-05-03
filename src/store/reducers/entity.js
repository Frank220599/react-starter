import {Load} from "../actions/entity";
import merge from "lodash/merge"

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case Load.SUCCESS:
            return merge({}, state, action.payload);
        default:
            return state
    }
}
