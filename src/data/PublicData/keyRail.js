import { DATA_URL } from '../../constants';

export const keyRailLayer = {
  url: `${DATA_URL}/keyFreightRoutes/keyRail.geojson`,
  objectIdField: 'ObjectID',
  popupTemplate: {
    title: '{Name}',
  },
  renderer: {
    type: 'simple',
    symbol: {
      type: 'simple-fill',
      color: [0, 38, 115, 1],
      style: 'simple',
      outline: {
        color: [0, 38, 115, 1],
        width: '1px',
      },
    },
  },
};
