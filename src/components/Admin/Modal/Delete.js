import React from 'react';
import Modal from "./Modal";

const Delete = ({isOpen, itemName, closeModal, deleteItem}) => {
    return (
        <Modal isOpen={isOpen}>
            <div id="modal-delete" className="zoom-anim-dialog mfp-hide modal">
                <h6 className="modal__title">{itemName} delete</h6>

                <p className="modal__text">Are you sure to permanently delete this {itemName}?</p>

                <div className="modal__btns">
                    <button onClick={deleteItem} className="modal__btn modal__btn--apply" type="button">Delete</button>
                    <button onClick={closeModal} className="modal__btn modal__btn--dismiss" type="button">Dismiss</button>
                </div>
            </div>
        </Modal>
    );
};

export default Delete;
