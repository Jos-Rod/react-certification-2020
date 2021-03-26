import React, { useEffect, useState } from 'react';
import './VideoCardList.styles.css';
import VideoCard from '../VideoCard/VideoCard.component';

export function getTitle(video) {
  const aux = video.snippet.title;
  return aux != null ? aux : '';
}
export function getDescription(video) {
  const aux = video.snippet.description;
  return aux != null ? aux : '';
}
export function getVideoSrc(video) {
  const aux = video.snippet.thumbnails.high.url;
  return aux != null ? aux : '';
}

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



const VideoCardList = ({ videoList }) => {
  
  const [videosToRender, setVideosToRender] = useState([]);

  useEffect(() => {
    console.log("Video list updated");
    setVideosToRender(videoList);
  }, [videoList]);
  
  return (
  <div className="videosList">
    {videosToRender.map((vid) => (
      <VideoCard
        title={getTitle(vid)}
        description={getDescription(vid)}
        videoSrc={getVideoSrc(vid)}
        key={getVideoSrc(vid)} 
      />
    ))}
  </div>)
};

export default VideoCardList;
