import * as Constants from "../constants/todos"

const TodosListRequest = (payload) => ({
    type: Constants.TODO_ALL_REQUEST,
    payload
});

export default {
    TodosListRequest
}