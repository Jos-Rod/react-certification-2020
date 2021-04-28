import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { getDescription, getTitle, getVideoId, getVideoSrc } from '../../utils/utils';
import {
  DescripctionCard,
  Thumbnail,
  TitleCard,
  VideoInfo,
  VideoCardStyled,
} from './VideoCard-styling';
import ThemeContext from '../../providers/Theme/Theme.provider';

import { useSiteInfo } from '../../providers/SiteInfoProvider/SiteInfo.provider';

const VideoCard = ({ video, cardStyle, isFromFav = false }) => {
  const history = useHistory();
  const { currentTheme } = useContext(ThemeContext);

  const { setSelectedVideo, setSelectedVideoFav, selectedVideoFav } = useSiteInfo();

  function handleClickOnVideoCard() {
    if (isFromFav) {
      console.log('Click en uno favorito');
      setSelectedVideoFav(video);
      history.push(`/vdf/${getVideoId(video)}`);
    } else {
      console.log('Click en uno normal');
      setSelectedVideo(video);
      history.push(`/vd/${getVideoId(video)}`);
    }
  }

  function isCurrentVideo() {
    if (Object.keys(selectedVideoFav).length === 0) {
      return false;
    }
    if (getVideoId(selectedVideoFav) === getVideoId(video)) {
      return true;
    }
    return false;
  }

  return (
    <span style={{ cursor: 'pointer' }}>
      <VideoCardStyled
        theme={currentTheme}
        cardStyle={cardStyle}
        isCurrent={isCurrentVideo()}
        onClick={handleClickOnVideoCard}
      >
        {/* video */}
        <Thumbnail cardStyle={cardStyle} imgSource={`url("${getVideoSrc(video)}")`} />
        {/* https://esports.as.com/2021/03/02/fortnite/LazarBeam-Fortnite_1442565741_629436_1440x600.jpg */}
        <VideoInfo cardStyle={cardStyle}>
          {/* div for title and description */}
          <TitleCard cardStyle={cardStyle}>{getTitle(video)}</TitleCard>
          <DescripctionCard cardStyle={cardStyle}>
            {getDescription(video)}
          </DescripctionCard>
        </VideoInfo>
      </VideoCardStyled>
    </span>
  );
};

export default VideoCard;
