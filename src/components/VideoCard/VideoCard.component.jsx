import React, { useContext } from 'react';
import { getDescription, getTitle, getVideoSrc } from '../../utils/utils';
import './VideoCard-styling.js';
import ThemeContext, { themes } from '../../providers/Theme/Theme.provider';
import { DescripctionCard, Thumbnail, TitleCard, VideoInfo, VideoCardStyled } from './VideoCard-styling.js';
import SiteInfoProvider, { useSiteInfo } from '../../providers/SiteInfoProvider/SiteInfo.provider';

const VideoCard = ({ video, cardStyle }) => {

  const { currentTheme, updateCurrentTheme } = useContext(ThemeContext);

  const { setSelectedVideo } = useSiteInfo();

  console.log("Rendering");

  return (
  <span style={{cursor: 'pointer'}}>
    <VideoCardStyled theme={currentTheme} cardStyle={cardStyle} onClick={() => setSelectedVideo(video)}>
      {/* video */}
      <Thumbnail cardStyle={cardStyle} imgSource={`url("${getVideoSrc(video)}")`}></Thumbnail>
      {/* https://esports.as.com/2021/03/02/fortnite/LazarBeam-Fortnite_1442565741_629436_1440x600.jpg */}
      <VideoInfo cardStyle={cardStyle}>
        {/* div for title and description */}
        <TitleCard cardStyle={cardStyle}>{getTitle(video)}</TitleCard>
        <DescripctionCard cardStyle={cardStyle}>{getDescription(video)}</DescripctionCard>
      </VideoInfo>
    </VideoCardStyled>
  </span>
)};

export default VideoCard;
