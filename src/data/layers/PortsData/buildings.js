import { building } from "../../symbols";
import { clusterConfig } from "../../../utils/cluster-config";
import { layerSettings } from "../../../utils/layer-settings";

const buildingsLayer = {
  url: "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/assets/json/BUILDINGS.geojson",
  ...layerSettings,
  featureReduction: clusterConfig,
  renderer: {
    type: "simple",
    symbol: {
      type: "picture-marker",
      url: building,
      width: "50px",
      height: "50px",
    },
  },
};

export default buildingsLayer;
