import React from 'react';
import { getDescription, getTitle, getVideoSrc } from '../../utils/utils';
import './VideoCard.styles.css';

const VideoCard = ({ video, setSelectedVideo }) => (
  <span style={{cursor: 'pointer'}}>
    <div className="videoCardStyle" onClick={() => setSelectedVideo(video)}>
      {/* video */}
      <div
        style={{
          width: '100%',
          height: '8rem',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          marginBottom: '0px',
          backgroundImage: `url("${getVideoSrc(video)}")`,
          backgroundPosition: 'center',
        }}
      />
      {/* https://esports.as.com/2021/03/02/fortnite/LazarBeam-Fortnite_1442565741_629436_1440x600.jpg */}
      <div style={{ margin: '9px', textAlign: 'left' }}>
        {/* div for title and description */}
        <p className="titleCard">{getTitle(video)}</p>
        <p className="descriptionCard">{getDescription(video)}</p>
      </div>
    </div>
  </span>
);

export default VideoCard;
