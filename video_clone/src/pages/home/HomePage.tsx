import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../../components/Loader';
import VideoSection from '../video/VideoSection';
import AllVideosDisplay from '../video/AllVideosDisplay';
import PaginationButton from '../../components/PaginationButton';
import styles from './home.module.css';

const Homepage: React.FC = () => {
  const [videos, setVideos] = useState<any[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<any | null>(null);
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchVideos = async (pageNumber: number) => {
    try {
      const response = await axios.get(`https://internship-service.onrender.com/videos?page=${pageNumber}`);
      console.log(response);
      setVideos(response.data.data.posts);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const handleChange = (video: any) => {
    setLoading(true);
    setSelectedVideo(video);
  };

  useEffect(() => {
    fetchVideos(page);
  }, [page]);

  useEffect(() => {
    const time = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(time);
  }, [selectedVideo]);

  if (loading) return <Loader />;
  
  return (
    <div className={styles.App}>
      <h1>Video Clone</h1>
      <div className={styles.mainContainer}>
        <VideoSection selectedVideo={selectedVideo} />
        <AllVideosDisplay handleChange={handleChange} videos={videos} selectedVideo={selectedVideo} />
      </div>
      <div>
        <PaginationButton onClick={() => setPage(page - 1)} disabled={page === 0} label="Previous"/>
        <PaginationButton onClick={() => setPage(page + 1)} disabled={page === 9} label="Next" />
      </div>
    </div>
  );
};

export default Homepage;
