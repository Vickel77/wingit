import React from "react";

export default function Modal({ isVisible, onClose, children }) {
  if (!isVisible) return null;
  return (
    <>
      <div className="modal-container">
        <div className="close-modal" onClick={() => onClose()}>
          <p>X</p>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </>
  );
}
