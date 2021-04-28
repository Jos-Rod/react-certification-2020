import React from 'react';
import VideoCardList from '../../components/VideoCardList';
import { useSiteInfo } from '../../providers/SiteInfoProvider/SiteInfo.provider';

const Favourites = () => {
  const { favouriteVideos } = useSiteInfo();

  return (
    <>
      <div style={{ marginTop: '60px', padding: '20px' }}>
        <h2>Favourite videos</h2>
        <VideoCardList videoList={favouriteVideos} cardStyle="horizontal" isFromFav />
      </div>
    </>
  );
};

export default Favourites;
