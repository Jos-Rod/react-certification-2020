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

  const gotItemsFromSearch = {};
  const [valSearch, setValSearch] = useState("");
  const videoResults = useYTubeRequest(valSearch);

  return (
    <BrowserRouter>
      <AuthProvider>
        <NavBar handleValSearch={setValSearch} />
        <Layout>
          <Switch>
            <Route exact path="/">
              <HomePage videoResults={videoResults} />
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
