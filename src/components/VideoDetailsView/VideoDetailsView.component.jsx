import React, { useEffect, useState } from 'react';
import { getDescription, getTitle, getVideoId, getVideoSrc } from '../../utils/utils';
import './VideoDetailsView.styles.css';

const VideoDetailsView = ({ video }) => {
    const [displayTitle, setDisplayTitle] = useState("");
    const [displayDescription, setDisplayDescription] = useState("");
    const [videoSource, setVideoSource] = useState("");

    useEffect(() => {
        if (video) {
            setDisplayTitle(getTitle(video));
            setDisplayDescription(getDescription(video));
            setVideoSource(`https://www.youtube.com/embed/${getVideoId(video)}?enablejsapi=1`);
            console.log(video);
        }
    }, [video]);

    // var player;
    // function onYouTubeIframeAPIReady() {
    //     // eslint-disable-next-line no-use-before-define
    //     player = new YT.Player('existing-iframe-example', {
    //         events: {
    //         'onReady': onPlayerReady,
    //         'onStateChange': onPlayerStateChange
    //         }
    //     });
    // }

    // function onPlayerReady(e) {
    //     console.log("Video loaded");
    // }

    // function onReadyAction(e) {
    //     console.log("on readiy action");
    // }

    return (
        <>
            <div style={{marginTop: 80}}>
                <div className="videoContainerParent">
                    <div className="containerVideoAndInfo">
                        <div className="grandContainerVideo">
                            <div className="videoPlayerContainer">
                                <iframe
                                        // 640 360
                                        style={{borderStyle: 'none'}}
                                        src={videoSource}
                                ></iframe>
                            </div>
                        </div>
                        <div style={{marginLeft: '10px', }}>
                            <h3 className="videoTitleStyle">{displayTitle}</h3>
                            <p className="videoDescriptionStyle">{displayDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

};

export default VideoDetailsView;