import { clusterConfig } from '../../utils/popup/cluster';
import { handlePopupContent } from '../../utils/popup/content-fields';
import { ASSET_URL, DATA_URL } from '../../constants';

const PK_berthsLayer = {
  url: `${DATA_URL}/gatenumbers/json/PK_BERTH.geojson`,
  outFields: ['*'],
  objectIdField: 'ObjectID',
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
  popupTemplate: {
    title: 'Port Kembla {TextString}',
    outfields: ['*'],
    content: handlePopupContent,
  },
};

export default PK_berthsLayer;
