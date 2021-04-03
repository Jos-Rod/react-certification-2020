import React from 'react';
import { getDescription, getTitle, getVideoSrc } from '../../utils/utils';
import './VideoCard.styles.css';

const VideoCard = ({ video, setSelectedVideo, cardStyle }) => (
  <span style={{cursor: 'pointer'}}>
    <div className={cardStyle !== "horizontal" ? "videoCardStyle" : "videoCardStyleHorizontal"} onClick={() => setSelectedVideo(video)}>
      {/* video */}
      <div className={cardStyle !== "horizontal" ? "thumbnail" : "thumbnailHorizontal"}
        style={{
          backgroundImage: `url("${getVideoSrc(video)}")`,
        }}
      />
      {/* https://esports.as.com/2021/03/02/fortnite/LazarBeam-Fortnite_1442565741_629436_1440x600.jpg */}
      <div className={cardStyle !== "horizontal" ? "videoInfo" : "videoInfoHorizontal"}>
        {/* div for title and description */}
        <p className={cardStyle !== "horizontal" ? "titleCard" : "titleCardHorizontal"}>{getTitle(video)}</p>
        <p className={cardStyle !== "horizontal" ? "descriptionCard" : "descriptionCardHorizontal"}>{getDescription(video)}</p>
      </div>
    </div>
  </span>
);

export default VideoCard;
