import { useState } from "react";
import { createContainer } from "react-tracked";

export const deactiveLayers = {
  leaseBoundaries: false,
  tenancyLeaseAreas: false,
  tenancyUnits: false,
  pbBerths: false,
  pbGates: false,
  pkBerths: false,
  buildings: false,
  heritage: false,
  railNetwork: false,
  roadNetwork: false,
  pbLabels: false,
  pkLabels: false,
  localGov: false,
  seaports: false,
  intermodalTerminals: false,
  keyRoads: false,
  secondaryRoads: false,
  keyRail: false,
};

const useValue = () => useState({ viewing: "ALL", siderLevel: 1, ...deactiveLayers });

export const { Provider, useTrackedState, useUpdate: useSetState } = createContainer(useValue);
