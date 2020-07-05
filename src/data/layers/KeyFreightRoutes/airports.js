const airportsLayer = {
  url:
    'http://gis.infrastructure.gov.au/infrastructure/rest/services/KeyFreightRoute/KFR/MapServer/1',
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
  renderer: {
    type: 'simple',
    symbol: {
      type: 'picture-marker',
      url: './images/marker--airports.png',
      width: '30px',
      height: '30px',
    },
  },
};

export default airportsLayer;
