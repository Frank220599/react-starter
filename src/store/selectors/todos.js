import {createSelector} from "reselect";
import {denormalize} from "normalizr";
import todoSchema from "../schemas/todos";

const getEntities = state => state.entities;

const getAll = createSelector(
    getEntities,
    state => state.todos.all.ids,
    (entities, ids) => {
        const normalized = denormalize({todos: ids}, {todos: [todoSchema]}, entities);
        console.log('denormalized data', normalized);
        return normalized.todos;
    }
);

export default {
    getAll,
};
