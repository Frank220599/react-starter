import React from 'react';

import ProfileDetailsForm from "../../../containers/ProfileDetailsForm";
import ChangePasswordForm from "../../../containers/ChangePasswordForm";

const Settings = (props) => {
    return (
        <div className="tab-pane fade show active">
            <div className="row">
                <div className="col-12 col-lg-6">
                    <ProfileDetailsForm/>
                </div>
                <div className="col-12 col-lg-6">
                    <ChangePasswordForm/>
                </div>
            </div>
        </div>

    );
};

export default Settings;
