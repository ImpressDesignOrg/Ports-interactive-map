import React from 'react';
import ReactDOM from 'react-dom';

import Map from './components/Map';

import './index.css';

// TODO check whether best to use esri-loader or webpack with Drupal (https://developers.arcgis.com/javascript/latest/guide/react/)

const App = () => (
  <div className='react-app'>
    <Map />
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
