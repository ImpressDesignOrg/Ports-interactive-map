import React, { useEffect, useRef, useContext } from 'react';
import { loadModules } from 'esri-loader';

import MapContext from '../MapContext';

// ##### IMPORT ALL INDIVIDUAL LAYERS
import allLocationsLayer from '../data/layers/allLocations';

import airportsLayer from '../data/layers/KeyFreightRoutes/airports';
import seaportsLayer from '../data/layers/KeyFreightRoutes/seaports';
import keyRoadsLayer from '../data/layers/KeyFreightRoutes/keyRoads';
import suburbLayer from '../data/layers/NSWAdminBoundaries/suburb';
import localGovLayer from '../data/layers/NSWAdminBoundaries/localGov';
import stateGovLayer from '../data/layers/NSWAdminBoundaries/stateGov';
import federalGovLayer from '../data/layers/NSWAdminBoundaries/federalGov';
import parishLayer from '../data/layers/NSWAdminBoundaries/parish';
import countyLayer from '../data/layers/NSWAdminBoundaries/county';
import stateForestLayer from '../data/layers/NSWAdminBoundaries/stateForest';
import npwsReserveLayer from '../data/layers/NSWAdminBoundaries/npwsReserve';
import PB_labelsLayer from '../data/layers/AssetMgt/PB_labels';
import PK_labelsLayer from '../data/layers/AssetMgt/PK_labels';
import intermodalTerminalsLayer from '../data/layers/KeyFreightRoutes/intermodalTerminals';
import roadTrainAssemblyLayer from '../data/layers/KeyFreightRoutes/roadTrainAssembly';
import secondaryRoadsLayer from '../data/layers/KeyFreightRoutes/secondaryRoads';
import keyRailsLayer from '../data/layers/KeyFreightRoutes/keyRails';
import PB_berthLayer from '../data/layers/Property/PB_berths';
import PB_gatesLayer from '../data/layers/Property/PB_gates';
import PK_berthsLayer from '../data/layers/Property/PK_berths';
import leaseBoundariesLayer from '../data/layers/Property/leaseBoundaries';
import tenancyLeaseAreasLayer from '../data/layers/Property/tenancyLeaseAreas';
import tenancyUnitsLayer from '../data/layers/Property/tenancyUnits';
import breakwaterRevetmentsLayer from '../data/layers/AssetMgt/breakwaterRevetments';
import buildingsLayer from '../data/layers/AssetMgt/buildings';
import heritageLayer from '../data/layers/AssetMgt/heritage';
import maritimeStructuresLayer from '../data/layers/AssetMgt/maritimeStructures';
import railNetworkLayer from '../data/layers/AssetMgt/railNetwork';
import PK_linesLayer from '../data/layers/AssetMgt/PK_lines';
import PB_linesLayer from '../data/layers/AssetMgt/PB_lines';
import roadNetworkLayer from '../data/layers/AssetMgt/roadNetwork';

let running = false;

