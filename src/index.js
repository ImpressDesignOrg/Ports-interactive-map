import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'react-tracked';
import styled from 'styled-components';

import Sidebar from './components/Sidebar';

import 'antd/dist/antd.css';
import './index.css';

// TODO check whether best to use esri-loader or webpack with Drupal (https://developers.arcgis.com/javascript/latest/guide/react/)

const App = () => (
  <StyledApp>
    <Sidebar />
  </StyledApp>
);

const StyledApp = styled.div`
  position: relative;

  .sidebar-wrapper {
    position: absolute;
    z-index: 2;
    right: 0;

    height: 100vh;
    border: 1px solid red;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
