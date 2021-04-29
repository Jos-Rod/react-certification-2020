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

const VideoCard = ({ video, cardStyle, isFromFav = false, currentVideoId }) => {
  const history = useHistory();
  const { currentTheme } = useContext(ThemeContext);

  function handleClickOnVideoCard() {
    if (isFromFav) {
      console.log('Click en uno favorito');
      console.log(video);
      history.push(`/vdf/${video.id}`);
    } else {
      console.log('Click en uno normal');
      history.push(`/vd/${getVideoId(video)}`);
    }
  }

  return (
    <span style={{ cursor: 'pointer' }}>
      <VideoCardStyled
        theme={currentTheme}
        cardStyle={cardStyle}
        isCurrent={
          currentVideoId
            ? currentVideoId === (isFromFav ? video.id : getVideoId(video))
            : false
        }
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
