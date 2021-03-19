import React from 'react';
import './VideoCardList.styles.css';
import videos from '../mock/youtube-videos-mock.json';
import VideoCard from '../VideoCard/VideoCard.component';

const { items } = videos;

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

const VideoCardList = ({ title, videoSrc, description }) => (
  <div className="videosList">
    {items.map((vid) => (
      <VideoCard
        title={getTitle(vid)}
        description={getDescription(vid)}
        videoSrc={getVideoSrc(vid)}
        key={getVideoSrc(vid)} 
      />
    ))}
  </div>
);

export default VideoCardList;
