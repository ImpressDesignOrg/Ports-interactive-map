import React, { useEffect, useRef } from "react";
import { loadModules } from "esri-loader";

import { useTrackedState } from "../../store";

// ##### IMPORT ALL INDIVIDUAL LAYERS
import allLocationsLayer from "../../data/layers/allLocations";
import seaportsLayer from "../../data/layers/KeyFreightRoutes/seaports";
import keyRoadsLayer from "../../data/layers/KeyFreightRoutes/keyRoads";
import localGovLayer from "../../data/layers/NSWAdminBoundaries/localGov";
import PB_labelsLayer from "../../data/layers/AssetMgt/PB_labels";
import PK_labelsLayer from "../../data/layers/AssetMgt/PK_labels";
import intermodalTerminalsLayer from "../../data/layers/KeyFreightRoutes/intermodalTerminals";
import roadTrainAssemblyLayer from "../../data/layers/KeyFreightRoutes/roadTrainAssembly";
import secondaryRoadsLayer from "../../data/layers/KeyFreightRoutes/secondaryRoads";
import keyRailsLayer from "../../data/layers/KeyFreightRoutes/keyRails";
import PB_berthLayer from "../../data/layers/Property/PB_berths";
import PB_gatesLayer from "../../data/layers/Property/PB_gates";
import PK_berthsLayer from "../../data/layers/Property/PK_berths";
import leaseBoundariesLayer from "../../data/layers/Property/leaseBoundaries";
import tenancyLeaseAreasLayer from "../../data/layers/Property/tenancyLeaseAreas";
import tenancyUnitsLayer from "../../data/layers/Property/tenancyUnits";
import buildingsLayer from "../../data/layers/AssetMgt/buildings";
import heritageLayer from "../../data/layers/AssetMgt/heritage";
import railNetworkLayer from "../../data/layers/AssetMgt/railNetwork";
import roadNetworkLayer from "../../data/layers/AssetMgt/roadNetwork";

import { viewports } from "../../data/viewports";

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
      });

      view.popup.collapseEnabled = false;

      const basemapToggle = new BasemapToggle({
        view,
        nextBasemap: "satellite",
      });

      view.ui.add(basemapToggle, {
        position: "top-left",
      });

      if (state.viewing === "ALL" || state.viewing === "AUS") {
        map.add(new GeoJSONLayer(allLocationsLayer));
      }

      // Key Freight Routes
      if (state.seaports) map.add(new GeoJSONLayer(seaportsLayer));
      if (state.intermodalTerminals) map.add(new GeoJSONLayer(intermodalTerminalsLayer));
      if (state.roadTrainAssembly) map.add(new GeoJSONLayer(roadTrainAssemblyLayer));
      if (state.keyRoads) map.add(new GeoJSONLayer(keyRoadsLayer));
      if (state.secondaryRoads) map.add(new GeoJSONLayer(secondaryRoadsLayer));
      if (state.keyRails) map.add(new GeoJSONLayer(keyRailsLayer));

      // NSW Administrative Boundaries Layers
      if (state.localGov) map.add(new FeatureLayer(localGovLayer));

      // Property Layers
      if (state.leaseBoundaries) map.add(new GeoJSONLayer(leaseBoundariesLayer));
      if (state.tenancyLeaseAreas) map.add(new GeoJSONLayer(tenancyLeaseAreasLayer));
      if (state.tenancyUnits) map.add(new GeoJSONLayer(tenancyUnitsLayer));
      if (state.pbBerths) map.add(new GeoJSONLayer(PB_berthLayer));
      if (state.pbGates) map.add(new GeoJSONLayer(PB_gatesLayer));
      if (state.pkBerths) map.add(new GeoJSONLayer(PK_berthsLayer));

      // Asset Management
      if (state.buildings) map.add(new GeoJSONLayer(buildingsLayer));
      if (state.heritage) map.add(new GeoJSONLayer(heritageLayer));
      if (state.railNetwork) map.add(new GeoJSONLayer(railNetworkLayer));
      if (state.roadNetwork) map.add(new GeoJSONLayer(roadNetworkLayer));
      if (state.pbLabels) map.add(new GeoJSONLayer(PB_labelsLayer));
      if (state.pkLabels) map.add(new GeoJSONLayer(PK_labelsLayer));

      // destroy the map view
      return () => {
        if (view) view.container = null;
      };
    });
  });

  return <div className='map-wrapper' ref={mapRef}></div>;
}
