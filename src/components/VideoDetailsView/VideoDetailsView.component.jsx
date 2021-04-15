import React, { useEffect, useState, useContext } from 'react';
import { getDescription, getTitle, getVideoId } from '../../utils/utils';
import VideoCardList from '../VideoCardList';
import './VideoDetailsView-styles.js';
import ThemeContext, { themes } from '../../providers/Theme/Theme.provider';
import { GrandContainerVideo, VideoContainerParent, ContainerVideoAndInfo, VideoPlayerContainer, RelatedVideosParent, VideoTitleStyle, VideoDescriptionStyle } from './VideoDetailsView-styles.js';

const VideoDetailsView = ({ video, relatedVideos, setVideoSelected }) => {
    const [displayTitle, setDisplayTitle] = useState("");
    const [displayDescription, setDisplayDescription] = useState("");
    const [videoSource, setVideoSource] = useState("");

    const { currentTheme, updateCurrentTheme } = useContext(ThemeContext);

    useEffect(() => {
        if (video) {
            // set video info
            setDisplayTitle(getTitle(video));
            setDisplayDescription(getDescription(video));
            setVideoSource(`https://www.youtube.com/embed/${getVideoId(video)}?enablejsapi=1`);
            
            // get related videos
        }
    }, [video]);

    useEffect(() => {
        console.log("actualizados");
        console.log(relatedVideos);
    }, [relatedVideos]);

    return (
        <>
            <div style={{marginTop: 80, display: 'flex'}}>
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
                            <VideoTitleStyle theme={currentTheme} className="videoTitleStyle">{displayTitle}</VideoTitleStyle>
                            <VideoDescriptionStyle theme={currentTheme} className="videoDescriptionStyle">{displayDescription}</VideoDescriptionStyle>
                        </div>
                    </ContainerVideoAndInfo>
                </VideoContainerParent>
                <RelatedVideosParent >
                    <div style={{ margin: '10px' }}>
                        <div>
                            <h4 style={{ textAlign: 'left', marginLeft: '20pt', marginBottom: '0px' }}>Related videos</h4>
                        </div>
                        <div>
                            {/* Related videos */}
                            <VideoCardList videoList={relatedVideos} setVideoSelected={setVideoSelected} cardStyle="horizontal" />
                        </div>
                    </div>
                </RelatedVideosParent>
            </div>
        </>
    );

};

export default VideoDetailsView;