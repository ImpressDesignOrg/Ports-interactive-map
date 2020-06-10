import React, { useState, useEffect, useRef } from 'react';
import { loadModules, setDefaultOptions } from 'esri-loader';
import styled from 'styled-components';

// before loading the modules for the first time,
// also lazy load the CSS for the version of
// the script that you're loading from the CDN
setDefaultOptions({ css: true });

export default function Map() {
  const mapRef = useRef();
  const [activeLayers, setActiveLayers] = useState({
    airport: false,
    seaport: false,
    intermodal: false,
    roadTrainAssembly: false,
    road: false,
    secondaryRoad: false,
    rail: false,
    suburbs: false,
    localGovAreas: false,
  });

  // TODO combine into one util function
  // button toggle handlers
  const handleAirports = () => {
    setActiveLayers({
      ...activeLayers,
      airport: !activeLayers.airport,
    });
  };
  const handleSeaports = () =>
    setActiveLayers({
      ...activeLayers,
      seaport: !activeLayers.seaport,
    });
  const handleIntermodal = () =>
    setActiveLayers({ ...activeLayers, intermodal: !activeLayers.intermodal });
  const handleRoadTrainAssembly = () =>
    setActiveLayers({
      ...activeLayers,
      roadTrainAssembly: !activeLayers.roadTrainAssembly,
    });
  const handleRoad = () =>
    setActiveLayers({
      ...activeLayers,
      road: !activeLayers.road,
    });
  const handleSecondaryRoad = () =>
    setActiveLayers({
      ...activeLayers,
      secondaryRoad: !activeLayers.secondaryRoad,
    });
  const handleRail = () =>
    setActiveLayers({
      ...activeLayers,
      rail: !activeLayers.rail,
    });
  const handleSuburbs = () =>
    setActiveLayers({
      ...activeLayers,
      suburbs: !activeLayers.suburbs,
    });
  const handleLocalGovArea = () =>
    setActiveLayers({
      ...activeLayers,
      localGovAreas: !activeLayers.localGovAreas,
    });

  const {
    airport,
    seaport,
    intermodal,
    roadTrainAssembly,
    road,
    secondaryRoad,
    rail,
    suburbs,
    localGovAreas,
  } = activeLayers;

  useEffect(() => {
    // lazy load the required ArcGIS API for JavaScript modules and CSS
    loadModules(
      [
        'esri/Map',
        'esri/views/MapView',
        'esri/layers/FeatureLayer',
        'esri/layers/GeoJSONLayer',
      ],
      { css: true }
    ).then(([ArcGISMap, MapView, FeatureLayer, GeoJSONLayer]) => {
      const map = new ArcGISMap({
        basemap: 'topo-vector',
      });

      // load the map view at the ref's DOM node
      const view = new MapView({
        container: mapRef.current,
        map: map,
        center: [149.577774, -33.419998],
        zoom: 7,
      });

      /* API data */
      if (airport) {
        const airportsLayer = new FeatureLayer({
          url:
            'http://gis.infrastructure.gov.au/infrastructure/rest/services/KeyFreightRoute/KFR/MapServer/0',
        });
        map.add(airportsLayer);
      }
      if (seaport) {
        const seaportLayer = new FeatureLayer({
          url:
            'http://gis.infrastructure.gov.au/infrastructure/rest/services/KeyFreightRoute/KFR/MapServer/1',
        });
        map.add(seaportLayer);
      }
      if (intermodal) {
        const interModalLayer = new FeatureLayer({
          url:
            'http://gis.infrastructure.gov.au/infrastructure/rest/services/KeyFreightRoute/KFR/MapServer/2',
        });
        map.add(interModalLayer);
      }
      // TODO not working
      if (roadTrainAssembly) {
        const roadTrainAssemblyLayer = new FeatureLayer({
          url:
            'http://gis.infrastructure.gov.au/infrastructure/rest/services/KeyFreightRoute/KFR/MapServer/3',
        });
        map.add(roadTrainAssemblyLayer);
      }
      if (road) {
        const roadLayers = new FeatureLayer({
          url:
            'http://gis.infrastructure.gov.au/infrastructure/rest/services/KeyFreightRoute/KFR/MapServer/5',
        });
        map.add(roadLayers);
      }
      if (secondaryRoad) {
        const secondaryRoadLayers = new FeatureLayer({
          url:
            'http://gis.infrastructure.gov.au/infrastructure/rest/services/KeyFreightRoute/KFR/MapServer/4',
        });
        map.add(secondaryRoadLayers);
      }
      if (rail) {
        const railLayers = new FeatureLayer({
          url:
            'http://gis.infrastructure.gov.au/infrastructure/rest/services/KeyFreightRoute/KFR/MapServer/6',
        });
        map.add(railLayers);
      }
      if (suburbs) {
        const suburbLayers = new FeatureLayer({
          url:
            'https://maps.six.nsw.gov.au/arcgis/rest/services/public/NSW_Administrative_Boundaries/MapServer/0',
        });
        map.add(suburbLayers);
      }
      if (localGovAreas) {
        const localGovernmentAreaLayers = new FeatureLayer({
          url:
            'https://maps.six.nsw.gov.au/arcgis/rest/services/public/NSW_Administrative_Boundaries/MapServer/2',
        });
        map.add(localGovernmentAreaLayers);
      }

      return () => {
        if (view) {
          // destroy the map view
          view.container = null;
        }
      };
    });
  });

  console.log('activeLayers :>> ', activeLayers);

  return (
    <div className='map-wrapper' ref={mapRef}>
      <LegendContainer>
        <div className='content'>
          {airport ? (
            <ActiveButton onClick={handleAirports}>Aiports</ActiveButton>
          ) : (
            <button onClick={handleAirports}>Aiports</button>
          )}
          {seaport ? (
            <ActiveButton onClick={handleSeaports}>Seaports</ActiveButton>
          ) : (
            <button onClick={handleSeaports}>Seaports</button>
          )}
          {intermodal ? (
            <ActiveButton onClick={handleIntermodal}>Intermodal</ActiveButton>
          ) : (
            <button onClick={handleIntermodal}>Intermodal</button>
          )}
          {roadTrainAssembly ? (
            <ActiveButton onClick={handleRoadTrainAssembly}>
              Road Train Assembly
            </ActiveButton>
          ) : (
            <button onClick={handleRoadTrainAssembly}>
              Road Train Assembly
            </button>
          )}
          {road ? (
            <ActiveButton onClick={handleRoad}>Road</ActiveButton>
          ) : (
            <button onClick={handleRoad}>Road</button>
          )}
          {secondaryRoad ? (
            <ActiveButton onClick={handleSecondaryRoad}>
              Secondary Road
            </ActiveButton>
          ) : (
            <button onClick={handleSecondaryRoad}>Secondary Road</button>
          )}
          {rail ? (
            <ActiveButton onClick={handleRail}>Rail</ActiveButton>
          ) : (
            <button onClick={handleRail}>Rail</button>
          )}
          {suburbs ? (
            <ActiveButton onClick={handleSuburbs}>Suburbs</ActiveButton>
          ) : (
            <button onClick={handleSuburbs}>Suburbs</button>
          )}
          {localGovAreas ? (
            <ActiveButton onClick={handleLocalGovArea}>
              Local Gov Areas
            </ActiveButton>
          ) : (
            <button onClick={handleLocalGovArea}>Local Gov Areas</button>
          )}
        </div>
      </LegendContainer>
    </div>
  );
}

const LegendContainer = styled.div`
  border: 2px dotted blue;

  width: 300px;
  height: 100vh;

  .content {
    padding: 30px;
    display: flex;
    flex-direction: column;

    button {
      margin: 10px 0;
      width: 150px;
    }
  }
`;

const ActiveButton = styled.button`
  border: 3px solid green;
`;
