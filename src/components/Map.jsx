import React, { useState, useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';
import styled from 'styled-components';
import { FaBuilding } from 'react-icons/fa';

import selectedOptionsIntoObject from '../utils/selectedOptionsIntoObject';

// layers
import suburbLayer from '../data/layers/NSWAdminBoundaries/suburb';
import localGovLayer from '../data/layers/NSWAdminBoundaries/localGov';
import stateGovLayer from '../data/layers/NSWAdminBoundaries/stateGov';
import federalGovLayer from '../data/layers/NSWAdminBoundaries/federalGov';
import parishLayer from '../data/layers/NSWAdminBoundaries/parish';
import countyLayer from '../data/layers/NSWAdminBoundaries/county';
import stateForestLayer from '../data/layers/NSWAdminBoundaries/stateForest';
import npwsReserveLayer from '../data/layers/NSWAdminBoundaries/npwsReserve';
import PB_labelsLayer from '../data/layers/PB_labels';
import PK_labelsLayer from '../data/layers/PK_labels';

export default function Map({ viewport, active }) {
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
  // Property
  const [activeProperty, setActiveProperty] = useState({
    pbBerth: false,
    pbGate: false,
    pkBerth: false,
    leaseBoundary: false,
    tenancyLeaseAreas: false,
    tenancyUnits: false,
  });
  // Asset Management
  const [activeAssetMgt, setActiveAssetMgt] = useState({
    breakwatersRevetments: false,
    buildings: false,
    heritage: false,
    maritimeStructures: false,
    railNetwork: false,
    roadNetwork: false,
    pbLabels: false,
    pbLines: false,
    pkLabels: false,
    pkLines: false,
  });

  const {
    suburbs,
    county,
    parish,
    localGov,
    stateGov,
    federalGov,
    npwsReserve,
    stateForest,
  } = active;

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
      ],
      { css: true }
    ).then(
      ([
        esriConfig,
        ArcGISMap,
        MapView,
        FeatureLayer,
        GeoJSONLayer,
        BasemapToggle,
      ]) => {
        const map = new ArcGISMap({
          basemap: 'hybrid',
        });

        // load the map view at the ref's DOM node
        const view = new MapView({
          container: mapRef.current,
          map: map,
          center: viewport.center,
          zoom: viewport.zoom,
        });

        // add map toggle
        view.ui.add(
          new BasemapToggle({
            view: view,
            nextBasemap: 'topo-vector',
          }),
          'bottom-left'
        );

        // Key Freight Routes
        if (activeKFR.airport) {
          map.add(
            new GeoJSONLayer({
              url:
                'https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/keyFreightRoutes/majorAirports.geojson',
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
            new GeoJSONLayer({
              url:
                'https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/keyFreightRoutes/majorSeaports.geojson',
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

        // ###### NSW Administrative Boundaries Layers ######
        if (suburbs) map.add(new FeatureLayer(suburbLayer));
        if (county) map.add(new FeatureLayer(countyLayer));
        if (parish) map.add(new FeatureLayer(parishLayer));
        if (stateForest) map.add(new FeatureLayer(stateForestLayer));
        if (npwsReserve) map.add(new FeatureLayer(npwsReserveLayer));
        if (localGov) map.add(new FeatureLayer(localGovLayer));
        if (stateGov) map.add(new FeatureLayer(stateGovLayer));
        if (federalGov) map.add(new FeatureLayer(federalGovLayer));

        // ##### Property Layers ######
        if (activeProperty.pbBerth) {
          map.add(
            new GeoJSONLayer({
              url:
                'https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/gatenumbers/json/PB_BERTH.geojson',
              objectIdField: 'ObjectID',
              popupTemplate: {
                title: 'Port Botany Berth',
                content: [
                  {
                    type: 'fields',
                    fieldInfos: [
                      {
                        fieldName: 'TextString',
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
        if (activeProperty.pbGate) {
          map.add(
            new GeoJSONLayer({
              url:
                'https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/gatenumbers/json/PB_GATENO.geojson',
              objectIdField: 'ObjectID',
              popupTemplate: {
                title: 'Port Botany Gate Number',
                content: [
                  {
                    type: 'fields',
                    fieldInfos: [
                      {
                        fieldName: 'GATE_NUM',
                        label: 'Gate Number',
                        visible: true,
                      },
                    ],
                  },
                ],
              },
            })
          );
        }
        if (activeProperty.pkBerth) {
          map.add(
            new GeoJSONLayer({
              url:
                'https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/gatenumbers/json/PK_BERTH.geojson',
              objectIdField: 'ObjectID',
              popupTemplate: {
                title: 'Port Kembla Berth',
                content: [
                  {
                    type: 'fields',
                    fieldInfos: [
                      {
                        fieldName: 'TextString',
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
        if (activeProperty.leaseBoundary) {
          map.add(
            new GeoJSONLayer({
              url:
                'https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/leaseboundary/json/LEASEBOUNDARY.geojson',
              objectIdField: 'ObjectID',
              popupTemplate: {
                title: 'Lease Boundary',
                content: [
                  {
                    type: 'fields',
                    fieldInfos: [
                      {
                        fieldName: 'PORT',
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
        if (activeProperty.tenancyLeaseAreas) {
          map.add(
            new GeoJSONLayer({
              url:
                'https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/tenancydata/json/TENANCY_LEASE_AREAS.geojson',
              objectIdField: 'ObjectID',
              popupTemplate: {
                title: 'Tenancy Lease Areas',
                content: [
                  {
                    type: 'fields',
                    fieldInfos: [
                      {
                        fieldName: 'LEASE',
                        label: 'Lease Name',
                        visible: true,
                      },
                      {
                        fieldName: 'LEASE_TYPE',
                        label: 'Lease Type',
                        visible: true,
                      },
                    ],
                  },
                ],
              },
            })
          );
        }
        if (activeProperty.tenancyUnits) {
          map.add(
            new GeoJSONLayer({
              url:
                'https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/tenancydata/json/TENANCY_UNITS.geojson',
              objectIdField: 'ObjectID',
              popupTemplate: {
                title: 'Tenancy Units',
                content: [
                  {
                    type: 'fields',
                    fieldInfos: [
                      {
                        fieldName: 'PORT',
                        label: 'Port Name',
                        visible: true,
                      },
                      {
                        fieldName: 'UNITTYPE',
                        label: 'Unit Type',
                        visible: true,
                      },
                    ],
                  },
                ],
              },
            })
          );
        }
        // Asset Management
        if (activeAssetMgt.breakwatersRevetments) {
          map.add(
            new GeoJSONLayer({
              url:
                'https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/assets/json/BREAKWATERSREVETMENTS.geojson',
              objectIdField: 'ObjectID',
              popupTemplate: {
                title: 'Breakwaters Revetments',
                content: [
                  {
                    type: 'fields',
                    fieldInfos: [
                      {
                        fieldName: 'ASSET_NO',
                        label: 'Asset Number',
                        visible: true,
                      },
                      {
                        fieldName: 'ASS_NAME',
                        label: 'Asset Name',
                        visible: true,
                      },
                      {
                        fieldName: 'ASS_CLASS',
                        label: 'Asset Class',
                        visible: true,
                      },
                      {
                        fieldName: 'ASS_LOC',
                        label: 'Asset Location',
                        visible: true,
                      },
                    ],
                  },
                ],
              },
            })
          );
        }
        if (activeAssetMgt.buildings) {
          map.add(
            new GeoJSONLayer({
              url:
                'https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/assets/json/BUILDINGS.geojson',
              objectIdField: 'ObjectID',
              popupTemplate: {
                title: 'Buildings',
                content: [
                  {
                    type: 'fields',
                    fieldInfos: [
                      {
                        fieldName: 'ASSET_NO',
                        label: 'Asset Number',
                        visible: true,
                      },
                      {
                        fieldName: 'ASS_NAME',
                        label: 'Asset Name',
                        visible: true,
                      },
                      {
                        fieldName: 'ASS_CLASS',
                        label: 'Asset Class',
                        visible: true,
                      },
                      {
                        fieldName: 'ASS_LOC',
                        label: 'Asset Location',
                        visible: true,
                      },
                    ],
                  },
                ],
              },
              renderer: {
                type: 'simple',
                symbol: <FaBuilding />,
              },
            })
          );
        }
        if (activeAssetMgt.heritage) {
          map.add(
            new GeoJSONLayer({
              url:
                'https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/assets/json/HERITAGE.geojson',
              objectIdField: 'ObjectID',
              popupTemplate: {
                title: 'Buildings',
                content: [
                  {
                    type: 'fields',
                    fieldInfos: [
                      {
                        fieldName: 'Asset_No',
                        label: 'Asset Number',
                        visible: true,
                      },
                      {
                        fieldName: 'ASS_NAME',
                        label: 'Asset Name',
                        visible: true,
                      },
                      {
                        fieldName: 'ASS_CLASS',
                        label: 'Asset Class',
                        visible: true,
                      },
                      {
                        fieldName: 'ASS_LOC',
                        label: 'Asset Location',
                        visible: true,
                      },
                    ],
                  },
                ],
              },
            })
          );
        }
        if (activeAssetMgt.maritimeStructures) {
          map.add(
            new GeoJSONLayer({
              url:
                'https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/assets/json/MARITIMESTRUCTURES.geojson',
              objectIdField: 'ObjectID',
              popupTemplate: {
                title: 'Maritime <Structures></Structures>',
                content: [
                  {
                    type: 'fields',
                    fieldInfos: [
                      {
                        fieldName: 'ASSET_NO',
                        label: 'Asset Number',
                        visible: true,
                      },
                      {
                        fieldName: 'ASS_NAME',
                        label: 'Asset Name',
                        visible: true,
                      },
                      {
                        fieldName: 'ASS_CLASS',
                        label: 'Asset Class',
                        visible: true,
                      },
                      {
                        fieldName: 'ASS_LOC',
                        label: 'Asset Location',
                        visible: true,
                      },
                    ],
                  },
                ],
              },
            })
          );
        }
        if (activeAssetMgt.railNetwork) {
          map.add(
            new GeoJSONLayer({
              url:
                'https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/assets/json/RAILNETWORK.geojson',
              objectIdField: 'ObjectID',
              popupTemplate: {
                title: 'Rail Network',
                content: [
                  {
                    type: 'fields',
                    fieldInfos: [
                      {
                        fieldName: 'ASSET_NO',
                        label: 'Asset Number',
                        visible: true,
                      },
                      {
                        fieldName: 'ASS_NAME',
                        label: 'Asset Name',
                        visible: true,
                      },
                      {
                        fieldName: 'ASS_CLASS',
                        label: 'Asset Class',
                        visible: true,
                      },
                      {
                        fieldName: 'ASS_LOC',
                        label: 'Asset Location',
                        visible: true,
                      },
                    ],
                  },
                ],
              },
            })
          );
        }
        if (activeAssetMgt.roadNetwork) {
          map.add(
            new GeoJSONLayer({
              url:
                'https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/assets/json/ROADNETWORK.geojson',
              objectIdField: 'ObjectID',
              popupTemplate: {
                title: 'Road Network',
                content: [
                  {
                    type: 'fields',
                    fieldInfos: [
                      {
                        fieldName: 'ASSET_NO',
                        label: 'Asset Number',
                        visible: true,
                      },
                      {
                        fieldName: 'ASS_NAME',
                        label: 'Asset Name',
                        visible: true,
                      },
                      {
                        fieldName: 'ASS_CLASS',
                        label: 'Asset Class',
                        visible: true,
                      },
                      {
                        fieldName: 'ASS_LOC',
                        label: 'Asset Location',
                        visible: true,
                      },
                    ],
                  },
                ],
              },
            })
          );
        }
        if (activeAssetMgt.pbLabels) map.add(new GeoJSONLayer(PB_labelsLayer));

        if (activeAssetMgt.pbLines) {
          map.add(
            new GeoJSONLayer({
              url:
                'https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/channelplans/json/PB_LINES.geojson',
              objectIdField: 'ObjectID',
              popupTemplate: {
                title: 'Port Botany Lines',
                content: [
                  {
                    type: 'fields',
                    fieldInfos: [
                      {
                        fieldName: 'autocad_la',
                        label: 'Type',
                        visible: true,
                      },
                    ],
                  },
                ],
              },
            })
          );
        }
        if (activeAssetMgt.pkLabels) map.add(new GeoJSONLayer(PK_labelsLayer));

        if (activeAssetMgt.pkLines) {
          map.add(
            new GeoJSONLayer({
              url:
                'https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/channelplans/json/PK_LINES.geojson',
              objectIdField: 'ObjectID',
              popupTemplate: {
                title: 'Port Kembla Lines',
                content: [
                  {
                    type: 'fields',
                    fieldInfos: [
                      {
                        fieldName: 'autocad_la',
                        label: 'Type',
                        visible: true,
                      },
                    ],
                  },
                ],
              },
            })
          );
        }

        return () => {
          if (view) {
            // destroy the map view
            view.container = null;
          }
        };
      }
    );
  });

  return <div className='map-wrapper' ref={mapRef}></div>;
}

const SideWrapper = styled.div`
  position: absolute;
  width: 400px;
  height: 100vh;
  z-index: 2;
  right: 0;
  top: 0;
  background: #efefef;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.visible ? '1' : '0')};
  transition: visibility 1s, opacity 0.5s linear;

  .content {
    padding: 30px;

    .controls-wrapper {
      display: flex;
      flex-direction: column;

      .reset-wrapper {
        text-align: right;
      }

      .category {
        margin: 10px 0;

        h4 {
          color: #000;
        }
      }
    }

    .legend-wrapper {
      position: absolute;
      bottom: 20px;
      width: 200px;
      height: 400px;

      h2,
      p {
        color: #000;
      }
    }
  }
`;
