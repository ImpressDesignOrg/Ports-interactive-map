import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { MapProvider } from './MapContext';
import Map from './components/Map';
import Sidebar from './components/Sidebar';

import 'antd/dist/antd.css';
import './index.css';

// TODO check whether best to use esri-loader or webpack with Drupal (https://developers.arcgis.com/javascript/latest/guide/react/)

const App = () => {
  return (
    <MapProvider>
      <StyledApp>
        <Sidebar />
        <Map />
      </StyledApp>
    </MapProvider>
  );
};

const StyledApp = styled.div``;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
