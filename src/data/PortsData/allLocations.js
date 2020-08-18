import { ASSET_URL, DATA_URL } from '../../constants';

const symbolSettings = {
  type: 'picture-marker',
  width: '80px',
  height: '80px',
};

export const allLocationsLayer = {
  url: `${DATA_URL}/allLocations/index.geojson`,
  objectIdField: 'ObjectID',
  renderer: {
    type: 'simple',
    symbol: {
      ...symbolSettings,
      url: `${ASSET_URL}marker--nsw-ports.svg`,
    },
  },
};

export const botanyLayer = {
  url: `${DATA_URL}/allLocations/botany.geojson`,
  objectIdField: 'ObjectID',
  renderer: {
    type: 'simple',
    symbol: {
      ...symbolSettings,
      url: `${ASSET_URL}marker--botany.svg`,
    },
  },
};

export const kemblaLayer = {
  url: `${DATA_URL}/allLocations/kembla.geojson`,
  objectIdField: 'ObjectID',
  renderer: {
    type: 'simple',
    symbol: {
      ...symbolSettings,
      url: `${ASSET_URL}marker--kembla.svg`,
    },
  },
};

export const cooksLayer = {
  url: `${DATA_URL}/allLocations/cooks.geojson`,
  objectIdField: 'ObjectID',
  renderer: {
    type: 'simple',
    symbol: {
      ...symbolSettings,
      url: `${ASSET_URL}marker--cooks.svg`,
    },
  },
};

export const enfieldLayer = {
  url: `${DATA_URL}/allLocations/enfield.geojson`,
  objectIdField: 'ObjectID',
  renderer: {
    type: 'simple',
    symbol: {
      ...symbolSettings,
      url: `${ASSET_URL}marker--enfield.svg`,
    },
  },
};
