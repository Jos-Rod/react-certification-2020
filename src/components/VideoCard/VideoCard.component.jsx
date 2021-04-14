import React, { useContext } from 'react';
import { getDescription, getTitle, getVideoSrc } from '../../utils/utils';
import './VideoCard.styles.css';
import ThemeContext, { themes } from '../../providers/Theme/Theme.provider';
import styled from 'styled-components';

const VideoCard = ({ video, setSelectedVideo, cardStyle }) => {

  const { currentTheme, updateCurrentTheme } = useContext(ThemeContext);

  const VideoCard = styled.div`
      {
        background-color: white;
        width: 15rem;
        margin: 10px;
        border-radius: 10px;
        overflow: hidden;
        transition-duration: 0.05s;
        display: inline-block;
        height: 18rem;
        max-height: 20rem;
        box-shadow: 0 5px 3px 0 rgba(0, 0, 0 , .1);
      };
      &:hover {
        background-color: ${currentTheme.backgroundPrincipalColor};
        width: 15rem;
        margin: 10px;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 10px 10px 0 rgba(0, 0, 0 , .1);
      }
  `;
  
  return (
  <span style={{cursor: 'pointer'}}>
    <VideoCard onClick={() => setSelectedVideo(video)}>
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
    </VideoCard>
  </span>
)};

export default VideoCard;
