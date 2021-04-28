import React from 'react';
import { WrapperChannels, WrapperVideos } from './Home.stying';
import VideoCardList from '../../components/VideoCardList';
import ChannelCardList from '../../components/ChannelCardList';

function HomePage({ videoResults, channelResults, setVideoSelected }) {
  const cardListWidth = channelResults.length > 0 ? '70%' : '100%';
  //  cardListWidth
  return (
    <div style={{ marginTop: 100 }}>
      <section>
        <div style={{ display: 'flex' }}>
          <WrapperVideos cardListWidth={cardListWidth}>
            <VideoCardList videoList={videoResults} setVideoSelected={setVideoSelected} />
          </WrapperVideos>
          {channelResults.length > 0 && (
            <WrapperChannels>
              <ChannelCardList channelList={channelResults} itemsAlignTo="left" />
            </WrapperChannels>
          )}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
