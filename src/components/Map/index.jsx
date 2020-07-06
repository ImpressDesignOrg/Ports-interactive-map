import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';

import { useTrackedState } from '../../store';

// ##### IMPORT ALL INDIVIDUAL LAYERS
import allLocationsLayer from '../../data/layers/allLocations';
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
        'esri/widgets/BasemapToggle',
        'esri/widgets/BasemapGallery',
      ],
      { css: true }
    ).then(([esriConfig, ArcGISMap, MapView, FeatureLayer, GeoJSONLayer, BasemapToggle, BasemapGallery]) => {
      const map = new ArcGISMap({
        basemap: 'satellite',
        ground: 'world-elevation',
      });

      // load the map view at the ref's DOM node
      const view = new MapView({
        container: mapRef.current,
        map,
        center: viewports[state.viewing].center,
        zoom: viewports[state.viewing].zoom,
      });

      view.popup.collapseEnabled = false;

      const basemapGallery = new BasemapGallery({
        view: view,
        container: document.createElement('div'),
      });

      // Add the widget to the top-right corner of the view
      view.ui.add(basemapGallery, {
        position: 'top-left',
      });

      if (state.viewing === 'ALL' || state.viewing === 'AUS') {
        map.add(new GeoJSONLayer(allLocationsLayer));
      }

      // ###### BRING IN THE ACTIVE LAYERS #####
      // TODO write function to bring it in and add layers dynamically (to do so, need to seperate FeatureLayer and GeoJSONLayer layers)
      // Key Freight Routes
      // TODO manually extract the data Key Freight Route Data
      if (state.airports) map.add(new FeatureLayer(airportsLayer));
      if (state.seaports) map.add(new FeatureLayer(seaportsLayer));
      if (state.intermodalTerminals) map.add(new FeatureLayer(intermodalTerminalsLayer));
      if (state.roadTrainAssembly) map.add(new FeatureLayer(roadTrainAssemblyLayer));
      if (state.keyRoads) map.add(new FeatureLayer(keyRoadsLayer));
      if (state.secondaryRoads) map.add(new FeatureLayer(secondaryRoadsLayer));
      if (state.keyRails) map.add(new FeatureLayer(keyRailsLayer));

      // NSW Administrative Boundaries Layers
      if (state.suburbs) map.add(new FeatureLayer(suburbLayer));
      if (state.localGov) map.add(new FeatureLayer(localGovLayer));
      if (state.stateGov) map.add(new FeatureLayer(stateGovLayer));
      if (state.federalGov) map.add(new FeatureLayer(federalGovLayer));

      // Property Layers
      if (state.pbBerths) map.add(new GeoJSONLayer(PB_berthLayer));
      if (state.pbGates) map.add(new GeoJSONLayer(PB_gatesLayer));
      if (state.pkBerths) map.add(new GeoJSONLayer(PK_berthsLayer));
      if (state.leaseBoundaries) map.add(new GeoJSONLayer(leaseBoundariesLayer));
      if (state.tenancyLeaseAreas) map.add(new GeoJSONLayer(tenancyLeaseAreasLayer));
      if (state.tenancyUnits) map.add(new GeoJSONLayer(tenancyUnitsLayer));

      // Asset Management
      if (state.breakwaterRevetments) map.add(new GeoJSONLayer(breakwaterRevetmentsLayer));
      if (state.buildings) map.add(new GeoJSONLayer(buildingsLayer));
      if (state.heritage) map.add(new GeoJSONLayer(heritageLayer));
      if (state.maritimeStructures) map.add(new GeoJSONLayer(maritimeStructuresLayer));
      if (state.railNetwork) map.add(new GeoJSONLayer(railNetworkLayer));
      if (state.roadNetwork) map.add(new GeoJSONLayer(roadNetworkLayer));
      if (state.pbLabels) map.add(new GeoJSONLayer(PB_labelsLayer));
      if (state.pbLines) map.add(new GeoJSONLayer(PB_linesLayer));
      if (state.pkLabels) map.add(new GeoJSONLayer(PK_labelsLayer));
      if (state.pkLines) map.add(new GeoJSONLayer(PK_linesLayer));

      // destroy the map view
      return () => {
        if (view) view.container = null;
      };
    });
  });

  return <div className='map-wrapper' ref={mapRef}></div>;
}
