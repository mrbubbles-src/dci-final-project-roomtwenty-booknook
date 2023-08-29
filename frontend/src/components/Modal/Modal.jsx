import React from "react";
import "./modal.scss";

const Modal = ({ children, onClose }) => {
    return (
        <div className='modal-overlay'>
            <div className='modal'>
                <button className='btn-style btn-close' onClick={onClose}>
                    X
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
