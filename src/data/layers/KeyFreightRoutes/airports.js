const symbol = {
  type: 'picture-marker',
  url: 'https://img.icons8.com/android/50/000000/airplane-take-off.png',
  width: '30px',
  height: '30px',
};

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
    symbol,
  },
};

export default airportsLayer;
