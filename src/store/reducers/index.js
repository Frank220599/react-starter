import {combineReducers} from "redux";
import entity from "../../base/EntityContainer/reducer"
import entities from "./entity"

const rootReducer = combineReducers({
    entity,
    entities
});

export default rootReducer
