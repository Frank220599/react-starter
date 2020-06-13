import React from 'react';
import Modal from "./Modal";

const View = ({isOpen, closeModal, text, like, dislike, author, time}) => {
    return (
        <Modal isOpen={isOpen} closeModal={closeModal}>
            <div id="modal-view" className="zoom-anim-dialog mfp-hide modal modal--view">
                <div className="comments__autor">
                    <img className="comments__avatar" src={require('../../../assets/images/user.svg')} alt=""/>
                    <span className="comments__name">{author}</span>
                    <span className="comments__time">{time}</span>
                </div>
                <p className="comments__text">{text}</p>
                <div className="comments__actions">
                    <div className="comments__rate">
                        <span><i className="icon ion-md-thumbs-up"/>{like}</span>
                        <span>{dislike}<i className="icon ion-md-thumbs-down"/></span>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default View;
