import { seaport } from '../../symbols';

const seaportsLayer = {
  url:
    'http://gis.infrastructure.gov.au/infrastructure/rest/services/KeyFreightRoute/KFR/MapServer/2',
  objectIdField: 'ObjectID',
  renderer: {
    type: 'simple',
    symbol: {
      type: 'picture-marker',
      url: seaport,
      width: '50px',
      height: '50px',
    },
  },
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
