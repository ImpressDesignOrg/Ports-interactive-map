import React, { Component } from 'react';

const MapContext = React.createContext(true);

class MapProvider extends Component {
  state = {
    user: { name: 'Tom' },
    center: [150.9729, -34.2457],
    zoom: 10,
    activeLayers: {},
  };

  setUser = (user) => {
    this.setState((prevState) => ({ user }));
  };

  setZoom = (zoom) => {
    this.setState((prevState) => ({ zoom }));
  };

  setCenter = (center) => {
    this.setState((prevState) => ({ center }));
  };

  setActiveLayers = (activeLayers) => {
    this.setState((prevState) => ({ activeLayers }));
  };

  render() {
    const { children } = this.props;
    const { user, center, zoom, activeLayers } = this.state;
    const { setUser, setCenter, setZoom, setActiveLayers } = this;

    return (
      <MapContext.Provider value={{ center, user, zoom, activeLayers, setUser, setCenter, setZoom, setActiveLayers }}>
        {children}
      </MapContext.Provider>
    );
  }
}

export default MapContext;
export { MapProvider };
