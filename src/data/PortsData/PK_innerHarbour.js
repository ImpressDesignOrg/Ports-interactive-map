import { ASSET_URL, DATA_URL } from '../../constants';

export const PK_innerHabourLayer = {
  url: `${DATA_URL}PortsData/harbour/innerHarbour.geojson`,
  objectIdField: 'ObjectID',
  renderer: {
    type: 'simple',
    symbol: {
      type: 'picture-marker',
      url: `${ASSET_URL}marker--imt.svg`,
      width: '30px',
      height: '30px',
    },
  },
};
