import { DATA_URL } from '../../constants';

export const roadNetworkLayer = {
  url: `${DATA_URL}/assets/json/ROADNETWORK.geojson`,
  objectIdField: 'ObjectID',
  popupTemplate: {
    title: '{NAME}',
  },
  renderer: {
    type: 'simple',
    symbol: {
      type: 'simple-fill',
      color: [168, 0, 230, 1],
      style: 'simple',
      outline: {
        color: [168, 0, 230, 1],
        width: '5px',
      },
    },
  },
};
