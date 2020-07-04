import React, { Component } from 'react';

const MapContext = React.createContext(true);

class MapProvider extends Component {
  state = {
    viewing: 'ALL',
    active: {},
    siderLevel: 1,
  };

  setViewing = (viewing) => {
    this.setState((prevState) => ({ viewing }));
  };

  setActive = (active) => {
    this.setState((prevState) => ({ active }));
  };

  setSiderLevel = (siderLevel) => {
    this.setState((prevState) => ({ siderLevel }));
  };

  render() {
    const { children } = this.props;
    const { viewing, active, siderLevel } = this.state;
    const { setViewing, setActive, setSiderLevel } = this;

    return (
      <MapContext.Provider
        value={{
          viewing,
          active,
          siderLevel,
          setViewing,
          setActive,
          setSiderLevel,
        }}
      >
        {children}
      </MapContext.Provider>
    );
  }
}

export default MapContext;
export { MapProvider };
