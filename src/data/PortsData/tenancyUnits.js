import { DATA_URL } from '../../constants';

export const tenancyUnitsLayer = {
  url: `${DATA_URL}/leaseboundary/json/LEASEBOUNDARY.geojson`,
  objectIdField: 'ObjectID',
  renderer: {
    type: 'simple',
    symbol: {
      type: 'simple-fill',
      color: [51, 51, 204, 0],
      style: 'solid',
      outline: {
        color: [51, 51, 204, 0.9],
        width: 2,
      },
    },
  },
};
