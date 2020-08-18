import { ASSET_URL, DATA_URL } from '../../constants';

const intermodalTerminalsLayer = {
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

export default intermodalTerminalsLayer;
