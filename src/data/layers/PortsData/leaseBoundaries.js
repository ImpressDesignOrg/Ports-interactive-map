const leaseBoundariesLayer = {
  url:
    'https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/leaseboundary/json/LEASEBOUNDARY.geojson',
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
};

export default leaseBoundariesLayer;
