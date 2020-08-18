import { clusterConfig } from '../../utils/popup/cluster';
import { ASSET_URL, DATA_URL } from '../../constants';

const PB_gatesLayer = {
  url: `${ASSET_URL}/gatenumbers/json/PB_GATENO.geojson`,
  objectIdField: 'ObjectID',
  featureReduction: clusterConfig,
  renderer: {
    type: 'simple',
    symbol: {
      type: 'picture-marker',
      url: `${DATA_URL}marker--gate.svg`,
      width: '50px',
      height: '50px',
    },
  },
  popupTemplate: {
    title: '{GATE_NUM}',
  },
};

export default PB_gatesLayer;
