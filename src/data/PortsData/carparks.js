import { clusterConfig } from '../../utils/popup/cluster';
import { ASSET_URL, DATA_URL } from '../../constants';

export const carparksLayer = {
  url: `${DATA_URL}PortsData/carparks/carparks.geojson`,
  objectIdField: 'ObjectID',
  popupTemplate: {
    title: '{Asset name}',
  },
  featureReduction: clusterConfig,
  renderer: {
    type: 'simple',
    symbol: {
      type: 'picture-marker',
      url: `${ASSET_URL}marker--carpark.svg`,
      width: '50px',
      height: '50px',
    },
  },
};
