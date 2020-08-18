import { clusterConfig } from '../../utils/popup/cluster';
import { ASSET_URL, DATA_URL } from '../../constants';

const seaportsLayer = {
  url: `${DATA_URL}/keyFreightRoutes/majorSeaports.geojson`,
  objectIdField: 'ObjectID',
  popupTemplate: {
    title: '{name}',
  },
  featureReduction: clusterConfig,
  renderer: {
    type: 'simple',
    symbol: {
      type: 'picture-marker',
      url: `${ASSET_URL}marker--seaport.svg`,
      width: '50px',
      height: '50px',
    },
  },
};

export default seaportsLayer;
