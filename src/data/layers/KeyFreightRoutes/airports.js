import { airport } from '../../symbols';

const airportsLayer = {
  url:
    'http://gis.infrastructure.gov.au/infrastructure/rest/services/KeyFreightRoute/KFR/MapServer/1',
  objectIdField: 'ObjectID',
  renderer: {
    type: 'simple',
    symbol: {
      type: 'picture-marker',
      url: airport,
      width: '50px',
      height: '50px',
    },
  },
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
