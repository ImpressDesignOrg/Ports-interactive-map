import React, { useState, useEffect, useRef } from 'react';
import { loadModules, setDefaultOptions } from 'esri-loader';
import styled from 'styled-components';
import { Button, Select } from 'antd';

// before loading the modules for the first time,
// also lazy load the CSS for the version of
// the script that you're loading from the CDN
setDefaultOptions({ css: true });

export default function Map() {
  const mapRef = useRef();

  // key freight routes
  const [activeKFR, setActiveKFR] = useState({
    airport: false,
    seaport: false,
    intermodal: false,
    roadTrainAssembly: false,
    secondaryRoad: false,
    keyRoad: false,
    keyRail: false,
  });
  // NSW admin boundaries
  const [activeNSWAB, setActiveNSWAB] = useState({
    suburb: false,
    localElectoral: false,
    stateElectoral: false,
    county: false,
    parish: false,
    stateForest: false,
    npwsReserve: false,
    federalElectoral: false,
  });

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
    // data/assets/json
    railNetwork: false,
  });

  const { suburbs, localGovAreas } = activeLayers;

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
        center: [151.218, -33.976],
        zoom: 11,
      });

      // Key Freight Routes
      if (activeKFR.airport) {
        map.add(
          new FeatureLayer({
            url:
              'http://gis.infrastructure.gov.au/infrastructure/rest/services/KeyFreightRoute/KFR/MapServer/0',
            objectIdField: 'ObjectID',
            popupTemplate: {
              title: 'Airport',
              content: [
                {
                  type: 'fields',
                  fieldInfos: [
                    {
                      fieldName: 'Name',
                      label: 'Airport',
                      visible: true,
                    },
                  ],
                },
              ],
            },
          })
        );
      }
      if (activeKFR.seaport) {
        map.add(
          new FeatureLayer({
            url:
              'http://gis.infrastructure.gov.au/infrastructure/rest/services/KeyFreightRoute/KFR/MapServer/1',
            objectIdField: 'ObjectID',
            popupTemplate: {
              title: 'Seaport',
              content: [
                {
                  type: 'fields',
                  fieldInfos: [
                    {
                      fieldName: 'Name',
                      label: 'Seaport',
                      visible: true,
                    },
                  ],
                },
              ],
            },
          })
        );
      }
      if (activeKFR.intermodal) {
        map.add(
          new FeatureLayer({
            url:
              'http://gis.infrastructure.gov.au/infrastructure/rest/services/KeyFreightRoute/KFR/MapServer/2',
            objectIdField: 'ObjectID',
            popupTemplate: {
              title: 'Intermodal Terminal',
              content: [
                {
                  type: 'fields',
                  fieldInfos: [
                    {
                      fieldName: 'Name',
                      label: 'Intermodal Terminal',
                      visible: true,
                    },
                  ],
                },
              ],
            },
          })
        );
      }
      if (activeKFR.roadTrainAssembly) {
        map.add(
          new FeatureLayer({
            url:
              'http://gis.infrastructure.gov.au/infrastructure/rest/services/KeyFreightRoute/KFR/MapServer/3',
            objectIdField: 'ObjectID',
            popupTemplate: {
              title: 'Road Train Assembly',
              content: [
                {
                  type: 'fields',
                  fieldInfos: [
                    {
                      fieldName: 'Name',
                      label: 'Road Train Assembly',
                      visible: true,
                    },
                  ],
                },
              ],
            },
          })
        );
      }
      if (activeKFR.keyRoad) {
        map.add(
          new FeatureLayer({
            url:
              'http://gis.infrastructure.gov.au/infrastructure/rest/services/KeyFreightRoute/KFR/MapServer/5',
            objectIdField: 'ObjectID',
            popupTemplate: {
              title: 'Key Freight Road',
              content: [
                {
                  type: 'fields',
                  fieldInfos: [
                    {
                      fieldName: 'Name',
                      label: 'Name',
                      visible: true,
                    },
                  ],
                },
              ],
            },
          })
        );
      }
      if (activeKFR.secondaryRoad) {
        map.add(
          new FeatureLayer({
            url:
              'http://gis.infrastructure.gov.au/infrastructure/rest/services/KeyFreightRoute/KFR/MapServer/4',
            objectIdField: 'ObjectID',
            popupTemplate: {
              title: 'Secondary Freight Road',
              content: [
                {
                  type: 'fields',
                  fieldInfos: [
                    {
                      fieldName: 'Name',
                      label: 'Name',
                      visible: true,
                    },
                  ],
                },
              ],
            },
          })
        );
      }
      if (activeKFR.keyRail) {
        map.add(
          new FeatureLayer({
            url:
              'http://gis.infrastructure.gov.au/infrastructure/rest/services/KeyFreightRoute/KFR/MapServer/6',
            objectIdField: 'ObjectID',
            popupTemplate: {
              title: 'Rail Freight Network',
              content: [
                {
                  type: 'fields',
                  fieldInfos: [
                    {
                      fieldName: 'Name',
                      label: 'Name',
                      visible: true,
                    },
                  ],
                },
              ],
            },
          })
        );
      }

      // NSW Administrative Boundaries
      if (activeNSWAB.suburb) {
        map.add(
          new FeatureLayer({
            url:
              'https://maps.six.nsw.gov.au/arcgis/rest/services/public/NSW_Administrative_Boundaries/MapServer/0',
            objectIdField: 'ObjectID',
            popupTemplate: {
              title: 'Suburbs',
              content: [
                {
                  type: 'fields',
                  fieldInfos: [
                    {
                      fieldName: 'suburbname',
                      label: 'Name',
                      visible: true,
                    },
                    {
                      fieldName: 'postcode',
                      label: 'Postcode',
                      visible: true,
                    },
                    {
                      fieldName: 'shape_area',
                      label: 'Area',
                      visible: true,
                    },
                  ],
                },
              ],
            },
          })
        );
      }
      if (activeNSWAB.localElectoral) {
        map.add(
          new FeatureLayer({
            url:
              'https://maps.six.nsw.gov.au/arcgis/rest/services/public/NSW_Administrative_Boundaries/MapServer/1',
            objectIdField: 'ObjectID',
            popupTemplate: {
              title: 'Local Government Area',
              content: [
                {
                  type: 'fields',
                  fieldInfos: [
                    {
                      fieldName: 'lganame',
                      label: 'Name',
                      visible: true,
                    },
                    {
                      fieldName: 'shape_area',
                      label: 'Area',
                      visible: true,
                    },
                  ],
                },
              ],
            },
          })
        );
      }
      if (activeNSWAB.stateElectoral) {
        map.add(
          new FeatureLayer({
            url:
              'https://maps.six.nsw.gov.au/arcgis/rest/services/public/NSW_Administrative_Boundaries/MapServer/2',
            objectIdField: 'ObjectID',
            popupTemplate: {
              title: 'State Electoral District',
              content: [
                {
                  type: 'fields',
                  fieldInfos: [
                    {
                      fieldName: 'districtname',
                      label: 'Name',
                      visible: true,
                    },
                    {
                      fieldName: 'shape_area',
                      label: 'Area',
                      visible: true,
                    },
                  ],
                },
              ],
            },
          })
        );
      }
      if (activeNSWAB.county) {
        map.add(
          new FeatureLayer({
            url:
              'https://maps.six.nsw.gov.au/arcgis/rest/services/public/NSW_Administrative_Boundaries/MapServer/3',
            objectIdField: 'ObjectID',
            popupTemplate: {
              title: 'County',
              content: [
                {
                  type: 'fields',
                  fieldInfos: [
                    {
                      fieldName: 'countyname',
                      label: 'Name',
                      visible: true,
                    },
                    {
                      fieldName: 'shape_area',
                      label: 'Area',
                      visible: true,
                    },
                  ],
                },
              ],
            },
          })
        );
      }
      if (activeNSWAB.parish) {
        map.add(
          new FeatureLayer({
            url:
              'https://maps.six.nsw.gov.au/arcgis/rest/services/public/NSW_Administrative_Boundaries/MapServer/4',
            objectIdField: 'ObjectID',
            popupTemplate: {
              title: 'Parish',
              content: [
                {
                  type: 'fields',
                  fieldInfos: [
                    {
                      fieldName: 'parishname',
                      label: 'Name',
                      visible: true,
                    },
                    {
                      fieldName: 'shape_area',
                      label: 'Area',
                      visible: true,
                    },
                  ],
                },
              ],
            },
          })
        );
      }
      if (activeNSWAB.stateForest) {
        map.add(
          new FeatureLayer({
            url:
              'https://maps.six.nsw.gov.au/arcgis/rest/services/public/NSW_Administrative_Boundaries/MapServer/5',
            objectIdField: 'ObjectID',
            popupTemplate: {
              title: 'State Forest',
              content: [
                {
                  type: 'fields',
                  fieldInfos: [
                    {
                      fieldName: 'stateforestname',
                      label: 'Name',
                      visible: true,
                    },
                    {
                      fieldName: 'shape_area',
                      label: 'Area',
                      visible: true,
                    },
                  ],
                },
              ],
            },
          })
        );
      }
      if (activeNSWAB.npwsReserve) {
        map.add(
          new FeatureLayer({
            url:
              'https://maps.six.nsw.gov.au/arcgis/rest/services/public/NSW_Administrative_Boundaries/MapServer/6',
            objectIdField: 'ObjectID',
            popupTemplate: {
              title: 'NPWS Reserve',
              content: [
                {
                  type: 'fields',
                  fieldInfos: [
                    {
                      fieldName: 'reservename',
                      label: 'Name',
                      visible: true,
                    },
                    {
                      fieldName: 'shape_area',
                      label: 'Area',
                      visible: true,
                    },
                  ],
                },
              ],
            },
          })
        );
      }
      if (activeNSWAB.federalElectoral) {
        map.add(
          new FeatureLayer({
            url:
              'https://maps.six.nsw.gov.au/arcgis/rest/services/public/NSW_Administrative_Boundaries/MapServer/7',
            objectIdField: 'ObjectID',
            popupTemplate: {
              title: 'Federal Electoral Division',
              content: [
                {
                  type: 'fields',
                  fieldInfos: [
                    {
                      fieldName: 'divisionname',
                      label: 'Name',
                      visible: true,
                    },
                    {
                      fieldName: 'shape_area',
                      label: 'Area',
                      visible: true,
                    },
                  ],
                },
              ],
            },
          })
        );
      }
      /*       if (railNetwork) {
        map.add(
          new GeoJSONLayer({
            url: `https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/assets/json/BREAKWATERSREVETMENTS.geojson`,
          })
        );
      } */

      return () => {
        if (view) {
          // destroy the map view
          view.container = null;
        }
      };
    });
  });

  return (
    <div className='map-wrapper' ref={mapRef}>
      <LegendContainer>
        <div className='content'>
          <h4>Key Freight Routes</h4>
          {activeKFR.airport ? (
            <ActiveButton
              onClick={() => setActiveKFR({ ...activeKFR, airport: false })}
            >
              Airports
            </ActiveButton>
          ) : (
            <InactiveButton
              onClick={() => setActiveKFR({ ...activeKFR, airport: true })}
            >
              Airports
            </InactiveButton>
          )}
          {activeKFR.seaport ? (
            <ActiveButton
              onClick={() => setActiveKFR({ ...activeKFR, seaport: false })}
            >
              Seaports
            </ActiveButton>
          ) : (
            <InactiveButton
              onClick={() => setActiveKFR({ ...activeKFR, seaport: true })}
            >
              Seaports
            </InactiveButton>
          )}
          {activeKFR.intermodal ? (
            <ActiveButton
              onClick={() => setActiveKFR({ ...activeKFR, intermodal: false })}
            >
              Intermodal Terminals
            </ActiveButton>
          ) : (
            <InactiveButton
              onClick={() => setActiveKFR({ ...activeKFR, intermodal: true })}
            >
              Intermodal Terminals
            </InactiveButton>
          )}
          {activeKFR.roadTrainAssembly ? (
            <ActiveButton
              onClick={() =>
                setActiveKFR({ ...activeKFR, roadTrainAssembly: false })
              }
            >
              Road Train Assembly
            </ActiveButton>
          ) : (
            <InactiveButton
              onClick={() =>
                setActiveKFR({ ...activeKFR, roadTrainAssembly: true })
              }
            >
              Road Train Assembly
            </InactiveButton>
          )}
          {activeKFR.keyRoad ? (
            <ActiveButton
              onClick={() => setActiveKFR({ ...activeKFR, keyRoad: false })}
            >
              Key Freight Road Routes
            </ActiveButton>
          ) : (
            <InactiveButton
              onClick={() => setActiveKFR({ ...activeKFR, keyRoad: true })}
            >
              Key Freight Road Routes
            </InactiveButton>
          )}
          {activeKFR.keyRail ? (
            <ActiveButton
              onClick={() => setActiveKFR({ ...activeKFR, keyRail: false })}
            >
              Key Freight Rail Routes
            </ActiveButton>
          ) : (
            <InactiveButton
              onClick={() => setActiveKFR({ ...activeKFR, keyRail: true })}
            >
              Key Freight Rail Routes
            </InactiveButton>
          )}
          {activeKFR.secondaryRoad ? (
            <ActiveButton
              onClick={() =>
                setActiveKFR({ ...activeKFR, secondaryRoad: false })
              }
            >
              Secondary Freight Road Routes
            </ActiveButton>
          ) : (
            <InactiveButton
              onClick={() =>
                setActiveKFR({ ...activeKFR, secondaryRoad: true })
              }
            >
              Secondary Freight Road Routes
            </InactiveButton>
          )}
          <h4>NSW Administrative Boundaries</h4>
          {activeNSWAB.suburb ? (
            <ActiveButton
              onClick={() => setActiveNSWAB({ ...activeNSWAB, suburb: false })}
            >
              Suburbs
            </ActiveButton>
          ) : (
            <InactiveButton
              onClick={() => setActiveNSWAB({ ...activeNSWAB, suburb: true })}
            >
              Suburbs
            </InactiveButton>
          )}
          {activeNSWAB.localElectoral ? (
            <ActiveButton
              onClick={() =>
                setActiveNSWAB({ ...activeNSWAB, localElectoral: false })
              }
            >
              Local Government Areas
            </ActiveButton>
          ) : (
            <InactiveButton
              onClick={() =>
                setActiveNSWAB({ ...activeNSWAB, localElectoral: true })
              }
            >
              Local Government Areas
            </InactiveButton>
          )}
          {activeNSWAB.stateElectoral ? (
            <ActiveButton
              onClick={() =>
                setActiveNSWAB({ ...activeNSWAB, stateElectoral: false })
              }
            >
              State Electoral Districts
            </ActiveButton>
          ) : (
            <InactiveButton
              onClick={() =>
                setActiveNSWAB({ ...activeNSWAB, stateElectoral: true })
              }
            >
              State Electoral Districts
            </InactiveButton>
          )}
          {activeNSWAB.county ? (
            <ActiveButton
              onClick={() => setActiveNSWAB({ ...activeNSWAB, county: false })}
            >
              County
            </ActiveButton>
          ) : (
            <InactiveButton
              onClick={() => setActiveNSWAB({ ...activeNSWAB, county: true })}
            >
              County
            </InactiveButton>
          )}
          {activeNSWAB.parish ? (
            <ActiveButton
              onClick={() => setActiveNSWAB({ ...activeNSWAB, parish: false })}
            >
              Parish
            </ActiveButton>
          ) : (
            <InactiveButton
              onClick={() => setActiveNSWAB({ ...activeNSWAB, parish: true })}
            >
              Parish
            </InactiveButton>
          )}
          {activeNSWAB.stateForest ? (
            <ActiveButton
              onClick={() =>
                setActiveNSWAB({ ...activeNSWAB, stateForest: false })
              }
            >
              State Forest
            </ActiveButton>
          ) : (
            <InactiveButton
              onClick={() =>
                setActiveNSWAB({ ...activeNSWAB, stateForest: true })
              }
            >
              State Forest
            </InactiveButton>
          )}
          {activeNSWAB.npwsReserve ? (
            <ActiveButton
              onClick={() =>
                setActiveNSWAB({ ...activeNSWAB, npwsReserve: false })
              }
            >
              NPWS Reserve
            </ActiveButton>
          ) : (
            <InactiveButton
              onClick={() =>
                setActiveNSWAB({ ...activeNSWAB, npwsReserve: true })
              }
            >
              NPWS Reserve
            </InactiveButton>
          )}
          {activeNSWAB.federalElectoral ? (
            <ActiveButton
              onClick={() =>
                setActiveNSWAB({ ...activeNSWAB, federalElectoral: false })
              }
            >
              Federal Electoral Division
            </ActiveButton>
          ) : (
            <InactiveButton
              onClick={() =>
                setActiveNSWAB({ ...activeNSWAB, federalElectoral: true })
              }
            >
              Federal Electoral Division
            </InactiveButton>
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

const ActiveButton = styled(Button)`
  border: 1px solid green;
`;
const InactiveButton = styled(Button)``;
