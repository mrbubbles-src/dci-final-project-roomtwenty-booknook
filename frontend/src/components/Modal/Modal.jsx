import React from "react";
import "./modal.scss";

const Modal = ({ children, onClose }) => {
    return (
        <div className='modal-overlay'>
            {" "}
            <div className='modal'>
                {" "}
                <div className='modal-btn-container'>
                    <button className='btn-close' onClick={onClose}>
                        X
                    </button>
                </div>
                <div className='modal-input-container'> {children}</div>
            </div>
        </div>
    );
};

export default Modal;
