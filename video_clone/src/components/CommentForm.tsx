import React, { useState } from 'react';
import  style from './component.module.css';

export interface CommentName {
  name: string;
  comment: string;
}

interface Props { handleAddReplyMain: ( newComment: CommentName) => void; }
const initial ={ name:"", comment: '' }

const CommentForm: React.FC<Props> = ({ handleAddReplyMain}) => {
  const [formData, setFormData] = useState<CommentName>(initial);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAddReplyMain(formData);
    setFormData(initial);
  };

  return (
    <form onSubmit={handleSubmit} className={style.inptForm}>
      <input
        type='text'
        placeholder='enter name'
        value={formData?.name || ''}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        type='text'
        placeholder='enter message'
        value={formData?.comment || ''}
        onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
        required
      />
      <input type='submit' value="Submit"/>
    </form>
  );
};

export default CommentForm;
