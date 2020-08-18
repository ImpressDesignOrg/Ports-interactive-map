import { DATA_URL } from '../../constants';

export const railNetworkLayer = {
  url: `${DATA_URL}/assets/json/RAILNETWORK.geojson`,
  objectIdField: 'ObjectID',
  popupTemplate: {
    title: 'Rail Network',
  },
  renderer: {
    type: 'simple',
    symbol: {
      type: 'simple-fill',
      color: [139, 0, 0, 1],
      style: 'simple',
      outline: {
        color: [139, 0, 0, 1],
        width: '5px',
      },
    },
  },
};
