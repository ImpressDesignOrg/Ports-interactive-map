import { heritage } from "../../symbols";
import { clusterConfig } from "../../../utils/cluster-config";
import { layerSettings } from "../../../utils/layer-settings";

const heritageLayer = {
  url: "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/assets/json/HERITAGE.geojson",
  ...layerSettings,
  featureReduction: clusterConfig,
  renderer: {
    type: "simple",
    symbol: {
      type: "picture-marker",
      url: heritage,
      width: "50px",
      height: "50px",
    },
  },
};

export default heritageLayer;
