import React, { useEffect, useState } from 'react';
import './VideoCardList.styles.css';
import VideoCard from '../VideoCard/VideoCard.component';
import { getVideoSrc } from '../../utils/utils.js';

const VideoCardList = ({ videoList, cardStyle, isFromFav, showCurrent = false }) => {
  
  const [videosToRender, setVideosToRender] = useState([]);

  useEffect(() => {
    if (videoList) {
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
        isFromFav={isFromFav}
        showCurrent={showCurrent}
      />
    ))}
  </div>)
};

export default VideoCardList;
