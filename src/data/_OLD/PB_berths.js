import { clusterConfig } from '../../utils/popup/cluster';
import { handlePopupContent } from '../../utils/popup/content-fields';
import { ASSET_URL, DATA_URL } from '../../constants';

export const PB_berthLayer = {
  title: 'Berths',
  url: `${DATA_URL}/gatenumbers/json/PB_BERTH.geojson`,
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
      url: `${ASSET_URL}marker--berth.svg`,
      width: '50px',
      height: '50px',
    },
  },
};
