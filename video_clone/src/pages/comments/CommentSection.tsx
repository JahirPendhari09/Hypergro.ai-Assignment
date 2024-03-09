import React, { useState } from 'react';
import SingleCommentBox from './SingleCommentBox';
import Modal from '../../components/CommentForm';
import { initialForm } from '../../common/rowMaterial';

interface CommentData {
  id: number;
  name: string;
  comment: string;
  reply: CommentData[];
  date:string;
}
const initalComment :CommentData = {
  id:1,
  name:"john",
  comment:"nice video",
  reply:[],
  date: new Date().toLocaleString()

}
const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<CommentData[]>([initalComment]);
  const [isAddReply, setIsAddReply] = useState<boolean>(false);

  const handleCloseModal = () => {
    setIsAddReply(false);
  };

  const handleAddCommentMain = (id: number, newComment: CommentData) => {
    const toGetComment = comments.filter((curr) => curr.id === id);
    const updateComment = toGetComment[0];
    updateComment.reply.push({ ...newComment});

    const updatedState = comments.map((curr) =>
      curr.id === id ? { ...curr, reply: updateComment.reply } : curr
    );
    setComments(updatedState);
  };

  const handleAddReplyMain = (obj:initialForm) => {
    const newComment: CommentData = {
      id: Math.random() * 100,
      name: obj.name,
      comment: obj.comment,
      reply: [],
      date:new Date().toLocaleString()
    };

    const updatedState = [...comments, newComment];
    setComments(updatedState);
    setIsAddReply(!isAddReply);
  };

  return (
    <>
      <h3>{comments.length>0 && comments.length } Comments</h3>  
       <button onClick={() => setIsAddReply(!isAddReply)}>Add Comment</button>
        { isAddReply &&   <Modal
           isOpen={isAddReply}
           onClose={handleCloseModal}
           handleAddReplyMain={handleAddReplyMain}
          />
        }
        {
           comments?.length > 0 && comments?.map((currComment) => (
            <SingleCommentBox key={currComment.id} {...currComment} handleAddCommentMain={handleAddCommentMain} />
            ))
        }
    </>
  );
};

export default CommentSection;
