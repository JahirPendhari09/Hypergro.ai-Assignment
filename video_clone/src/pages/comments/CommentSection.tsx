import React, { useState } from 'react';
import SingleCommentBox from './SingleCommentBox';
import CommentForm, { CommentName } from '../../components/CommentForm';

interface CommentData {
  id: number;
  name: string;
  comment: string;
  reply: CommentData[];
  date:string;
}

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<CommentData[]>([]);
  const [isAddReply, setIsAddReply] = useState<boolean>(false);

  const handleAddCommentMain = (id: number, newComment: CommentData) => {
    const toGetComment = comments.filter((curr) => curr.id === id);
    const updateComment = toGetComment[0];
    updateComment.reply.push({ ...newComment});

    const updatedState = comments.map((curr) =>
      curr.id === id ? { ...curr, reply: updateComment.reply } : curr
    );
    setComments(updatedState);
  };

  const handleAddReplyMain = (obj:CommentName) => {
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
        { isAddReply &&  <CommentForm handleAddReplyMain={handleAddReplyMain} /> }
        {
           comments?.length > 0 && comments?.map((currComment) => (
            <SingleCommentBox key={currComment.id} {...currComment} handleAddCommentMain={handleAddCommentMain} />
            ))
        }
    </>
  );
};

export default CommentSection;
