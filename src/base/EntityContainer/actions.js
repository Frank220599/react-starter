import {createRoutine} from "redux-saga-routines";

const FetchAll = createRoutine('FetchAll');
const FetchOne = createRoutine('FetchOne');

const EntityActions = {
    FetchAll,
    FetchOne
};

export default EntityActions


