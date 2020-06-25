import * as Constants from '../constants';

const createAction = (actionType) => (values, cb = () => {
}, errorCb = () => {
}) =>
    ({type: actionType, payload: values, cb, errorCb});

export const Signin = createAction(Constants.SIGNIN_REQUEST);
export const Signup = createAction(Constants.SIGNUP_REQUEST);
export const Authenticate = createAction(Constants.AUTHENTICATE_REQUEST);
export const Logout = createAction(Constants.LOGOUT_REQUEST);
export const UserUpdate = createAction(Constants.USER_UPDATE_REQUEST);
export const UserSetStatus = createAction(Constants.USER_SET_STATUS_REQUEST);
export const ChangePassword = createAction(Constants.PASSWORD_CHANGED_REQUEST);
export const ResetPassword = createAction(Constants.RESET_PASSWORD_REQUEST);
export const UserDelete = createAction(Constants.USER_DELETE_REQUEST);
export const CommentDelete = createAction(Constants.COMMENT_DELETE_REQUEST);
export const MovieSetStatus = createAction(Constants.MOVIE_SET_STATUS_REQUEST);
export const MovieDelete = createAction(Constants.MOVIE_DELETE_REQUEST);
export const MovieCreate = createAction(Constants.MOVIE_CREATE_REQUEST);
export const CommentCreate = createAction(Constants.COMMENT_CREATE_REQUEST);
export const ReviewCreate = createAction(Constants.REVIEW_CREATE_REQUEST);



