import React, { useEffect, useRef } from "react";
import { loadModules } from "esri-loader";

import { useTrackedState } from "../../store";

// TODO can we add an icon shadow?

// ##### IMPORT ALL INDIVIDUAL LAYERS
import allLocationsLayer from "../../data/layers/PortsData/allLocations";
import localGovLayer from "../../data/layers/PublicData/localGov";
import seaportsLayer from "../../data/layers/PublicData/seaports";
import keyRoadsLayer from "../../data/layers/PublicData/keyRoads";
import PB_labelsLayer from "../../data/layers/PortsData/PB_labels";
import PK_labelsLayer from "../../data/layers/PortsData/PK_labels";
import intermodalTerminalsLayer from "../../data/layers/PublicData/intermodalTerminals";
import roadTrainAssemblyLayer from "../../data/layers/PublicData/roadTrainAssembly";
import secondaryRoadsLayer from "../../data/layers/PublicData/secondaryRoads";
import keyRailsLayer from "../../data/layers/PublicData/keyRails";
import PB_berthLayer from "../../data/layers/PortsData/PB_berths";
import PB_GATES_DATA from "../../data/layers/PortsData/PB_gates";
import PK_berthsLayer from "../../data/layers/PortsData/PK_berths";
import leaseBoundariesLayer from "../../data/layers/PortsData/leaseBoundaries";
import tenancyLeaseAreasLayer from "../../data/layers/PortsData/tenancyLeaseAreas";
import tenancyUnitsLayer from "../../data/layers/PortsData/tenancyUnits";
import buildingsLayer from "../../data/layers/PortsData/buildings";
import heritageLayer from "../../data/layers/PortsData/heritage";
import railNetworkLayer from "../../data/layers/PortsData/railNetwork";
import roadNetworkLayer from "../../data/layers/PortsData/roadNetwork";

// TODO convert geoJSON layers to FeatureLayer so that can add

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
        "esri/core/watchUtils",
      ],
      { css: true }
    ).then(([esriConfig, ArcGISMap, MapView, FeatureLayer, GeoJSONLayer, BasemapToggle, watchUtils]) => {
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

      // ### ADD THE RELEVANT DATA ###

      // TODO add 0 with the map.add method to ensure that the layers
      // are added in the appropriate order:
      // https://developers.arcgis.com/javascript/latest/guide/add-layers-to-a-map/

      // if they're viewing all locations, show the locations marker
      if (state.viewing === "ALL") map.add(new GeoJSONLayer(allLocationsLayer));

      // Ports Data
      if (state.leaseBoundaries) map.add(new GeoJSONLayer(leaseBoundariesLayer));
      if (state.tenancyLeaseAreas) map.add(new GeoJSONLayer(tenancyLeaseAreasLayer));
      if (state.tenancyUnits) map.add(new GeoJSONLayer(tenancyUnitsLayer));
      if (state.pbBerths) map.add(new GeoJSONLayer(PB_berthLayer));
      if (state.pbGates) {
        // ADD ALL GATES DYNAMICALLY (to allow for seperate icons for geoJSON layer data)

        PB_GATES_DATA.map((gate) => {
          const { num, icon } = gate;

          return map.add(
            new GeoJSONLayer({
              url: `https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/PortsData/gates/${num}.geojson`,
              objectIdField: "ObjectID",
              renderer: {
                type: "simple",
                symbol: {
                  type: "picture-marker",
                  url: icon,
                  width: "40px",
                  height: "40px",
                },
              },
            })
          );
        });
      }
      if (state.pkBerths) map.add(new GeoJSONLayer(PK_berthsLayer));
      if (state.buildings) map.add(new GeoJSONLayer(buildingsLayer));
      if (state.heritage) map.add(new GeoJSONLayer(heritageLayer));
      if (state.railNetwork) map.add(new GeoJSONLayer(railNetworkLayer));
      if (state.roadNetwork) map.add(new GeoJSONLayer(roadNetworkLayer));
      if (state.pbLabels) map.add(new GeoJSONLayer(PB_labelsLayer));
      if (state.pkLabels) map.add(new GeoJSONLayer(PK_labelsLayer));

      // Public Data
      if (state.localGov) map.add(new FeatureLayer(localGovLayer));
      if (state.seaports) map.add(new GeoJSONLayer(seaportsLayer));
      if (state.intermodalTerminals) map.add(new GeoJSONLayer(intermodalTerminalsLayer));
      if (state.roadTrainAssembly) map.add(new GeoJSONLayer(roadTrainAssemblyLayer));
      if (state.keyRoads) map.add(new GeoJSONLayer(keyRoadsLayer));
      if (state.secondaryRoads) map.add(new GeoJSONLayer(secondaryRoadsLayer));
      if (state.keyRail) map.add(new GeoJSONLayer(keyRailsLayer));

      // destroy the map view
      return () => {
        if (view) view.container = null;
      };
    });
  });

  return <div className='map-wrapper' ref={mapRef}></div>;
}
