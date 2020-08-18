import { clusterConfig } from '../../utils/popup/cluster';
import { handlePopupContent } from '../../utils/popup/content-fields';
import { ASSET_URL, DATA_URL } from '../../constants';

const settings = {
  title: 'Berths',
  outFields: ['*'],
  objectIdField: 'ObjectID',
  featureReduction: clusterConfig,
  popupTemplate: {
    title: '{TextString}',
    content: handlePopupContent,
  },
  renderer: {
    type: 'simple',
    symbol: {
      type: 'picture-marker',
      url: `${ASSET_URL}marker--building.svg`,
      width: '50px',
      height: '50px',
    },
  },
};

export const PB_berthsLayer = {
  url: `${DATA_URL}/gatenumbers/json/PB_BERTH.geojson`,
  ...settings,
};

export const PK_berthsLayer = {
  url: `${DATA_URL}/gatenumbers/json/PK_BERTH.geojson`,
  ...settings,
};
