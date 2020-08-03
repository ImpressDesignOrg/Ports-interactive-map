import { useState } from "react";
import { createContainer } from "react-tracked";

export const clearActive = {
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

const defaultActive = {
  ...clearActive,
  nswPortsLeaseArea: true,
};

/**
 * Customise the default viewport depending on which page the user is viewing
 */
const handleViewportOnUrl = () => {
  switch (window.location.pathname) {
    case "/port-botany":
      return "PB";
    case "/port-kembla":
      return "PK";
    case "/cooks-river-intermodal-terminal":
      return "CR";
    case "/enfield-intermodal-logistics-centre":
      return "EN";
    default:
      return "ALL";
  }
};

const handleSiderLevelOnUrl = () => {
  switch (window.location.pathname) {
    case "/port-botany":
    case "/port-kembla":
    case "/cooks-river-intermodal-terminal":
    case "/enfield-intermodal-logistics-centre":
      return 2;
    default:
      return 1;
  }
};

const useValue = () =>
  useState({
    viewing: handleViewportOnUrl(),
    siderLevel: handleSiderLevelOnUrl(),
    basemap: "gray",
    ...defaultActive,
  });

export const { Provider, useTrackedState, useUpdate: useSetState } = createContainer(useValue);
