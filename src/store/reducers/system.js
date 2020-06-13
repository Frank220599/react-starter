import * as Constants from "../constants"

const initialState = {
    user: {
        token: null,
        isFetched: false,
        isAuthenticated: false,
        data: []
    }

};

export default (state = initialState, action) => {
    switch (action.type) {
        case Constants.SIGNIN_REQUEST:
        case Constants.AUTHENTICATE_REQUEST:
        case Constants.LOGOUT_REQUEST:
        case Constants.LOGOUT_SUCCESS:
            return {
                ...state,
                user: {
                    token: null,
                    isFetched: false,
                    isAuthenticated: false,
                    data: []
                }
            };
        case Constants.SIGNIN_SUCCESS:
        case Constants.AUTHENTICATE_SUCCESS:
        case Constants.USER_UPDATE_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                user: {
                    ...state.user,
                    token: action.payload.token,
                    isFetched: true,
                    isAuthenticated: true,
                    data: action.payload.data
                }
            };
        case Constants.SIGNIN_FAILURE:
        case Constants.AUTHENTICATE_FAILURE:
        case Constants.LOGOUT_FAILURE:
            return {
                ...state,
                user: {
                    ...state.user,
                    token: null,
                    isFetched: true,
                    isAuthenticated: false,
                    error: action.payload
                }
            };
        default:
            return state
    }
}
