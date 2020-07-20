import { seaport } from "../../symbols";
import { clusterConfig } from "../../../utils/cluster-config";
import { layerSettings } from "../../../utils/layer-settings";

const seaportsLayer = {
  url: "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/keyFreightRoutes/majorSeaports.geojson",
  ...layerSettings,
  featureReduction: clusterConfig,
  renderer: {
    type: "simple",
    symbol: {
      type: "picture-marker",
      url: seaport,
      width: "50px",
      height: "50px",
    },
  },
};

export default seaportsLayer;
