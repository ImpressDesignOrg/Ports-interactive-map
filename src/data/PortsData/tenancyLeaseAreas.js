import { DATA_URL } from '../../constants';

export const tenancyLeaseAreasLayer = {
  url: `${DATA_URL}/tenancydata/json/TENANCY_LEASE_AREAS.geojson`,
  objectIdField: 'ObjectID',
  popupTemplate: {
    title: 'Tenancy Lease Area',
  },
  renderer: {
    type: 'simple',
    symbol: {
      type: 'simple-fill',
      color: [230, 152, 0, 1],
      style: 'solid',
      outline: {
        color: [56, 45, 25, 1],
        width: 1,
      },
    },
  },
};
