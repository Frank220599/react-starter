import React from 'react';
import Modal from "./Modal";

const Status = ({isOpen, closeModal, setStatus}) => {
    return (
        <Modal isOpen={isOpen}>
            <div id="modal-status" className="zoom-anim-dialog mfp-hide modal">
                <h6 className="modal__title">Status change</h6>

                <p className="modal__text">Are you sure about immediately change status?</p>

                <div className="modal__btns">
                    <button onClick={setStatus} className="modal__btn modal__btn--apply" type="button">Apply</button>
                    <button onClick={closeModal} className="modal__btn modal__btn--dismiss" type="button">Dismiss</button>
                </div>
            </div>
        </Modal>
    );
};

export default Status;
