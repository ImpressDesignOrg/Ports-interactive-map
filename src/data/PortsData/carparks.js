import { clusterConfig } from '../../utils/popup/cluster';
import { handlePopupContent } from '../../utils/popup/content-fields';
import { ASSET_URL, DATA_URL } from '../../constants';

export const carparksLayer = {
  url: `${DATA_URL}PortsData/carparks/carparks.geojson`,
  outFields: ['*'],
  objectIdField: 'ObjectID',
  popupTemplate: {
    title: '{TextString}',
    content: handlePopupContent,
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
