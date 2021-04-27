import React, { useContext } from 'react';
import './ChannelCard.styles.css';
import { getVideoSrc, getTitle } from '../../utils/utils.js';
import { ChannelImage, FatherChannelCard } from './ChannelCard.styling';
import { ThemeContext, useTheme } from 'styled-components';


const ChannelCard = ({ channel }) => {

    return (
        <>
        <FatherChannelCard>
            {/* <h4>{channel.snippet.title}</h4> */}
            <div style={{display: 'flex', alignItems: 'center'}}>
                <ChannelImage imgSrc={`url("${getVideoSrc(channel)}")`} />
                <div style={{ display:'inline', marginLeft: '10px' }}>
                    <h5>{getTitle(channel)}</h5>
                </div>
            </div>
        </FatherChannelCard>
        </>
    );
};

export default ChannelCard;