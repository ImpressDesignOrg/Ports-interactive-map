import React, { useState, useEffect, useRef } from 'react';
import { loadModules, setDefaultOptions } from 'esri-loader';
import styled from 'styled-components';
import { Button, Select } from 'antd';

import LegendItem from './LegendItem';

// lazy load the CSS for the version of the script that you're loading from the CDN
setDefaultOptions({ css: true });

const { Option, OptGroup } = Select;

export default function Map() {
  const mapRef = useRef();
  const [siderVisible, setSiderVisible] = useState(false);

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

  const selectedOptionsIntoObject = (obj, selectedArray) => {
    let tempState = {};

    Object.keys(obj).forEach((v) => {
      tempState[v] = selectedArray.includes(v) ? true : false;
    });

    return tempState;
  };

  const handleFreightRoutes = (selectedArray) => {
    setActiveKFR(selectedOptionsIntoObject(activeKFR, selectedArray));
  };
  const handleNSWAdmin = (selectedArray) => {
    setActiveNSWAB(selectedOptionsIntoObject(activeNSWAB, selectedArray));
  };
  const handleProperty = (selectedArray) => {
    setActiveProperty(selectedOptionsIntoObject(activeProperty, selectedArray));
  };
  const handleAssetMgt = (selectedArray) => {
    setActiveAssetMgt(selectedOptionsIntoObject(activeAssetMgt, selectedArray));
  };

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
          center: [151.218, -33.976],
          zoom: 11,
        });

        // add map toggle
        view.ui.add(
          new BasemapToggle({
            view: view,
            nextBasemap: 'topo-vector',
          }),
          'bottom-left'
        );

        const featureLayerUrl =
          'http://gis.infrastructure.gov.au/infrastructure/rest/services/KeyFreightRoute/KFR/MapServer/0';

        esriConfig.request.interceptors.push({
          // set the `urls` property to the URL of the FeatureLayer so that this
          // interceptor only applies to requests made to the FeatureLayer URL
          urls: featureLayerUrl,
          // use the BeforeInterceptorCallback to check if the query of the
          // FeatureLayer has a maxAllowableOffset property set.
          // if so, then set the maxAllowableOffset to 0
          before: function (params) {
            if (params.requestOptions.query.maxAllowableOffset) {
              params.requestOptions.query.maxAllowableOffset = 0;
            }
          },
          // use the AfterInterceptorCallback to check if `ssl` is set to 'true'
          // on the response to the request, if it's set to 'false', change
          // the value to 'true' before returning the response
          after: function (response) {
            if (!response.ssl) {
              console.log('not ssl');
              response.ssl = true;
            }
          },
        });

        console.log('activeNSWAB :>> ', activeNSWAB);
        console.log('activeAssetMgt :>> ', activeAssetMgt);

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
        // Property
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
        if (activeAssetMgt.pbLabels) {
          map.add(
            new GeoJSONLayer({
              url:
                'https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/channelplans/json/PB_LABELS.geojson',
              objectIdField: 'ObjectID',
              popupTemplate: {
                title: 'Port Botany Labels',
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
        if (activeAssetMgt.pkLabels) {
          map.add(
            new GeoJSONLayer({
              url:
                'https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/channelplans/json/PK_LABELS.geojson',
              objectIdField: 'ObjectID',
              popupTemplate: {
                title: 'Port Kembla Labels',
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

  console.log('legendVisible :>> ', siderVisible);

  return (
    <Container>
      <ToggleWrapper visible={siderVisible}>
        <Button onClick={() => setSiderVisible(!siderVisible)}>
          {siderVisible ? '>' : '<'}
        </Button>
      </ToggleWrapper>
      <SideWrapper visible={siderVisible}>
        <div className='content'>
          <div className='controls-wrapper'>
            <div className='category'>
              <h4>Key Freight Routes</h4>
              <Select
                mode='tags'
                style={{ width: 300 }}
                onChange={(e) => handleFreightRoutes(e)}
              >
                <Option value='airport'>Airports</Option>
                <Option value='seaport'>Seaports</Option>
                <Option value='intermodal'>Intermodal Terminals</Option>
                <Option value='roadTrainAssembly'>Road Train Assembly</Option>
                <Option value='keyRoad'>Key Freight Road Routes</Option>
                <Option value='keyRail'>Key Freight Rail Routes</Option>
                <Option value='secondaryRoad'>
                  Secondary Freight Road Routes
                </Option>
              </Select>
            </div>
            <div className='category'>
              <h4>NSW Administrative Boundaries</h4>
              <Select
                mode='tags'
                style={{ width: 300 }}
                onChange={(e) => handleNSWAdmin(e)}
              >
                <Option value='suburb'>Suburbs</Option>
                <Option value='county'>County</Option>
                <Option value='parish'>Parish</Option>
                <Option value='stateForest'>State Forest</Option>
                <Option value='npwsReserve'>NPWS Reserve</Option>
                <Option value='localElectoral'>Local Government Areas</Option>
                <Option value='stateElectoral'>
                  State Electoral Districts
                </Option>
                <Option value='federalElectoral'>
                  Federal Electoral Divison
                </Option>
              </Select>
            </div>
            <div className='category'>
              <h4>Property</h4>
              <Select
                mode='tags'
                style={{ width: 300 }}
                onChange={(e) => handleProperty(e)}
              >
                <OptGroup label='Gate Numbers'>
                  <Option value='pbBerth'>Port Botany Berth Numbers</Option>
                  <Option value='pbGate'>Port Botany Gate Numbers</Option>
                  <Option value='pkBerth'>Port Kembla Berth Numbers</Option>
                </OptGroup>
                <OptGroup label='Lease Areas'>
                  <Option value='tenancyLeaseAreas'>Tenancy Lease Areas</Option>
                  <Option value='tenancyUnits'>Tenancy Units</Option>
                </OptGroup>
                <OptGroup label='Lease Boundary'>
                  <Option value='leaseBoundary'>Lease Boundary</Option>
                </OptGroup>
              </Select>
            </div>
            <div className='category'>
              <h4>Asset Management</h4>
              <Select
                mode='tags'
                style={{ width: 300 }}
                onChange={(e) => handleAssetMgt(e)}
              >
                <OptGroup label='Asset Locations'>
                  <Option value='breakwatersRevetments'>
                    Breakwaters Revetments
                  </Option>
                  <Option value='buildings'>Buildings</Option>
                  <Option value='heritage'>Heritage</Option>
                  <Option value='maritimeStructures'>
                    Maritime Structures
                  </Option>
                  <Option value='railNetwork'>Rail Network</Option>
                  <Option value='roadNetwork'>Road Network</Option>
                </OptGroup>
                <OptGroup label='Channel Plans'>
                  <Option value='pbLabels'>Port Botany Labels</Option>
                  <Option value='pbLines'>Port Botany Lines</Option>
                  <Option value='pkLabels'>Port Kembla Labels</Option>
                  <Option value='pkLines'>Port Kembla Lines</Option>
                </OptGroup>
              </Select>
            </div>
          </div>
          <div className='legend-wrapper'>
            {activeKFR.airport && (
              <LegendItem
                title='Airport'
                iconSrc='https://www.kindpng.com/picc/m/108-1084414_small-location-svg-png-icon-free-download-location.png'
              />
            )}
            {activeKFR.seaport && (
              <LegendItem
                title='Seaport'
                iconSrc='https://www.kindpng.com/picc/m/108-1084414_small-location-svg-png-icon-free-download-location.png'
              />
            )}
            {activeKFR.intermodal && (
              <LegendItem
                title='Intermodal Terminals'
                iconSrc='https://www.kindpng.com/picc/m/108-1084414_small-location-svg-png-icon-free-download-location.png'
              />
            )}
            {activeKFR.roadTrainAssembly && (
              <LegendItem
                title='Road Train Assembly'
                iconSrc='https://www.kindpng.com/picc/m/108-1084414_small-location-svg-png-icon-free-download-location.png'
              />
            )}
            {activeKFR.keyRoad && (
              <LegendItem
                title='Key Road Routes'
                iconSrc='https://www.kindpng.com/picc/m/108-1084414_small-location-svg-png-icon-free-download-location.png'
              />
            )}
            {activeKFR.keyRail && (
              <LegendItem
                title='Key Rail Routes'
                iconSrc='https://www.kindpng.com/picc/m/108-1084414_small-location-svg-png-icon-free-download-location.png'
              />
            )}
            {activeKFR.secondaryRoad && (
              <LegendItem
                title='Secondary Road Routes'
                iconSrc='https://www.kindpng.com/picc/m/108-1084414_small-location-svg-png-icon-free-download-location.png'
              />
            )}
            {activeNSWAB.suburb && (
              <LegendItem
                title='Suburb'
                iconSrc='https://www.kindpng.com/picc/m/108-1084414_small-location-svg-png-icon-free-download-location.png'
              />
            )}
            {activeNSWAB.county && (
              <LegendItem
                title='County'
                iconSrc='https://www.kindpng.com/picc/m/108-1084414_small-location-svg-png-icon-free-download-location.png'
              />
            )}
            {activeNSWAB.parish && (
              <LegendItem
                title='Parish'
                iconSrc='https://www.kindpng.com/picc/m/108-1084414_small-location-svg-png-icon-free-download-location.png'
              />
            )}
            {activeNSWAB.stateForest && (
              <LegendItem
                title='State Forest'
                iconSrc='https://www.kindpng.com/picc/m/108-1084414_small-location-svg-png-icon-free-download-location.png'
              />
            )}
            {activeNSWAB.npwsReserve && (
              <LegendItem
                title='NPWS Reserve'
                iconSrc='https://www.kindpng.com/picc/m/108-1084414_small-location-svg-png-icon-free-download-location.png'
              />
            )}
            {activeNSWAB.localElectoral && (
              <LegendItem
                title='Local Government Areas'
                iconSrc='https://www.kindpng.com/picc/m/108-1084414_small-location-svg-png-icon-free-download-location.png'
              />
            )}
            {activeNSWAB.stateElectoral && (
              <LegendItem
                title='State Government Districts'
                iconSrc='https://www.kindpng.com/picc/m/108-1084414_small-location-svg-png-icon-free-download-location.png'
              />
            )}
            {activeNSWAB.federalElectoral && (
              <LegendItem
                title='Federal Government Divisions'
                iconSrc='https://www.kindpng.com/picc/m/108-1084414_small-location-svg-png-icon-free-download-location.png'
              />
            )}
            {activeProperty.pbBerth && (
              <LegendItem
                title='Port Botany Berth'
                iconSrc='https://www.kindpng.com/picc/m/108-1084414_small-location-svg-png-icon-free-download-location.png'
              />
            )}
            {activeProperty.pbGate && (
              <LegendItem
                title='Port Botany Gate'
                iconSrc='https://www.kindpng.com/picc/m/108-1084414_small-location-svg-png-icon-free-download-location.png'
              />
            )}
            {activeProperty.pkBerth && (
              <LegendItem
                title='Port Kembla Berth'
                iconSrc='https://www.kindpng.com/picc/m/108-1084414_small-location-svg-png-icon-free-download-location.png'
              />
            )}
            {activeProperty.tenancyLeaseAreas && (
              <LegendItem
                title='Tenancy Lease Areas'
                iconSrc='https://www.kindpng.com/picc/m/108-1084414_small-location-svg-png-icon-free-download-location.png'
              />
            )}
            {activeProperty.tenancyUnits && (
              <LegendItem
                title='Tenancy Units'
                iconSrc='https://www.kindpng.com/picc/m/108-1084414_small-location-svg-png-icon-free-download-location.png'
              />
            )}
            {activeProperty.leaseBoundary && (
              <LegendItem
                title='Lease Boundary'
                iconSrc='https://www.kindpng.com/picc/m/108-1084414_small-location-svg-png-icon-free-download-location.png'
              />
            )}
            {activeAssetMgt.breakwatersRevetments && (
              <LegendItem
                title='Breakwaters Revetments'
                iconSrc='https://www.kindpng.com/picc/m/108-1084414_small-location-svg-png-icon-free-download-location.png'
              />
            )}
            {activeAssetMgt.buildings && (
              <LegendItem
                title='Buildings'
                iconSrc='https://www.kindpng.com/picc/m/108-1084414_small-location-svg-png-icon-free-download-location.png'
              />
            )}
            {activeAssetMgt.heritage && (
              <LegendItem
                title='Heritage'
                iconSrc='https://www.kindpng.com/picc/m/108-1084414_small-location-svg-png-icon-free-download-location.png'
              />
            )}
            {activeAssetMgt.maritimeStructures && (
              <LegendItem
                title='Maritime Structures'
                iconSrc='https://www.kindpng.com/picc/m/108-1084414_small-location-svg-png-icon-free-download-location.png'
              />
            )}
            {activeAssetMgt.railNetwork && (
              <LegendItem
                title='Rail Network'
                iconSrc='https://www.kindpng.com/picc/m/108-1084414_small-location-svg-png-icon-free-download-location.png'
              />
            )}
            {activeAssetMgt.roadNetwork && (
              <LegendItem
                title='Road Network'
                iconSrc='https://www.kindpng.com/picc/m/108-1084414_small-location-svg-png-icon-free-download-location.png'
              />
            )}
            {activeAssetMgt.pkLabels && (
              <LegendItem
                title='Port Botany Labels'
                iconSrc='https://www.kindpng.com/picc/m/108-1084414_small-location-svg-png-icon-free-download-location.png'
              />
            )}
            {activeAssetMgt.pbLines && (
              <LegendItem
                title='Port Botany Lines'
                iconSrc='https://www.kindpng.com/picc/m/108-1084414_small-location-svg-png-icon-free-download-location.png'
              />
            )}
            {activeAssetMgt.pkLabels && (
              <LegendItem
                title='Port Kembla Labels'
                iconSrc='https://www.kindpng.com/picc/m/108-1084414_small-location-svg-png-icon-free-download-location.png'
              />
            )}
            {activeAssetMgt.pkLines && (
              <LegendItem
                title='Port Kembla Lines'
                iconSrc='https://www.kindpng.com/picc/m/108-1084414_small-location-svg-png-icon-free-download-location.png'
              />
            )}
          </div>
        </div>
      </SideWrapper>
      <div className='map-wrapper' ref={mapRef}></div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

const ToggleWrapper = styled.div`
  position: absolute;
  z-index: 3;
  right: 0px;
  top: 50%;
`;

const SideWrapper = styled.div`
  position: absolute;
  width: 400px;
  height: 100vh;
  z-index: 2;
  right: 0;
  top: 0;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.visible ? '1' : '0')};
  transition: visibility 1s, opacity 0.5s linear;

  .content {
    padding: 10px;

    .controls-wrapper {
      display: flex;
      flex-direction: column;

      .category {
        margin: 10px 0;

        h4 {
          color: #fff;
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
        color: #fff;
      }
    }
  }
`;
