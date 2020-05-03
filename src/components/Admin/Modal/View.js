import React from 'react';
import Modal from "./Modal";

const View = ({isOpen}) => {
    return (
        <Modal isOpen={isOpen}>
            <div id="modal-view" className="zoom-anim-dialog mfp-hide modal modal--view">
                <div className="comments__autor">
                    <img className="comments__avatar" src={require('../../../assets/images/user.svg')} alt=""/>
                    <span className="comments__name">John Doe</span>
                    <span className="comments__time">30.08.2018, 17:53</span>
                </div>
                <p className="comments__text">There are many variations of passages of Lorem Ipsum available, but the
                    majority have suffered alteration in some form, by injected humour, or randomised words which don't
                    look
                    even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure
                    there
                    isn't anything embarrassing hidden in the middle of text.</p>
                <div className="comments__actions">
                    <div className="comments__rate">
                        <span><i className="icon ion-md-thumbs-up"/>12</span>
                        <span>7<i className="icon ion-md-thumbs-down"/></span>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default View;