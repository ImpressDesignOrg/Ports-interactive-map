const leaseBoundariesLayer = {
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
};

export default leaseBoundariesLayer;
