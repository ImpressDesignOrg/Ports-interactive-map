import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from './store';

import Sidebar from './components/Sider';
import Map from './components/Map';

import 'antd/dist/antd.css';
import './index.css';

/* 
### Layers Hidden ###

- "Lease Boundary" - it mirrors tenancy units and tenancy lease boundaries
- "Labels" - many overlap with berths, gates... needs to 'cleaned' for relevancy
- "Parish" - is it needed?
- "County" - is it needed?
- "NPWS Reserve" - is it needed?
- "State Forest" - is it needed?
*/

// TODO research whether best to use esri-loader or webpack with Drupal (https://developers.arcgis.com/javascript/latest/guide/react/)

const App = () => (
  <Provider>
    <div className='react-interactive-map'>
      <Sidebar />
      <Map />
    </div>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
