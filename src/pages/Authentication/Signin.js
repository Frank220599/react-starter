import React from 'react';
import SigninForm from "../../containers/SigninForm";

const Signin = () => {
    return (
        <div className="sign section--bg section-bg">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sign__content">
                            <SigninForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Signin
