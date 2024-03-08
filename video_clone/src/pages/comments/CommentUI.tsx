import React from 'react';
import  style from './comment.module.css';

interface Props {
  name: string;
  comment: string;
  id: number;
  date:string
}

const CommentUI: React.FC<Props> = ({ name, comment, date ,id }) => {
  return (
    <div className={style.commentBox}>
      <p><span>Name :-</span> {name}</p>
      <p><span>Message :-</span> {comment}</p>
      <p><span>Date :-</span> {date}</p>
    </div>
  );
};

export default CommentUI;
