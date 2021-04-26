import React, { useEffect, useState, useContext } from 'react';
import { getDescription, getTitle, getVideoId, isInList } from '../../utils/utils';
import { IconContext } from 'react-icons';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import ThemeContext from '../../providers/Theme/Theme.provider';
import { GrandContainerVideo, VideoContainerParent, ContainerVideoAndInfo, EverythingContainer, VideoPlayerContainer, RelatedVideosParent, VideoTitleStyle, VideoDescriptionStyle } from './VideoDetailsFavourite.styling.js';
import { useSiteInfo } from '../../providers/SiteInfoProvider/SiteInfo.provider';
import { useAuth } from '../../providers/Auth';
import { ButtonHoverItem } from '../../components/NavBar/NavBar-styling';
import VideoCardList from '../../components/VideoCardList';


const VideoDetailsFavourite = () => {
    const { saveOrRemoveVideoFavourites, favouriteVideos, selectedVideoFav } = useSiteInfo();
    const [displayTitle, setDisplayTitle] = useState("");
    const [displayDescription, setDisplayDescription] = useState("");
    const [videoSource, setVideoSource] = useState("");

    const { currentTheme } = useContext(ThemeContext);
    const { authenticated } = useAuth();

    useEffect(() => {
        if (Object.keys(selectedVideoFav).length > 0) {
            // set video info
            setDisplayTitle(getTitle(selectedVideoFav));
            setDisplayDescription(getDescription(selectedVideoFav));
            setVideoSource(`https://www.youtube.com/embed/${getVideoId(selectedVideoFav)}?enablejsapi=1`);
        }
    }, [selectedVideoFav]);

    function handleClickFavourite() {
        saveOrRemoveVideoFavourites(selectedVideoFav);
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
                                        { !isInList(favouriteVideos, selectedVideoFav) ? <FaRegHeart /> : <FaHeart /> } 
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
                            <h4 style={{ textAlign: 'left', marginLeft: '20pt', marginBottom: '0px' }}>Favourite videos</h4>
                        </div>
                            {/* Related videos */}
                            { favouriteVideos.length > 0 ? <VideoCardList videoList={favouriteVideos} cardStyle="horizontal" showCurrent={true} isFromFav={true} /> : null }
                    </div>
                </RelatedVideosParent>
            </EverythingContainer>
            </IconContext.Provider>
        </>
    );

};

export default VideoDetailsFavourite;