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
    title: '{NAME}',
  },
};

export const roadNetworkLayer = {
  url: `${DATA_URL}/assets/json/ROADNETWORK.geojson`,
  ...settings,
  renderer: handleRenderer([168, 0, 230, 1]),
};

export const railNetworkLayer = {
  url: `${DATA_URL}/assets/json/RAILNETWORK.geojson`,
  ...settings,
  renderer: handleRenderer([139, 0, 0, 1]),
};
