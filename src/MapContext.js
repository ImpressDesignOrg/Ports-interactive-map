import React, { Component } from 'react';

const MapContext = React.createContext(true);

class MapProvider extends Component {
  state = {
    center: [150.9729, -34.2457],
    zoom: 10,
    active: {},
  };

  setZoom = (zoom) => {
    this.setState((prevState) => ({ zoom }));
  };

  setCenter = (center) => {
    console.log('center :>> ', center);

    this.setState((prevState) => ({ center }));
  };

  setActive = (active) => {
    this.setState((prevState) => ({ active }));
  };

  render() {
    const { children } = this.props;
    const { center, zoom, active } = this.state;
    const { setCenter, setZoom, setActive } = this;

    return (
      <MapContext.Provider value={{ center, zoom, active, setCenter, setZoom, setActive }}>
        {children}
      </MapContext.Provider>
    );
  }
}

export default MapContext;
export { MapProvider };
