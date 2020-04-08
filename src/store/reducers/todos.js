import * as Constants from "../constants/todos"

const initialState = {
    all: {
        isFetched: false,
        ids: [],
        meta: {}
    },
    single: {
        isFetched: false,
        data: []
    }
};

const todos = (state = initialState, action) => {
    switch (action.type) {
        case Constants.TODO_ALL_REQUEST:
            return {
                ...state,
                all: {
                    ...state.all,
                    isFetched: false,
                },

            };
        case Constants.TODO_ALL_SUCCESS:
            return {
                ...state,
                all: {
                    ...state.all,
                    isFetched: true,
                    ids: [
                        ...action.payload
                    ]
                },

            };
        case Constants.TODO_ALL_FAILURE:
            return {
                ...state,
                all: {
                    ...state.all,
                    data: action.payload,
                    isFetched: true,
                }
            };
        default:
            return state;
    }
};

export default todos