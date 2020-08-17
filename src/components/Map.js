import React, { useEffect, useRef, useContext } from 'react';
import { loadModules } from 'esri-loader';

import Context from '../context';

// ##### IMPORT ALL INDIVIDUAL LAYER SETTINGS
import { botanyLayer, kemblaLayer, cooksLayer, enfieldLayer } from '../data/PortsData/allLocations';
import seaportsLayer from '../data/PublicData/seaports';
import keyRoadsLayer from '../data/PublicData/keyRoads';
import { keyRailLayer } from '../data/PublicData/keyRail';
import intermodalTerminalsLayer from '../data/PublicData/intermodalTerminals';
import secondaryRoadsLayer from '../data/PublicData/secondaryRoads';
import PB_berthLayer from '../data/PortsData/PB_berths';
import PK_berthsLayer from '../data/PortsData/PK_berths';
import tenancyLeaseAreasLayer from '../data/PortsData/tenancyLeaseAreas';
import tenancyUnitsLayer from '../data/PortsData/tenancyUnits';
import buildingsLayer from '../data/PortsData/buildings';
import railNetworkLayer from '../data/PortsData/railNetwork';
import roadNetworkLayer from '../data/PortsData/roadNetwork';
import { carparksLayer } from '../data/PortsData/carparks';

import { viewports } from '../data/viewports';

export default function Map() {
  const mapRef = useRef();
  const [data, setData] = useContext(Context);

  useEffect(() => {
    // lazy load the required ArcGIS API
    loadModules(
      ['esri/config', 'esri/Map', 'esri/views/MapView', 'esri/layers/GeoJSONLayer', 'esri/widgets/BasemapToggle'],
      { css: true }
    ).then(([esriConfig, ArcGISMap, MapView, GeoJSONLayer, BasemapToggle]) => {
      const map = new ArcGISMap({
        basemap: data.basemap,
      });

      // load the map view at the ref's DOM node
      const view = new MapView({
        container: mapRef.current,
        map,
        center: viewports[data.viewing].center,
        zoom: viewports[data.viewing].zoom,
        popup: {
          collapseEnabled: false,
          dockEnabled: false,
          defaultPopupTemplateEnabled: false,
        },
        highlightOptions: {
          color: [0, 38, 80, 1],
          haloOpacity: 0.9,
          fillOpacity: 0.2,
        },
        navigation: {
          mouseWheelZoomEnabled: false,
        },
      });

      const basemapToggle = new BasemapToggle({
        view,
        nextBasemap: data.basemap === 'gray' ? 'satellite' : 'gray',
      });

      // add event listener to map toggle to update state
      basemapToggle.on('toggle', () => {
        setData((prev) => ({
          ...prev,
          basemap: data.basemap === 'gray' ? 'satellite' : 'gray',
        }));
      });

      view.ui.add(basemapToggle, {
        position: 'top-left',
      });

      // ! Layers are added in the appropriate order: polygons, lines, points
      // Points
      if (data.viewing === 'ALL') {
        if (data.nswPortsSeaports) {
          map.add(new GeoJSONLayer(botanyLayer), 0);
          map.add(new GeoJSONLayer(kemblaLayer), 0);
        }
        if (data.nswPortsIntermodalTerminals) {
          map.add(new GeoJSONLayer(cooksLayer), 0);
          map.add(new GeoJSONLayer(enfieldLayer), 0);
        }
      }
      if (data.pbBerths) map.add(new GeoJSONLayer(PB_berthLayer), 0);
      if (data.pkBerths) map.add(new GeoJSONLayer(PK_berthsLayer), 0);
      if (data.buildings) map.add(new GeoJSONLayer(buildingsLayer), 0);
      if (data.carparks) map.add(new GeoJSONLayer(carparksLayer), 0);
      if (data.seaports) map.add(new GeoJSONLayer(seaportsLayer), 0);
      if (data.intermodalTerminals) map.add(new GeoJSONLayer(intermodalTerminalsLayer), 0);

      // Lines
      if (data.railNetwork) map.add(new GeoJSONLayer(railNetworkLayer), 0);
      if (data.roadNetwork) map.add(new GeoJSONLayer(roadNetworkLayer), 0);
      if (data.keyRail) map.add(new GeoJSONLayer(keyRailLayer), 0);
      if (data.keyRoads) map.add(new GeoJSONLayer(keyRoadsLayer), 0);
      if (data.secondaryRoads) map.add(new GeoJSONLayer(secondaryRoadsLayer), 0);

      // Polygons
      if (data.tenancyLeaseAreas) map.add(new GeoJSONLayer(tenancyLeaseAreasLayer), 0);
      if (data.nswPortsLeaseArea) map.add(new GeoJSONLayer(tenancyUnitsLayer), 0);

      // destroy the map view
      return () => {
        if (view) view.container = null;
      };
    });
  });

  return <div className='map-wrapper' ref={mapRef}></div>;
}
