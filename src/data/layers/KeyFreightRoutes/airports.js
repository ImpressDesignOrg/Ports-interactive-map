import { AIRPORT_SYMBOL } from '../../symbols';

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
    symbol: AIRPORT_SYMBOL,
  },
};

export default airportsLayer;
