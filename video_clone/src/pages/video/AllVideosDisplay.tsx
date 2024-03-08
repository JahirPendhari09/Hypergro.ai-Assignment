import React from 'react';
import styles from './video.module.css'

interface Video {
  id: string;
  submission: {
    thumbnail: string;
    title: string;
    hyperlink: string;
  };
  creator: {
    handle: string;
  };
  reaction: {
    count: number;
  };
}

interface Props {
  selectedVideo: Video | null;
  handleChange: (video: Video) => void;
  videos: Video[];
}

const AllVideosDisplay: React.FC<Props> = ({ selectedVideo, handleChange, videos }) => {
  return (
    <div className={`${styles[selectedVideo ? 'videoThumbnails' : 'showAllVideo']}`}>
      { videos.length > 0 && videos.map((video) => (
        <div key={video.id} onClick={() => handleChange(video)} style={{ display: 'flex' }}>
          <img src={video.submission?.thumbnail} alt={video.submission?.title} />
          <div className={styles.videoData}>
            <h3>{video.submission?.title}</h3>
            <a href={video.submission?.hyperlink} target='_blank' rel="noreferrer" style={{ fontSize: "16px" }}>{video?.creator?.handle}</a>
            <p>{Math.floor(10 * video.reaction?.count) <=0 ? 1: Math.floor(10* video.reaction?.count)}k Views</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllVideosDisplay;
