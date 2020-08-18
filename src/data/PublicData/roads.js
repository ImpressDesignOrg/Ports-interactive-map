import { DATA_URL } from '../../constants';

const handleRenderer = (color) => {
  return {
    type: 'simple',
    symbol: {
      type: 'simple-fill',
      color: color,
      style: 'simple',
      outline: {
        color: color,
        width: '5px',
      },
    },
  };
};

const settings = {
  objectIdField: 'ObjectID',
  popupTemplate: {
    title: '{Name}',
  },
};

export const keyRoadsLayer = {
  url: `${DATA_URL}/keyFreightRoutes/keyRoad.geojson`,
  ...settings,
  renderer: handleRenderer([0, 38, 115, 1]),
};

export const secondaryRoadsLayer = {
  url: `${DATA_URL}/keyFreightRoutes/secondaryRoad.geojson`,
  ...settings,
  renderer: handleRenderer([0, 77, 232, 1]),
};
