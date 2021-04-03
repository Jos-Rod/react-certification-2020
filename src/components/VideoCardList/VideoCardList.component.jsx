import React, { useEffect, useState } from 'react';
import './VideoCardList.styles.css';
import VideoCard from '../VideoCard/VideoCard.component';
import { getVideoSrc, getTitle, getDescription } from '../../utils/utils.js';

// function clicked() {
//   console.log("Empezando loading");
//   const search = "cbum";
//   const API_KEY = "AIzaSyBSdS56YmAQSmNNMAUgkFMmgWYuPeKegcA";
//   var myHeaders = new Headers();
//   var myInit = { method: 'GET',
//                headers: myHeaders,
//                mode: 'cors',
//                cache: 'default' };
//   var myrequest = new Request(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=cbum&key=AIzaSyBSdS56YmAQSmNNMAUgkFMmgWYuPeKegcA`, myInit);
//   fetch(myrequest).then((res) => res.json()).then((val) => {
//     console.log("ADF");
//     console.log(val);
//   });
// }



const VideoCardList = ({ videoList, setVideoSelected, cardStyle }) => {
  
  const [videosToRender, setVideosToRender] = useState([]);

  useEffect(() => {
    if (videoList) {
      setVideosToRender(videoList);
    }
  }, [videoList]);
  
  return (
  <div className="videosList">
    {videosToRender.map((vid) => (
      'snippet' in vid &&
      <VideoCard
        video={vid}
        key={getVideoSrc(vid)} 
        setSelectedVideo={setVideoSelected}
        cardStyle={cardStyle}
      />
    ))}
  </div>)
};

export default VideoCardList;
