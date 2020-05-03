import React from 'react';

const Settings = (props) => {
    const duration = 300;

    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,
    };

    const transitionStyles = {
        entering: {opacity: 0},
        entered: {opacity: 1},
        exiting: {opacity: 1},
        exited: {opacity: 0},
    };
    return (
        <div  className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="1-tab">
            <div className="row">
                <div className="col-12 col-lg-6">
                    <form action="#" className="profile__form">
                        <div className="row">
                            <div className="col-12">
                                <h4 className="profile__title">Profile details</h4>
                            </div>

                            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                <div className="profile__group">
                                    <label className="profile__label" htmlFor="username">Username</label>
                                    <input id="username" type="text" name="username"
                                           className="profile__input" placeholder="User 123"/>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                <div className="profile__group">
                                    <label className="profile__label" htmlFor="email">Email</label>
                                    <input id="email" type="text" name="email"
                                           className="profile__input" placeholder="email@email.com"/>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                <div className="profile__group">
                                    <label className="profile__label" htmlFor="firstname">First Name</label>
                                    <input id="firstname" type="text" name="firstname"
                                           className="profile__input" placeholder="John"/>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                <div className="profile__group">
                                    <label className="profile__label" htmlFor="lastname">Last Name</label>
                                    <input id="lastname" type="text" name="lastname"
                                           className="profile__input" placeholder="Doe"/>
                                </div>
                            </div>

                            <div className="col-12">
                                <button className="profile__btn" type="button">Save</button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="col-12 col-lg-6">
                    <form action="#" className="profile__form">
                        <div className="row">
                            <div className="col-12">
                                <h4 className="profile__title">Change password</h4>
                            </div>

                            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                <div className="profile__group">
                                    <label className="profile__label" htmlFor="oldpass">Old Password</label>
                                    <input id="oldpass" type="password" name="oldpass"
                                           className="profile__input"/>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                <div className="profile__group">
                                    <label className="profile__label" htmlFor="newpass">New Password</label>
                                    <input id="newpass" type="password" name="newpass"
                                           className="profile__input"/>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                <div className="profile__group">
                                    <label className="profile__label" htmlFor="confirmpass">Confirm New
                                        Password</label>
                                    <input id="confirmpass" type="password" name="confirmpass"
                                           className="profile__input"/>
                                </div>
                            </div>

                            <div className="col-12">
                                <button className="profile__btn" type="button">Change</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Settings;