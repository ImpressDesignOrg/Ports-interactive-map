import React, { useEffect, useRef } from "react";
import { loadModules } from "esri-loader";

import { useTrackedState, useSetState } from "../store";

// ##### IMPORT ALL INDIVIDUAL LAYER SETTINGS
import { botanyLayer, kemblaLayer, cooksLayer, enfieldLayer } from "../data/PortsData/allLocations";
import seaportsLayer from "../data/PublicData/seaports";
import keyRoadsLayer from "../data/PublicData/keyRoads";
import intermodalTerminalsLayer from "../data/PublicData/intermodalTerminals";
import secondaryRoadsLayer from "../data/PublicData/secondaryRoads";
import PB_berthLayer from "../data/PortsData/PB_berths";
import PK_berthsLayer from "../data/PortsData/PK_berths";
import tenancyLeaseAreasLayer from "../data/PortsData/tenancyLeaseAreas";
import tenancyUnitsLayer from "../data/PortsData/tenancyUnits";
import buildingsLayer from "../data/PortsData/buildings";
import railNetworkLayer from "../data/PortsData/railNetwork";
import roadNetworkLayer from "../data/PortsData/roadNetwork";
import { carparksLayer } from "../data/PortsData/carparks";

import { viewports } from "../data/viewports";

export default function Map() {
  const mapRef = useRef();
  const state = useTrackedState();
  const setState = useSetState();

  useEffect(() => {
    // lazy load the required ArcGIS API
    loadModules(
      ["esri/config", "esri/Map", "esri/views/MapView", "esri/layers/GeoJSONLayer", "esri/widgets/BasemapToggle"],
      { css: true }
    ).then(([esriConfig, ArcGISMap, MapView, GeoJSONLayer, BasemapToggle]) => {
      const map = new ArcGISMap({
        basemap: state.basemap,
      });

      // load the map view at the ref's DOM node
      const view = new MapView({
        container: mapRef.current,
        map,
        center: viewports[state.viewing].center,
        zoom: viewports[state.viewing].zoom,
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
        nextBasemap: state.basemap === "gray" ? "satellite" : "gray",
      });

      // add event listener to map toggle to update state
      // TODO check whether required after we remove layer state (and replace with visibility)
      basemapToggle.on("toggle", () => {
        setState((prev) => ({
          ...prev,
          basemap: state.basemap === "gray" ? "satellite" : "gray",
        }));
      });

      view.ui.add(basemapToggle, {
        position: "top-left",
      });

      // if they're viewing all locations, show the locations marker
      if (state.viewing === "ALL") {
        map.add(new GeoJSONLayer(botanyLayer));
        map.add(new GeoJSONLayer(kemblaLayer));
        map.add(new GeoJSONLayer(cooksLayer));
        map.add(new GeoJSONLayer(enfieldLayer));
      }

      // ! Layers are added in the appropriate order: polygons, lines, points

      // Points
      if (state.pbBerths) map.add(new GeoJSONLayer(PB_berthLayer), 0);
      if (state.pkBerths) map.add(new GeoJSONLayer(PK_berthsLayer), 0);
      if (state.buildings) map.add(new GeoJSONLayer(buildingsLayer), 0);
      if (state.carparks) map.add(new GeoJSONLayer(carparksLayer), 0);
      if (state.seaports) map.add(new GeoJSONLayer(seaportsLayer), 0);
      if (state.intermodalTerminals) map.add(new GeoJSONLayer(intermodalTerminalsLayer), 0);

      // Lines
      if (state.railNetwork) map.add(new GeoJSONLayer(railNetworkLayer), 0);
      if (state.roadNetwork) map.add(new GeoJSONLayer(roadNetworkLayer), 0);
      if (state.keyRoads) map.add(new GeoJSONLayer(keyRoadsLayer), 0);
      if (state.secondaryRoads) map.add(new GeoJSONLayer(secondaryRoadsLayer), 0);

      // Polygons
      if (state.tenancyLeaseAreas) map.add(new GeoJSONLayer(tenancyLeaseAreasLayer), 0);
      if (state.nswPortsLeaseArea) map.add(new GeoJSONLayer(tenancyUnitsLayer), 0);

      // destroy the map view
      return () => {
        if (view) view.container = null;
      };
    });
  });

  return (
    <>
      <div className='map-wrapper' ref={mapRef}></div>
    </>
  );
}
