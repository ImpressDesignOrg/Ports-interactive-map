import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import { Provider } from "./store";

import Sidebar from "./components/Sider";
import Map from "./components/Map";

import "./index.css";

// TODO research whether best to use esri-loader or webpack with Drupal (https://developers.arcgis.com/javascript/latest/guide/react/)

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

ReactDOM.render(<App />, document.getElementById("root"));
