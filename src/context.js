import React, { createContext, useState } from 'react';

import { handleSiderLevelOnUrl, handleViewportOnUrl } from './utils/viewport-url';

const Context = createContext();

export default Context;

export const clearActive = {
  nswPortsSeaports: false,
  nswPortsIntermodalTerminals: false,
  leaseBoundaries: false,
  tenancyLeaseAreas: false,
  nswPortsLeaseArea: false,
  pbBerths: false,
  pkBerths: false,
  buildings: false,
  heritage: false,
  railNetwork: false,
  roadNetwork: false,
  seaports: false,
  intermodalTerminals: false,
  keyRail: false,
  keyRoads: false,
  secondaryRoads: false,
  carparks: false,
};

export const Provider = ({ children }) => {
  const [data, setData] = useState({
    ...clearActive,
    nswPortsSeaports: true,
    nswPortsIntermodalTerminals: true,
    nswPortsLeaseArea: true,
    basemap: 'gray',
    viewing: handleViewportOnUrl(),
    siderLevel: handleSiderLevelOnUrl(),
  });

  return <Context.Provider value={[data, setData]}>{children}</Context.Provider>;
};
