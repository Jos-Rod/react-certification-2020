import React from 'react';
import './ChannelCard.styles.css';
import { getVideoSrc, getTitle } from '../../utils/utils.js';


const ChannelCard = ({ channel }) => {
    console.log(channel);
    console.log(`title: ${getTitle(channel)} | imagen: ${getVideoSrc(channel)}`);
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
                    <h5>{getTitle(channel)}</h5>
                </div>
            </div>
        </div>
        </>
    );
};

export default ChannelCard;