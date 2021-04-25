import React, { useEffect, useLayoutEffect, useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import { IconContext } from 'react-icons';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Fortune from '../Fortune';
import Layout from '../Layout';
import { random } from '../../utils/fns';
import NavBar from '../NavBar';
import useYTubeRequest from '../../utils/hooks/useYTbe.js';
import VideoDetailsView from '../VideoDetailsView/VideoDetailsView.component';
import { getVideoId } from '../../utils/utils';
import ThemeContext, { themes } from '../../providers/Theme/Theme.provider';
import { useSiteInfo } from '../../providers/SiteInfoProvider/SiteInfo.provider';
import './App.styles.css';
import SideBar from '../SideBar/SideBar.component';
import Favourites from '../../pages/Favourites/Favourites.page';
// import mock from '../mock/youtube-videos-mock.json';

// const videoSelectedMock = mock.items[1];
// const allVideos = mock.items;

function App() {
  useLayoutEffect(() => {
    const { body } = document;

    function rotateBackground() {
      const xPercent = random(100);
      const yPercent = random(100);
      body.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
    }

    const intervalId = setInterval(rotateBackground, 3000);
    body.addEventListener('click', rotateBackground);

    return () => {
      clearInterval(intervalId);
      body.removeEventListener('click', rotateBackground);
    };
  }, []);

  useEffect(() => {
    var tag = document.createElement('script');
    tag.id = 'iframe-demo';
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  })

  const { valueSearched, selectedVideo, setSelectedVideo, setSearchedValue } = useSiteInfo();

  const [valSearch, setValSearch] = useState("");
  // const {videos, channels} = useYTubeRequest(valSearch, "SEARCH_VIDEOS");

  function goHome() {
    setValSearch("");
    setSelectedVideo({});
    setSearchedValue("");
  }

  const [currentTheme, setCurrentTheme] = useState(themes.light);

  useEffect(() => {
    setValSearch(valueSearched);
  }, [valueSearched]);

  return (
    <HashRouter>
      <AuthProvider>
          <ThemeContext.Provider value={{currentTheme: currentTheme, updateCurrentTheme: setCurrentTheme}}>
            <IconContext.Provider
              value={{ style: { fontSize: '36px', color: 'rgb(255, 255, 224)' } }}
            >
              <NavBar homeAction={goHome}/>
              <SideBar />
              <Layout>
                <Switch>
                  <Route exact path="/">
                    {/* {Object.keys(selectedVideo).length === 0 && <HomePage videoResults={videos} channelResults={channels} />} */}
                    {/* {Object.keys(selectedVideo).length > 0 &&  <VideoDetailsView /> } */}
                    {/* <HomePage videoResults={allVideos} channelResults={[]} setVideoSelected={setCurrentVideo} /> */}
                    <Favourites />
                  </Route>
                  <Route exact path="/login">
                    <LoginPage />
                  </Route>
                  <Private exact path="/secret">
                    <SecretPage />
                  </Private>
                  <Private path="/favourites">
                    <Favourites />
                  </Private>
                  <Route path="*">
                    <NotFound />
                  </Route>
                </Switch>
                <Fortune />
              </Layout>
            </IconContext.Provider>
          </ThemeContext.Provider>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
