import React, { useEffect, useLayoutEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
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
// import mock from '../mock/youtube-videos-mock.json';

// const videoSelected = mock.items[0];
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

  const [valSearch, setValSearch] = useState("");
  const [valSearchRelated, setValSearchRelated] = useState(null);
  const {videos, channels} = useYTubeRequest(valSearch, "SEARCH_VIDEOS");
  const [currentVideo, setCurrentVideo] = useState({});
  const videosRelated = useYTubeRequest(valSearchRelated, "SEARCH_RELATED");

  useEffect(() => {
    if (Object.keys(currentVideo).length > 0) {
      setValSearchRelated(getVideoId(currentVideo));
      console.log("Current video");
      console.log(currentVideo);
    } else {
      setValSearchRelated(null);
    }
  }, [currentVideo])

  function goHome() {
    setValSearchRelated('wizeline');
    setCurrentVideo({});
    setValSearch("");
    setSelectedVideo(null);
  }

  const [currentTheme, setCurrentTheme] = useState(themes.light);

  const { valueSearched, selectedVideo, setSelectedVideo } = useSiteInfo();

  useEffect(() => {
    setValSearch(valueSearched);
  }, [valueSearched]);

  useEffect(() => {
    if (selectedVideo) {
      setCurrentVideo(selectedVideo);
    }
  }, [selectedVideo]);

  return (
    <BrowserRouter>
      <AuthProvider>
          <ThemeContext.Provider value={{currentTheme: currentTheme, updateCurrentTheme: setCurrentTheme}}>
            <NavBar handleValSearch={setValSearch} homeAction={goHome}/>
            <Layout>
              <Switch>
                <Route exact path="/">
                  {Object.keys(currentVideo).length === 0 && <HomePage videoResults={videos} channelResults={channels} />}
                  {Object.keys(currentVideo).length > 0 &&  <VideoDetailsView video={currentVideo} relatedVideos={videosRelated.videos} /> }
                  {/* <HomePage videoResults={allVideos} channelResults={[]} setVideoSelected={setCurrentVideo} /> */}
                </Route>
                <Route exact path="/login">
                  <LoginPage />
                </Route>
                <Private exact path="/secret">
                  <SecretPage />
                </Private>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
              <Fortune />
            </Layout>
          </ThemeContext.Provider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
