// Modal.js
import React, { useState } from 'react';
import { initialForm } from '../common/rowMaterial';
import  style from './component.module.css';


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  handleAddReplyMain: (formData: initialForm) => void;
}
const Modal: React.FC<ModalProps>  = ({ isOpen, onClose, handleAddReplyMain }) => {
  const [formData, setFormData] = useState<initialForm>({ name: '', comment: '' });

  const handleSubmit = (e:any) => {
    e.preventDefault();
    handleAddReplyMain(formData);
    onClose();
  }; 

  return (
     <div className={`${style.modal} ${isOpen ? style.open : ''}`}>
      
      <div className={style.modalContent}>
         <h3>ADD Comment</h3>
        <button className={style.close} onClick={()=>onClose()}>close</button>

        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
          <label>Comment:</label>
          <textarea value={formData.comment} onChange={(e) => setFormData({...formData, comment: e.target.value})} required/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};


export default Modal;
