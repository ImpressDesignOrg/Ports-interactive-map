import { berth } from "../../symbols";
import { clusterConfig } from "../../../utils/cluster-config";
import { layerSettings } from "../../../utils/layer-settings";

const PB_berthLayer = {
  url: "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/gatenumbers/json/PB_BERTH.geojson",
  ...layerSettings,
  featureReduction: clusterConfig,
  renderer: {
    type: "simple",
    symbol: {
      type: "picture-marker",
      url: berth,
      width: "50px",
      height: "50px",
    },
  },
};

export default PB_berthLayer;
