import React from "react";
import "./modal.scss";

// Benötigt in jeder Datei die es nutzen will seperate handle funktionen für zeigen und schließen
// und einen state mit standardwert false

const Modal = ({ children, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="btn-style btn-close" onClick={onClose}>
                    X
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
