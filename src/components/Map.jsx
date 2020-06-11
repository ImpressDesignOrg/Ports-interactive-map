import React, { useState, useEffect, useRef } from 'react';
import { loadModules, setDefaultOptions } from 'esri-loader';
import styled from 'styled-components';
import { Button, Select } from 'antd';

// before loading the modules for the first time,
// also lazy load the CSS for the version of
// the script that you're loading from the CDN
setDefaultOptions({ css: true });

const { Option, OptGroup } = Select;

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

  const handleFreightRoutes = (selected) => {
    // TODO set all to false

    selected.map((v) => setActiveKFR({ ...activeKFR, [v]: true }));
  };
  const handleNSWAdmin = (selected) => {
    // TODO set all to false

    selected.map((v) => setActiveNSWAB({ ...activeNSWAB, [v]: true }));
  };
  const handleProperty = (selected) => {
    // TODO set all to false

    selected.map((v) => setActiveProperty({ ...activeProperty, [v]: true }));
  };
  const handleAssetMgt = (selected) => {
    // TODO set all to false

    selected.map((v) => setActiveAssetMgt({ ...activeAssetMgt, [v]: true }));
  };

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
      if (activeProperty.breakwatersRevetments) {
      }
      if (activeProperty.buildings) {
      }
      if (activeProperty.heritage) {
      }
      if (activeProperty.maritimeStructures) {
      }
      if (activeProperty.railNetwork) {
      }
      if (activeProperty.roadNetwork) {
      }
      if (activeProperty.pbLabels) {
      }
      if (activeProperty.pbLines) {
      }
      if (activeProperty.pkLabels) {
      }
      if (activeProperty.pkLines) {
      }

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
              <Option value='stateElectoral'>State Electoral Districts</Option>
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
                <Option value='maritimeStructures'>Maritime Structures</Option>
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
      </LegendContainer>
    </div>
  );
}

const LegendContainer = styled.div`
  border: 2px dotted blue;

  width: 500px;
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
  height: 20px;
`;
const InactiveButton = styled(Button)`
  height: 20px;
`;
