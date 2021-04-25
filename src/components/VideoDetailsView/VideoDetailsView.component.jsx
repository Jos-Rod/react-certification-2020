import React, { useEffect, useState, useContext } from 'react';
import { getDescription, getTitle, getVideoId, isInList } from '../../utils/utils';
import VideoCardList from '../VideoCardList';
import { IconContext } from 'react-icons';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import './VideoDetailsView-styles.js';
import ThemeContext, { themes } from '../../providers/Theme/Theme.provider';
import { GrandContainerVideo, VideoContainerParent, ContainerVideoAndInfo, EverythingContainer, VideoPlayerContainer, RelatedVideosParent, VideoTitleStyle, VideoDescriptionStyle } from './VideoDetailsView-styles.js';
import { useSiteInfo } from '../../providers/SiteInfoProvider/SiteInfo.provider';
import useYTubeRequest from '../../utils/hooks/useYTbe.js';
import { ButtonHoverItem } from '../NavBar/NavBar-styling';
import { useAuth } from '../../providers/Auth';


const VideoDetailsView = () => {
    const { selectedVideo, withMock, saveOrRemoveVideoFavourites, favouriteVideos } = useSiteInfo();
    const [displayTitle, setDisplayTitle] = useState("");
    const [displayDescription, setDisplayDescription] = useState("");
    const [videoSource, setVideoSource] = useState("");
    // const videosRelated = useYTubeRequest(Object.keys(selectedVideo).length > 0 ? getVideoId(selectedVideo) : "wizeline", "SEARCH_RELATED");
    const videosRelated = {};

    const { currentTheme } = useContext(ThemeContext);
    const { authenticated } = useAuth();

    useEffect(() => {
        if (Object.keys(selectedVideo).length > 0) {
            // set video info
            setDisplayTitle(getTitle(selectedVideo));
            setDisplayDescription(getDescription(selectedVideo));
            setVideoSource(`https://www.youtube.com/embed/${getVideoId(selectedVideo)}?enablejsapi=1`);
            
            // get related videos
        }
    }, [selectedVideo]);

    function handleClickFavourite() {
        saveOrRemoveVideoFavourites(selectedVideo);
    }

    return (
        <>
        <IconContext.Provider
              value={{ style: { fontSize: '36px', color: 'hsl(0, 96.77419354838712%, 63.52941176470588%)' } }}
            >
            <EverythingContainer>
                <VideoContainerParent>
                    <ContainerVideoAndInfo theme={currentTheme} >
                        <GrandContainerVideo theme={currentTheme} >
                            <VideoPlayerContainer>
                                <iframe
                                        // 640 360
                                        style={{borderStyle: 'none', position:'absolute', top: '0', left: '0', width: '100%', height: '100%'}}
                                        src={videoSource}
                                        title="This is the video"
                                ></iframe>
                            </VideoPlayerContainer>
                        </GrandContainerVideo>
                        <div style={{marginLeft: '10px', }}>
                            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                <VideoTitleStyle theme={currentTheme} className="videoTitleStyle">{displayTitle}</VideoTitleStyle>
                                { authenticated ? <div style={{ display: 'flex', alignItems: 'center', marginTop: 'auto', marginBottom: 'auto' }}>
                                    <ButtonHoverItem onClick={handleClickFavourite} >
                                        { isInList(favouriteVideos, selectedVideo) ? <FaRegHeart /> : <FaHeart /> } 
                                    </ButtonHoverItem>
                                </div> : null}
                            </div>
                            <VideoDescriptionStyle theme={currentTheme} className="videoDescriptionStyle">{displayDescription}</VideoDescriptionStyle>
                        </div>
                    </ContainerVideoAndInfo>
                </VideoContainerParent>
                <RelatedVideosParent >
                    <div style={{ margin: '10px' }}>
                        <div>
                            <h4 style={{ textAlign: 'left', marginLeft: '20pt', marginBottom: '0px' }}>Related videos</h4>
                        </div>
                        { !withMock ?<div>
                            {/* Related videos */}
                            { videosRelated.videos.length > 0 ? <VideoCardList videoList={videosRelated.videos} cardStyle="horizontal" /> : null }
                        </div> : null}
                    </div>
                </RelatedVideosParent>
            </EverythingContainer>
            </IconContext.Provider>
        </>
    );

};

export default VideoDetailsView;