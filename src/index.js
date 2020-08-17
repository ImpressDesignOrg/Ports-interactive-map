import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { Provider } from './context';

import Sidebar from './components/Sider';
import Map from './components/Map';

import './index.css';

const App = () => (
  <Provider>
    <StyledWrapper>
      <Sidebar />
      <Map />
    </StyledWrapper>
  </Provider>
);

const StyledWrapper = styled.div`
  position: relative;
`;

window.onload = () => {
  ReactDOM.render(<App />, document.getElementById('react-interactive-map'));
};
