import React from 'react';
import './VideoCardList.styles.css';
import videos from '../mock/youtube-videos-mock.json';
import VideoCard from '../VideoCard/VideoCard.component';

const {items} = videos;

function getTitle(video) {
    return video.snippet.title;
}
function getDescription(video) {
    return video.snippet.description;
}
function getVideoSrc(video) {
    return video.snippet.thumbnails.high.url;
}

const VideoCardList = ({title, videoSrc, description}) => (
    <div className="videosList">
        {items.map(vid => <VideoCard 
            title={getTitle(vid)} 
            description={getDescription(vid)} 
            videoSrc={getVideoSrc(vid)}
            />
        )}
    </div> 
  );
  
  export default VideoCardList;