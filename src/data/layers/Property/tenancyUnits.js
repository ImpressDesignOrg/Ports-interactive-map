const tenancyUnitsLayer = {
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
  renderer: {
    type: 'simple', // autocasts as new SimpleRenderer()
    symbol: {
      type: 'simple-fill', // autocasts as new SimpleFillSymbol()
      color: [51, 51, 204, 0.9],
      style: 'solid',
      outline: {
        // autocasts as new SimpleLineSymbol()
        color: 'white',
        width: 1,
      },
    },
  },
};

export default tenancyUnitsLayer;
