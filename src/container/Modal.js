import React from "react";
import Modal from "react-modal";
import "./Modal.css";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    backgroundColor: "#8DAABA"
  }
};

function OptionModal({ modalIsOpen, psotedData, handleCloseModal }) {
  return (
    <div className="modal">
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <h3> Sorry can not connect to the DataBase :) </h3>
        <h4>Your Post</h4>
        <p>{psotedData.title}</p>
        <p>{psotedData.post}</p>
        <button onClick={handleCloseModal}>Close</button>
      </Modal>
    </div>
  );
}
export default OptionModal;
