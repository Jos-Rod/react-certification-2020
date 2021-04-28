import React from 'react';
import ChannelCard from '../ChannelCard';
import {getChannelId} from '../../utils/utils.js';

const ChannelCardList = ({ channelList, itemsAlignTo }) => {

    return (
        <>
            <div style={{ display:'flex', width: '100%', justifyContent: itemsAlignTo }}>
                {channelList.map(ch => <ChannelCard channel={ch} key={getChannelId(ch)} />)}
            </div>
        </>
    );
};

export default ChannelCardList;