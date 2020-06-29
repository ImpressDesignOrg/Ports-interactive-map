import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { MapProvider } from './MapContext';
import Map from './components/Map';
import Sidebar from './components/Sidebar';
import Test from './components/Test';

import 'antd/dist/antd.css';
import './index.css';

// TODO check whether best to use esri-loader or webpack with Drupal (https://developers.arcgis.com/javascript/latest/guide/react/)

const App = () => {
  const user = { name: 'Tom', loggedIn: false };

  return (
    <MapProvider value={user}>
      <StyledApp>
        <Test />
        <Sidebar />
        <Map active={{}} />
      </StyledApp>
    </MapProvider>
  );
};

const StyledApp = styled.div`
  position: relative;

  .sidebar-wrapper {
    position: absolute;
    z-index: 2;
    right: 0;
    height: 100vh;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
