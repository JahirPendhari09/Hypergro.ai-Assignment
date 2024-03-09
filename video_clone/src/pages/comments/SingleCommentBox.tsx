import React, { useState } from 'react';
import CommentUI from './CommentUI';
import  style from './comment.module.css';
import LikeDislike from '../../components/LiksDislikes';
import Modal from '../../components/CommentForm';
import { initialForm } from '../../common/rowMaterial';

interface CommentData {
  id: number;
  name: string;
  comment: string;
  reply: CommentData[];
  date:string,
}

interface Props {
  id: number;
  name: string;
  reply: CommentData[];
  comment: string;
  date:string,
  handleAddCommentMain: (id: number, newComment: CommentData) => void;
}

const SingleCommentBox: React.FC<Props> = ({ id, name, reply, comment,date, handleAddCommentMain }) => {
  const [isAddReply, setIsAddReply] = useState<boolean>(false);

  const handleCloseModal = () => {
    setIsAddReply(false);
  };

  const handleAddComment = (obj:initialForm) => {
    const newComment: CommentData = {
      id: Math.random() * 100 ,
      name: obj.name,
      comment: obj.comment,
      reply: [],
      date : new Date().toLocaleString(),
    };
    handleAddCommentMain(id, newComment);
    setIsAddReply(!isAddReply);
  };
  const obj = { id,name,comment,date}
  return (
    <>
      <div className={style.container}>
        <div>
          <CommentUI {...obj} />
          <LikeDislike totalL={name=="john"? 1:0} totalDis= {0}/>
          <button onClick={() => setIsAddReply(!isAddReply)}>Add Reply</button>
        </div>

        <h5>{reply.length >0 && reply.length} Replies</h5>
        {isAddReply && <Modal isOpen={isAddReply} onClose ={handleCloseModal} handleAddReplyMain={handleAddComment}/>}

        <div  className={style.repliesSingleComment}>
          {reply?.length > 0 &&
            reply?.map((curr) => (
              <CommentUI key={curr.id} {...curr} id={id} />
            ))}
        </div>
        <hr />
      </div>
    </>
  );
};

export default SingleCommentBox;
