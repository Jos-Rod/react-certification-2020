import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './global.css';
import SiteInfoProvider from './providers/SiteInfoProvider/SiteInfo.provider';

ReactDOM.render(
  <React.StrictMode>
    <SiteInfoProvider>
      <App />
    </SiteInfoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
