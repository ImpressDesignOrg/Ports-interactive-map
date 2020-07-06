const tenancyUnitsLayer = {
  url: 'https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/tenancydata/json/TENANCY_UNITS.geojson',
  objectIdField: 'ObjectID',
  renderer: {
    type: 'simple',
    symbol: {
      type: 'simple-fill',
      color: [51, 51, 204, 0.9],
      style: 'solid',
      outline: {
        color: 'white',
        width: 1,
      },
    },
  },
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
};

export default tenancyUnitsLayer;
