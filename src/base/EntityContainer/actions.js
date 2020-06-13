import {createRoutine} from "redux-saga-routines";

const FetchAll = createRoutine('FetchAll');
const FetchOne = createRoutine('FetchOne');
const DeleteOne = createRoutine('DeleteOne');

const EntityActions = {
    FetchAll,
    FetchOne,
    DeleteOne,
};

export default EntityActions


