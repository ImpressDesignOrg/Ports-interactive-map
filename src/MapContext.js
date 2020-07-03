import React, { Component } from 'react';

import { viewports } from './data/viewports';

const MapContext = React.createContext(true);

class MapProvider extends Component {
  state = {
    center: viewports.allLocations.center,
    zoom: viewports.allLocations.zoom,
    active: {},
    siderLevel: 1,
  };

  setZoom = (zoom) => {
    this.setState((prevState) => ({ zoom }));
  };

  setCenter = (center) => {
    this.setState((prevState) => ({ center }));
  };

  setActive = (active) => {
    this.setState((prevState) => ({ active }));
  };

  setSiderLevel = (siderLevel) => {
    this.setState((prevState) => ({ siderLevel }));
  };

  render() {
    const { children } = this.props;
    const { center, zoom, active, siderLevel } = this.state;
    const { setCenter, setZoom, setActive, setSiderLevel } = this;

    return (
      <MapContext.Provider value={{ center, zoom, active, siderLevel, setCenter, setZoom, setActive, setSiderLevel }}>
        {children}
      </MapContext.Provider>
    );
  }
}

export default MapContext;
export { MapProvider };
