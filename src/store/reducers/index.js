import {combineReducers} from "redux";
import entity from "../../base/EntityContainer/reducer"
import entities from "./entity"
import system from "./system"

const rootReducer = combineReducers({
    entity,
    entities,
    system
});

export default rootReducer
