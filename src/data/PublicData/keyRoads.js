import { DATA_URL } from '../../constants';

const keyRoadsLayer = {
  url: `${DATA_URL}/keyFreightRoutes/keyRoad.geojson`,
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

export default keyRoadsLayer;
