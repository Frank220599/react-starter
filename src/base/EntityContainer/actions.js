import {createRoutine} from "redux-saga-routines";

const FetchAll = createRoutine('FetchAll');
const FetchOne = createRoutine('FetchOne');
const AppendItem = createRoutine('AppendItem');
const DeleteOne = createRoutine('DeleteOne');

const EntityActions = {
    FetchAll,
    AppendItem,
    FetchOne,
    DeleteOne,
};

export default EntityActions


