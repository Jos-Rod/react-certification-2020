import React from 'react';
import ChannelCard from '../ChannelCard';
import './ChannelCardList.styles.css';

const ChannelCardList = ({ channelList, itemsAlignTo }) => {

    return (
        <>
            <div style={{ display:'flex', width: '100%', justifyContent: itemsAlignTo }}>
                {channelList.map(ch => <ChannelCard channel={ch} />)}
            </div>
        </>
    );
};

export default ChannelCardList;