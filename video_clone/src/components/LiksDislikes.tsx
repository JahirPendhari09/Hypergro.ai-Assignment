import React, { useState } from 'react';
import  style from './component.module.css';
interface likdislik {
  totalL?:number,
  totalDis?:number
}
const LikeDislike: React.FC<likdislik> = ({totalL, totalDis}) => {
  const [likes, setLikes] = useState<boolean>();
  const [dislikes, setDislikes] = useState<boolean>(false);
  const [totalLikes  ]= useState<number>(totalL == 0 ? 0 : Math.floor(Math.random()*50));
  const [totalDislikes ]= useState<number>(totalDis==0? 0:Math.floor(Math.random()*10))

  const handleLikeClick = () => {
    setLikes(!likes);
    if (dislikes) {
      setDislikes(false);
    }
  };

  const handleDislikeClick = () => {
    setDislikes(!dislikes);
    if (likes) {
      setLikes(false);
    }
  };

  return (
    <div className={style.likes}>
      <div className={style.bars}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={likes ? "blue" : "none"}
          stroke="currentColor"
          onClick={handleLikeClick}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-thumbs-up"
          style={ {  cursor: "pointer"}}
        >
          <path d="M7 10v12" />
          <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
        </svg>
        <p>{likes?totalLikes+1:totalLikes}</p>
      </div>
      <div className={style.bars}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={dislikes ? "blue" : "none"}
          stroke="currentColor"
          onClick={handleDislikeClick}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-thumbs-down"
          style={ {  cursor: "pointer"}}
        >
          <path d="M17 14V2" />
          <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
        </svg>
        <p>{dislikes?totalDislikes+1:totalDislikes}</p>
      </div>
    </div>
  );
};

export default LikeDislike;
