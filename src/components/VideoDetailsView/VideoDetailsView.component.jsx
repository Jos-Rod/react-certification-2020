import React, { useEffect, useState, useContext } from 'react';
import { IconContext } from 'react-icons';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { getDescription, getTitle, getVideoId, isInList } from '../../utils/utils';
import VideoCardList from '../VideoCardList';
import {
  GrandContainerVideo,
  VideoContainerParent,
  ContainerVideoAndInfo,
  EverythingContainer,
  VideoPlayerContainer,
  RelatedVideosParent,
  VideoTitleStyle,
  VideoDescriptionStyle,
} from './VideoDetailsView-styles';
import ThemeContext from '../../providers/Theme/Theme.provider';

import { useSiteInfo } from '../../providers/SiteInfoProvider/SiteInfo.provider';
import useYTubeRequest from '../../utils/hooks/useYTbe';
import { ButtonHoverItem } from '../NavBar/NavBar-styling';
import { useAuth } from '../../providers/Auth';
import { useParams } from 'react-router';

const VideoDetailsView = () => {
  const {
    withMock,
    saveOrRemoveVideoFavourites,
    favouriteVideos,
  } = useSiteInfo();
  const { currentTheme } = useContext(ThemeContext);
  const { authenticated } = useAuth();
  const { id } = useParams();
  const [displayTitle, setDisplayTitle] = useState('');
  const [displayDescription, setDisplayDescription] = useState('');
  const [videoSource, setVideoSource] = useState('');
  const [currentVideo, setCurrentVideo] = useState({});
  const videosRelated = useYTubeRequest(
    id ? id : 'wizeline',
    'SEARCH_RELATED'
  );
  const videoFromId = useYTubeRequest(
    id,
    'GET_VIDEO_FROM_ID'
  );

  useEffect(() => {
    setVideoSource(
      `https://www.youtube.com/embed/${id}?enablejsapi=1`
    );
  });

  useEffect(() => {
    const vid = videoFromId.videos[0];
    setCurrentVideo(vid);
    setDisplayTitle(getTitle(vid));
    setDisplayDescription(getDescription(vid));
  }, [videoFromId]);

  function handleClickFavourite() {
    saveOrRemoveVideoFavourites(currentVideo);
  }

  return (
    <>
      <IconContext.Provider
        value={{
          style: {
            fontSize: '36px',
            color: 'hsl(0, 96.77419354838712%, 63.52941176470588%)',
          },
        }}
      >
        <EverythingContainer>
          <VideoContainerParent>
            <ContainerVideoAndInfo theme={currentTheme}>
              <GrandContainerVideo theme={currentTheme}>
                <VideoPlayerContainer>
                  <iframe
                    // 640 360
                    style={{
                      borderStyle: 'none',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                    }}
                    src={videoSource}
                    title="This is the video"
                  />
                </VideoPlayerContainer>
              </GrandContainerVideo>
              <div style={{ marginLeft: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                  <VideoTitleStyle theme={currentTheme} className="videoTitleStyle">
                    {displayTitle}
                  </VideoTitleStyle>
                  {authenticated ? (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: 'auto',
                        marginBottom: 'auto',
                      }}
                    >
                      <ButtonHoverItem onClick={handleClickFavourite} aria-label="WOWW">
                        {isInList(favouriteVideos, currentVideo) ? (
                          <FaHeart />
                        ) : (
                          <FaRegHeart />
                        )}
                      </ButtonHoverItem>
                    </div>
                  ) : null}
                </div>
                <VideoDescriptionStyle
                  theme={currentTheme}
                  className="videoDescriptionStyle"
                >
                  {displayDescription}
                </VideoDescriptionStyle>
              </div>
            </ContainerVideoAndInfo>
          </VideoContainerParent>
          <RelatedVideosParent>
            <div style={{ margin: '10px' }}>
              <div>
                <h4
                  style={{ textAlign: 'left', marginLeft: '20pt', marginBottom: '0px' }}
                >
                  Related videos
                </h4>
              </div>
              {!withMock ? (
                <div>
                  {/* Related videos */}
                  {videosRelated.videos.length > 0 ? (
                    <VideoCardList
                      videoList={videosRelated.videos}
                      cardStyle="horizontal"
                    />
                  ) : null}
                </div>
              ) : null}
            </div>
          </RelatedVideosParent>
        </EverythingContainer>
      </IconContext.Provider>
    </>
  );
};

export default VideoDetailsView;
