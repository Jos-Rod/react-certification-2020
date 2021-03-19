import React from 'react';
import './VideoCardList.styles.css';
import videos from '../mock/youtube-videos-mock.js';
import VideoCard from '../VideoCard/VideoCard.component';

const { items } = videos;

function getTitle(video) {
    return video.snippet.title;
}
function getDescription(video) {
    return video.snippet.description;
}
function getVideoSrc(video) {
    return video.snippet.thumbnails.default;
}

const VideoCardList = ({title, videoSrc, description}) => (
    <div className="videosList">
        {items.map(vid => <VideoCard 
            title={getTitle()} 
            description={getDescription()} 
            videoSrc={getVideoSrc()}
            />
        )}
    </div> 
  );
  
  export default VideoCardList;