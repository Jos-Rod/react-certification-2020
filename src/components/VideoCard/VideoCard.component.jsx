import React, { isValidElement } from 'react';
import './VideoCard.styles.css';

const VideoCard = ({title, videoSrc, description}) => (
  <div className="videoCardStyle">
      {/* video */}
      <div style={{ width: '100%', height: '8rem',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      marginBottom: '0px',
        backgroundImage: `url("${videoSrc}")` }}></div> 
        {/* https://esports.as.com/2021/03/02/fortnite/LazarBeam-Fortnite_1442565741_629436_1440x600.jpg */}
      <div style={{ margin: '9px' }}>
          {/* div for title and description */}
          <p className="titleCard">{title}</p>
          <p className="descriptionCard">{description}</p>
      </div>
  </div> 
);

export default VideoCard;