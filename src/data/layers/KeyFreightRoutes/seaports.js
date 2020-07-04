const seaportsLayer = {
  url:
    'http://gis.infrastructure.gov.au/infrastructure/rest/services/KeyFreightRoute/KFR/MapServer/2',
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
