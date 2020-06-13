import React from 'react';
import SignupForm from "../../containers/SignupForm";

const Signup = () => {
    return (
        <div className="sign section--bg section-bg">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sign__content">
                          <SignupForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
