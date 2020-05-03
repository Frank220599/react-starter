import React from 'react';
import Modal from "./Modal";

const Delete = ({isOpen}) => {
    return (
        <Modal isOpen={isOpen}>
            <div id="modal-delete" className="zoom-anim-dialog mfp-hide modal">
                <h6 className="modal__title">Item delete</h6>

                <p className="modal__text">Are you sure to permanently delete this item?</p>

                <div className="modal__btns">
                    <button className="modal__btn modal__btn--apply" type="button">Delete</button>
                    <button className="modal__btn modal__btn--dismiss" type="button">Dismiss</button>
                </div>
            </div>
        </Modal>
    );
};

export default Delete;