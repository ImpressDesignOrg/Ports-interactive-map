import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';

import { useTrackedState } from '../../store';

// ##### IMPORT ALL INDIVIDUAL LAYERS
import airportsLayer from '../../data/layers/KeyFreightRoutes/airports';
import seaportsLayer from '../../data/layers/KeyFreightRoutes/seaports';
import keyRoadsLayer from '../../data/layers/KeyFreightRoutes/keyRoads';
import suburbLayer from '../../data/layers/NSWAdminBoundaries/suburb';
import localGovLayer from '../../data/layers/NSWAdminBoundaries/localGov';
import stateGovLayer from '../../data/layers/NSWAdminBoundaries/stateGov';
import federalGovLayer from '../../data/layers/NSWAdminBoundaries/federalGov';
import PB_labelsLayer from '../../data/layers/AssetMgt/PB_labels';
import PK_labelsLayer from '../../data/layers/AssetMgt/PK_labels';
import intermodalTerminalsLayer from '../../data/layers/KeyFreightRoutes/intermodalTerminals';
import roadTrainAssemblyLayer from '../../data/layers/KeyFreightRoutes/roadTrainAssembly';
import secondaryRoadsLayer from '../../data/layers/KeyFreightRoutes/secondaryRoads';
import keyRailsLayer from '../../data/layers/KeyFreightRoutes/keyRails';
import PB_berthLayer from '../../data/layers/Property/PB_berths';
import PB_gatesLayer from '../../data/layers/Property/PB_gates';
import PK_berthsLayer from '../../data/layers/Property/PK_berths';
import leaseBoundariesLayer from '../../data/layers/Property/leaseBoundaries';
import tenancyLeaseAreasLayer from '../../data/layers/Property/tenancyLeaseAreas';
import tenancyUnitsLayer from '../../data/layers/Property/tenancyUnits';
import breakwaterRevetmentsLayer from '../../data/layers/AssetMgt/breakwaterRevetments';
import buildingsLayer from '../../data/layers/AssetMgt/buildings';
import heritageLayer from '../../data/layers/AssetMgt/heritage';
import maritimeStructuresLayer from '../../data/layers/AssetMgt/maritimeStructures';
import railNetworkLayer from '../../data/layers/AssetMgt/railNetwork';
import PK_linesLayer from '../../data/layers/AssetMgt/PK_lines';
import PB_linesLayer from '../../data/layers/AssetMgt/PB_lines';
import roadNetworkLayer from '../../data/layers/AssetMgt/roadNetwork';

import { viewports } from '../../data/viewports';

export default function Map() {
  const mapRef = useRef();
  const state = useTrackedState();

  const {
    pbBerths,
    pkBerths,
    pbGates,
    tenancyLeaseAreas,
    tenancyUnits,
    leaseBoundaries,
    breakwaterRevetments,
    buildings,
    heritage,
    maritimeStructures,
    railNetwork,
    roadNetwork,
    pbLabels,
    pbLines,
    pkLabels,
    pkLines,
  } = state;

  console.log('state :>> ', state);

  useEffect(() => {
    // lazy load the required ArcGIS API
    loadModules(
      [
        'esri/config',
        'esri/Map',
        'esri/views/MapView',
        'esri/layers/FeatureLayer',
        'esri/layers/GeoJSONLayer',
      ],
      { css: true }
    ).then(([esriConfig, ArcGISMap, MapView, FeatureLayer, GeoJSONLayer]) => {
      const map = new ArcGISMap({
        basemap: 'hybrid',
      });

      // load the map view at the ref's DOM node
      const view = new MapView({
        container: mapRef.current,
        map,
        center: viewports[state.viewing].center,
        zoom: viewports[state.viewing].zoom,
      });

      view.popup.collapseEnabled = false;

      // TODO write function to bring it in and add layers dynamically (to do so, need to seperate FeatureLayer and GeoJSONLayer layers)
      // ###### BRING IN THE ACTIVE LAYERS #####
      // Key Freight Routes
      // TODO manually extract the data Key Freight Route Data
      if (state.airports) map.add(new FeatureLayer(airportsLayer));
      if (state.seaports) map.add(new FeatureLayer(seaportsLayer));
      if (state.intermodalTerminals)
        map.add(new FeatureLayer(intermodalTerminalsLayer));
      if (state.roadTrainAssembly)
        map.add(new FeatureLayer(roadTrainAssemblyLayer));
      if (state.keyRoads) map.add(new FeatureLayer(keyRoadsLayer));
      if (state.secondaryRoads) map.add(new FeatureLayer(secondaryRoadsLayer));
      if (state.keyRails) map.add(new FeatureLayer(keyRailsLayer));

      // NSW Administrative Boundaries Layers
      if (state.suburbs) map.add(new FeatureLayer(suburbLayer));
      if (state.localGov) map.add(new FeatureLayer(localGovLayer));
      if (state.stateGov) map.add(new FeatureLayer(stateGovLayer));
      if (state.federalGov) map.add(new FeatureLayer(federalGovLayer));

      // Property Layers
      if (pbBerths) map.add(new GeoJSONLayer(PB_berthLayer));
      if (pbGates) map.add(new GeoJSONLayer(PB_gatesLayer));
      if (pkBerths) map.add(new GeoJSONLayer(PK_berthsLayer));
      if (leaseBoundaries) map.add(new GeoJSONLayer(leaseBoundariesLayer));
      if (tenancyLeaseAreas) map.add(new GeoJSONLayer(tenancyLeaseAreasLayer));
      if (tenancyUnits) map.add(new GeoJSONLayer(tenancyUnitsLayer));

      // Asset Management
      if (breakwaterRevetments)
        map.add(new GeoJSONLayer(breakwaterRevetmentsLayer));
      if (buildings) map.add(new GeoJSONLayer(buildingsLayer));
      if (heritage) map.add(new GeoJSONLayer(heritageLayer));
      if (maritimeStructures)
        map.add(new GeoJSONLayer(maritimeStructuresLayer));
      if (railNetwork) map.add(new GeoJSONLayer(railNetworkLayer));
      if (roadNetwork) map.add(new GeoJSONLayer(roadNetworkLayer));
      if (pbLabels) map.add(new GeoJSONLayer(PB_labelsLayer));
      if (pbLines) map.add(new GeoJSONLayer(PB_linesLayer));
      if (pkLabels) map.add(new GeoJSONLayer(PK_labelsLayer));
      if (pkLines) map.add(new GeoJSONLayer(PK_linesLayer));

      return () => {
        // destroy the map view
        if (view) view.container = null;
      };
    });
  });

  return <div className='map-wrapper' ref={mapRef}></div>;
}
