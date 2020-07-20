import { roadTrainAssembly } from "../../symbols";
import { layerSettings } from "../../../utils/layer-settings";

const roadTrainAssemblyLayer = {
  url:
    "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/keyFreightRoutes/roadTrainAssembly.geojson",
  ...layerSettings,
  renderer: {
    type: "simple",
    symbol: {
      type: "picture-marker",
      url: roadTrainAssembly,
      width: "50px",
      height: "50px",
    },
  },
};

export default roadTrainAssemblyLayer;
