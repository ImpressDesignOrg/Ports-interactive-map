import { intermodalTerminal } from "../../symbols";
import { layerSettings } from "../../../utils/layer-settings";

const intermodalTerminalsLayer = {
  url:
    "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/keyFreightRoutes/intermodalTerminals.geojson",
  ...layerSettings,
  renderer: {
    type: "simple",
    symbol: {
      type: "picture-marker",
      url: intermodalTerminal,
      width: "50px",
      height: "50px",
    },
  },
};

export default intermodalTerminalsLayer;
