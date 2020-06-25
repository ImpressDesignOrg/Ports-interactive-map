const airportsLayer = {
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
};

export default airportsLayer;
