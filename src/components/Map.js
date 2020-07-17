import React, { useEffect, useRef } from "react";
import { loadModules } from "esri-loader";

import { useTrackedState } from "../store";

// ##### IMPORT ALL INDIVIDUAL LAYER SETTINGS
import { botanyLayer, kemblaLayer, cooksLayer, enfieldLayer } from "../data/layers/PortsData/allLocations";
import localGovLayer from "../data/layers/PublicData/localGov";
import seaportsLayer from "../data/layers/PublicData/seaports";
import keyRoadsLayer from "../data/layers/PublicData/keyRoads";
import intermodalTerminalsLayer from "../data/layers/PublicData/intermodalTerminals";
import secondaryRoadsLayer from "../data/layers/PublicData/secondaryRoads";
import PB_berthLayer from "../data/layers/PortsData/PB_berths";
import PB_gatesLayer from "../data/layers/PortsData/PB_gates";
import PK_berthsLayer from "../data/layers/PortsData/PK_berths";
import leaseBoundariesLayer from "../data/layers/PortsData/leaseBoundaries";
import tenancyLeaseAreasLayer from "../data/layers/PortsData/tenancyLeaseAreas";
import tenancyUnitsLayer from "../data/layers/PortsData/tenancyUnits";
import buildingsLayer from "../data/layers/PortsData/buildings";
import heritageLayer from "../data/layers/PortsData/heritage";
import railNetworkLayer from "../data/layers/PortsData/railNetwork";
import roadNetworkLayer from "../data/layers/PortsData/roadNetwork";

import { viewports } from "../data/viewports";

export default function Map() {
  const mapRef = useRef();
  const state = useTrackedState();

  useEffect(() => {
    // lazy load the required ArcGIS API
    loadModules(
      [
        "esri/config",
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer",
        "esri/layers/GeoJSONLayer",
        "esri/widgets/BasemapToggle",
      ],
      { css: true }
    ).then(([esriConfig, ArcGISMap, MapView, FeatureLayer, GeoJSONLayer, BasemapToggle]) => {
      const map = new ArcGISMap({
        basemap: "gray",
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
      });

      // add the map the toggle
      view.ui.add(
        new BasemapToggle({
          view,
          nextBasemap: "satellite",
        }),
        {
          position: "top-left",
        }
      );

      // if they're viewing all locations, show the locations marker
      if (state.viewing === "ALL") {
        map.add(new GeoJSONLayer(botanyLayer));
        map.add(new GeoJSONLayer(kemblaLayer));
        map.add(new GeoJSONLayer(cooksLayer));
        map.add(new GeoJSONLayer(enfieldLayer));
      }

      // The layers are added in the appropriate order: polygons, lines, points

      // Points
      if (state.pbBerths) map.add(new GeoJSONLayer(PB_berthLayer), 0);
      if (state.pbGates) map.add(new GeoJSONLayer(PB_gatesLayer), 0);
      if (state.pkBerths) map.add(new GeoJSONLayer(PK_berthsLayer), 0);
      if (state.buildings) map.add(new GeoJSONLayer(buildingsLayer), 0);
      if (state.heritage) map.add(new GeoJSONLayer(heritageLayer), 0);
      if (state.seaports) map.add(new GeoJSONLayer(seaportsLayer), 0);
      if (state.intermodalTerminals) map.add(new GeoJSONLayer(intermodalTerminalsLayer), 0);

      // Lines
      if (state.railNetwork) map.add(new GeoJSONLayer(railNetworkLayer), 0);
      if (state.roadNetwork) map.add(new GeoJSONLayer(roadNetworkLayer), 0);
      if (state.keyRoads) map.add(new GeoJSONLayer(keyRoadsLayer), 0);
      if (state.secondaryRoads) map.add(new GeoJSONLayer(secondaryRoadsLayer), 0);

      // Polygons
      if (state.localGov) map.add(new FeatureLayer(localGovLayer), 0);
      if (state.leaseBoundaries) map.add(new GeoJSONLayer(leaseBoundariesLayer), 0);
      if (state.tenancyLeaseAreas) map.add(new GeoJSONLayer(tenancyLeaseAreasLayer), 0);
      if (state.tenancyUnits) map.add(new GeoJSONLayer(tenancyUnitsLayer), 0);

      // destroy the map view
      return () => {
        if (view) view.container = null;
      };
    });
  });

  return <div className='map-wrapper' ref={mapRef}></div>;
}
