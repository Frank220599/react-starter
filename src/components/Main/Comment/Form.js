import React from 'react';
import {connect} from "react-redux";

const Form = ({user}) => {
    return (
        <form action="#" className="form">
<textarea id="text" name="text" className="form__textarea"
          placeholder="Add comment"/>
            {user.isAuthenticated
                ? <button type="submit" className="form__btn">Send</button>
                : <button type="button" className="form__btn" disabled>sign in to leave comment</button>
            }
        </form>
    );
};

const mapStateToProps = state => ({
    user: state.system.user
});

export default connect(mapStateToProps)(Form);
