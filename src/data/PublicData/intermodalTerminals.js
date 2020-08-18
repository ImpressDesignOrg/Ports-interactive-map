import { ASSET_URL, DATA_URL } from '../../constants';

export const intermodalTerminalsLayer = {
  url: `${DATA_URL}/keyFreightRoutes/intermodalTerminals.geojson`,
  objectIdField: 'ObjectID',
  popupTemplate: {
    title: '{Name}',
  },
  renderer: {
    type: 'simple',
    symbol: {
      type: 'picture-marker',
      url: `${ASSET_URL}marker--imt.svg`,
      width: '50px',
      height: '50px',
    },
  },
};
