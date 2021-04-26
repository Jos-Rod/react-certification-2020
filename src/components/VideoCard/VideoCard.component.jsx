import React, { useContext } from 'react';
import { getDescription, getTitle, getVideoId, getVideoSrc } from '../../utils/utils';
import './VideoCard-styling.js';
import ThemeContext, { themes } from '../../providers/Theme/Theme.provider';
import { DescripctionCard, Thumbnail, TitleCard, VideoInfo, VideoCardStyled } from './VideoCard-styling.js';
import SiteInfoProvider, { useSiteInfo } from '../../providers/SiteInfoProvider/SiteInfo.provider';
import { useHistory } from 'react-router-dom';

const VideoCard = ({ video, cardStyle, isFromFav = false, showCurrent=false }) => {
  const history = useHistory();
  const { currentTheme, updateCurrentTheme } = useContext(ThemeContext);

  const { setSelectedVideo, setSelectedVideoFav, selectedVideoFav } = useSiteInfo();

  function handleClickOnVideoCard() {
    if (isFromFav) {
      setSelectedVideoFav(video);
      history.push(`/vdf/${getVideoId(video)}`);
    } else {
      setSelectedVideo(video);
      history.push(`/vd/${getVideoId(video)}`);
    }
  }
  
  function isCurrentVideo() {
    if (Object.keys(selectedVideoFav).length === 0) {
      return false
    } else {
      if (getVideoId(selectedVideoFav) === getVideoId(video)) {
        return true
      } 
      return false
    }
  }

  return (
  <span style={{cursor: 'pointer'}}>
    <VideoCardStyled theme={currentTheme} cardStyle={cardStyle} isCurrent={isCurrentVideo()} onClick={handleClickOnVideoCard}>
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
