import React, { useEffect, useState } from 'react';
import './VideoCardList.styles.css';
import VideoCard from '../VideoCard/VideoCard.component';
import { getVideoSrc } from '../../utils/utils.js';

const VideoCardList = ({ videoList, cardStyle }) => {
  
  const [videosToRender, setVideosToRender] = useState([]);

  useEffect(() => {
    if (videoList) {
      console.log("Render videos...");
      console.log(videoList.length);
      if (videoList.length > 0) {
        setVideosToRender(videoList);
      }
    }
  }, [videoList]);
  
  return (
  <div className="videosList">
    {videosToRender.map((vid) => (
      'snippet' in vid &&
      <VideoCard
        video={vid}
        key={getVideoSrc(vid)} 
        cardStyle={cardStyle}
      />
    ))}
  </div>)
};

export default VideoCardList;
