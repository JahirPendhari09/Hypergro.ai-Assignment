import React from 'react';
import LikeDislike from '../../components/LiksDislikes';
import CommentSection from '../comments/CommentSection';
import styles from './video.module.css'

interface Video {
  submission: {
    mediaUrl: string;
    title: string;
    hyperlink: string;
    description: string;
  };
  creator: {
    pic: string;
    handle: string;
  };
}

interface Props { selectedVideo: Video | null;}

const VideoSection: React.FC<Props> = ({ selectedVideo }) => {
  return (
    <div className={`${styles[selectedVideo ? "container" : 'null']}`}>
      {selectedVideo && (
        <div>
          <video controls>
            <source src={selectedVideo.submission?.mediaUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h2>{selectedVideo.submission?.title}</h2>
          <div className={styles.userData}>
            <img src={selectedVideo?.creator?.pic} width="40px" height="40px" alt="Creator's Profile Pic" />
            <a href={selectedVideo?.submission?.hyperlink} target='_blank' rel="noreferrer">{selectedVideo?.creator?.handle}</a>
            <LikeDislike />
          </div>
          <p> Description :- {selectedVideo?.submission?.description}</p>
          <CommentSection />
        </div>
      )}

    </div>
  );
};

export default VideoSection;
