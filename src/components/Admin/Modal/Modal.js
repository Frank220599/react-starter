import React from 'react';
import cx from "classnames"

const Modal = ({isOpen, children}) => {
    return (
        <div className={cx(["custom-modal-wrapper", {active: isOpen}])}>
            <div className="backdrop"/>
            <div className={'custom-modal'}>
                {children}
            </div>
        </div>
    );
};


export default Modal;