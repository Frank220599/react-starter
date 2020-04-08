import {combineReducers} from "redux";
import todos from "./todos";
import entities from "./entities";

const rootReducer = combineReducers({
    todos,
    entities
});

export default rootReducer