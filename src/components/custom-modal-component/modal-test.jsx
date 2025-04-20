import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function ModalTest() {
  //talke a state and pass it to parent compoenent.
  const [showModalPopup, setShowModalPopup] = useState(false);
  function handleToggleModal() {
    setShowModalPopup(!showModalPopup);
  }
  function closeModal() {
    setShowModalPopup(false);
  }

  return (
    <div>
      <button onClick={handleToggleModal}>Open Modal</button>
      {showModalPopup && (
        <Modal 
        id={'custom-id'}
        body={<div>Customized body</div>} onClose={closeModal} header={<h1>Costomized header</h1>} footer={<h3>Customized footer</h3>}/>
      )}
    </div>
  );
}
