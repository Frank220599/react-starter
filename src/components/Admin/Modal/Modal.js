import React from 'react';
import cx from "classnames"

const Modal = ({isOpen, children, closeModal}) => {
    return (
        <div className={cx(["custom-modal-wrapper", {active: isOpen}])}>
            <div className="backdrop" onClick={closeModal}/>
            <div className={'custom-modal'}>
                {children}
            </div>
        </div>
    );
};


export default Modal;
