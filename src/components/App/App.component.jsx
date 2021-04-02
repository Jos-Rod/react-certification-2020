import React, { useEffect, useLayoutEffect, useReducer, useState } from 'react';
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
import mock from '../mock/youtube-videos-mock.json';

const videoSelected = mock.items[0];

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

  const gotItemsFromSearch = {};
  const [valSearch, setValSearch] = useState("");
  const [valSearchRelated, setValSearchRelated] = useState(null);
  const {videos, channels} = useYTubeRequest(valSearch, "SEARCH_VIDEOS");
  const [currentVideo, setCurrentVideo] = useState({});
  const {videosRelated, channelsRelated} = useYTubeRequest(valSearchRelated, "SEARCH_RELATED");

  useEffect(() => {
    if (Object.keys(currentVideo).length > 0) {
      setValSearchRelated(getVideoId(currentVideo));
    } else {
      setValSearchRelated(null);
    }
  }, [currentVideo])

  return (
    <BrowserRouter>
      <AuthProvider>
        <NavBar handleValSearch={setValSearch} />
        <Layout>
          <Switch>
            <Route exact path="/">
              {/* {Object.keys(currentVideo).length == 0 && <HomePage videoResults={videos} channelResults={channels} setVideoSelected={setCurrentVideo} />}
              {Object.keys(currentVideo).length > 0 && <VideoDetailsView video={currentVideo} /> } */}
              <VideoDetailsView video={videoSelected} />
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
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
