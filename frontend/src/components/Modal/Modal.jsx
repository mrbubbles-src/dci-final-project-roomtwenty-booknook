import React from "react";
import "./modal.scss";

// Benötigt in jeder Datei die es nutzen will seperate handle funktionen für zeigen und schließen
// und einen state mit standardwert false

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
