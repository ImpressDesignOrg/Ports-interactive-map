import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from './store';

import Sidebar from './components/Sider';
import Map from './components/Map';

import 'antd/dist/antd.css';
import './index.css';

// TODO check whether best to use esri-loader or webpack with Drupal (https://developers.arcgis.com/javascript/latest/guide/react/)

const App = () => (
  <Provider>
    <div className='react-interactive-map-content'>
      <Sidebar />
      <Map />
    </div>
  </Provider>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