export default function Map() {
  const mapRef = useRef();

  const { active, center, zoom, setCenter, setZoom } = useContext(MapContext);

  const handleViewport = (newCenter, newZoom) => {
    if (running === true) {
      console.log('Its still running');
    } else {
      // const { latitude, longitude, x, y, z } = newCenter;

      const oldZoom = zoom;

      // BUG app was crashing if zoom went to -1
      if (newZoom <= 0) newZoom = 6;
      // cap the zoom at zoom
      if (newZoom >= 16) newZoom = 16;

      const oldLong = center[0];
      const oldLat = center[1];
      const newLong = newCenter.longitude;
      const newLat = newCenter.latitude;

      const zoomChanged = Math.abs(newZoom - oldZoom) > 1;
      const latChanged = Math.abs(newLat - oldLat) > 1;
      const longChanged = Math.abs(newLong - oldLong) > 1;

      // WHEN DO WE WANT TO UPDATE?
      // - when ANY of the zoom, lat or long has changed significantly, update ALL.
      if (zoomChanged || latChanged || longChanged) {
        console.log(`Zoom updating! oldZoom: ${oldZoom}... newZoom: ${newZoom}`);
        console.log(`Lat updating! oldZoom: ${oldLat}... newZoom: ${newLat}`);
        console.log(`Long updating! oldZoom: ${oldLong}... newZoom: ${newLong}`);

        running = true;

        setZoom(newZoom);
        setCenter([newLong, newLat]);

        // set to running to false after x seconds
        setTimeout(() => {
          console.log('timeout finished');
          running = false;
        }, 2500);
      }
    }
  };

  const {
    airports,
    seaports,
    intermodalTerminals,
    roadTrainAssembly,
    keyRoads,
    keyRails,
    secondaryRoads,
    suburbs,
    county,
    parish,
    localGov,
    stateGov,
    federalGov,
    npwsReserve,
    stateForest,
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
  } = active;

  useEffect(() => {
    // lazy load the required ArcGIS API
    loadModules(
      [
        'esri/config',
        'esri/core/watchUtils',
        'esri/Map',
        'esri/views/MapView',
        'esri/layers/FeatureLayer',
        'esri/layers/GeoJSONLayer',
        'esri/widgets/BasemapToggle',
      ],
      { css: true }
    ).then(([esriConfig, watchUtils, ArcGISMap, MapView, FeatureLayer, GeoJSONLayer, BasemapToggle]) => {
      const map = new ArcGISMap({
        basemap: 'hybrid',
      });

      // load the map view at the ref's DOM node
      const view = new MapView({
        container: mapRef.current,
        map,
        center,
        zoom,
      });

      // add map toggle
      view.ui.add(
        new BasemapToggle({
          view,
          nextBasemap: 'topo-vector',
        }),
        'bottom-left'
      );

      view.popup.on('trigger-action', (e) => {
        console.log('e :>> ', e);

        // TODO zoom in closer to marker
      });

      // only run when the view isn't moving
      watchUtils.whenTrue(view, 'stationary', () => {
        setTimeout(() => {
          const { center, zoom } = view;

          handleViewport(center, zoom);
        }, 1250);
      });

      // add the entire location markers if the map is zoomed out
      if (zoom < 12) {
        map.add(new GeoJSONLayer(allLocationsLayer));
      }

      // ###### BRING IN THE ACTIVE LAYERS #####
      // Key Freight Routes
      // TODO manually extract the data
      if (airports) map.add(new GeoJSONLayer(airportsLayer));
      if (seaports) map.add(new GeoJSONLayer(seaportsLayer));
      if (intermodalTerminals) map.add(new FeatureLayer(intermodalTerminalsLayer));
      if (roadTrainAssembly) map.add(new FeatureLayer(roadTrainAssemblyLayer));
      if (keyRoads) map.add(new FeatureLayer(keyRoadsLayer));
      if (secondaryRoads) map.add(new FeatureLayer(secondaryRoadsLayer));
      if (keyRails) map.add(new FeatureLayer(keyRailsLayer));

      // NSW Administrative Boundaries Layers
      if (suburbs) map.add(new FeatureLayer(suburbLayer));
      if (county) map.add(new FeatureLayer(countyLayer));
      if (parish) map.add(new FeatureLayer(parishLayer));
      if (stateForest) map.add(new FeatureLayer(stateForestLayer));
      if (npwsReserve) map.add(new FeatureLayer(npwsReserveLayer));
      if (localGov) map.add(new FeatureLayer(localGovLayer));
      if (stateGov) map.add(new FeatureLayer(stateGovLayer));
      if (federalGov) map.add(new FeatureLayer(federalGovLayer));

      // Property Layers
      if (pbBerths) map.add(new GeoJSONLayer(PB_berthLayer));
      if (pbGates) map.add(new GeoJSONLayer(PB_gatesLayer));
      if (pkBerths) map.add(new GeoJSONLayer(PK_berthsLayer));
      if (leaseBoundaries) map.add(new GeoJSONLayer(leaseBoundariesLayer));
      if (tenancyLeaseAreas) map.add(new GeoJSONLayer(tenancyLeaseAreasLayer));
      if (tenancyUnits) map.add(new GeoJSONLayer(tenancyUnitsLayer));

      // Asset Management
      if (breakwaterRevetments) map.add(new GeoJSONLayer(breakwaterRevetmentsLayer));
      if (buildings) map.add(new GeoJSONLayer(buildingsLayer));
      if (heritage) map.add(new GeoJSONLayer(heritageLayer));
      if (maritimeStructures) map.add(new GeoJSONLayer(maritimeStructuresLayer));
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
