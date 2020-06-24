import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'react-tracked';
import styled from 'styled-components';

import Map from './components/Map';
import Sidebar from './components/Sidebar';

import 'antd/dist/antd.css';
import './index.css';

// TODO check whether best to use esri-loader or webpack with Drupal (https://developers.arcgis.com/javascript/latest/guide/react/)

// global state provider & hooks
const useValue = ({ reducer, initialState }) =>
  useReducer(reducer, initialState);

const { Provider, useTracked } = createContainer(useValue);

const initialState = {
  count: 0,
  text: 'hello',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'setText':
      return { ...state, text: action.text };
    default:
      throw new Error(`unknown action type: ${action.type}`);
  }
};

const Counter = () => {
  const [state, dispatch] = useTracked();
  return (
    <div>
      <div>
        <span>Count: {state.count}</span>
        <button type='button' onClick={() => dispatch({ type: 'increment' })}>
          +1
        </button>
        <button type='button' onClick={() => dispatch({ type: 'decrement' })}>
          -1
        </button>
      </div>
    </div>
  );
};

const TextBox = () => {
  const [state, dispatch] = useTracked();

  console.log('state', state);
  return (
    <div>
      <div>
        <span>Text: {state.text}</span>
        <input
          value={state.text}
          onChange={(event) =>
            dispatch({ type: 'setText', text: event.target.value })
          }
        />
      </div>
    </div>
  );
};

const App = () => (
  <Provider reducer={reducer} initialState={initialState}>
    <h1>Counter</h1>
    <Counter />
    <Counter />
    <h1>TextBox</h1>
    <TextBox />
    <TextBox />
  </Provider>
);

/* const App = () => (
  <StyledApp>
    <div className='sidebar-wrapper'>
      <Sidebar />
    </div>
    <div className='map-wrapper'>
      <Map />
    </div>
  </StyledApp>
); */

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
