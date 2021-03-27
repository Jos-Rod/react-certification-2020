import React from 'react';
import './ChannelCard.styles.css';
import { getVideoSrc, getTitle } from '../../utils/utils.js';


const ChannelCard = ({ channel }) => {
    console.log(channel);
    const imageChannel = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/season-1-pictured-news-photo-1600677860.jpg?crop=1.00xw:0.668xh;0,0.0247xh&resize=640:*";
    return (
        <>
        <div className="divFatherChannelCard">
            {/* <h4>{channel.snippet.title}</h4> */}
            <div style={{display: 'flex', alignItems: 'center'}}>
                <div className="divChannelImage" style={{
                    width: '70pt',
                    height: '70pt',
                    backgroundImage: `url("${getVideoSrc(channel)}")`,
                    backgroundSize: 'cover',
                    borderRadius: '50%',
                    backgroundRepeat: 'no-repeat',
                    display: 'inline'                    
                }}></div>
                <div style={{ display:'inline', marginLeft: '10px' }}>
                    <h4>{getTitle(channel)}</h4>
                </div>
            </div>
        </div>
        </>
    );
};

export default ChannelCard;