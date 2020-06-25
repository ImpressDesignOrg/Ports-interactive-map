const seaportsLayer = {
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
};

export default seaportsLayer;
