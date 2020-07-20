import { layerSettings } from "../../../utils/layer-settings";

const leaseBoundariesLayer = {
  url:
    "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/leaseboundary/json/LEASEBOUNDARY.geojson",
  ...layerSettings,
  renderer: {
    type: "simple",
    symbol: {
      type: "simple-fill",
      color: [51, 51, 204, 0.9],
      style: "solid",
      outline: {
        color: "white",
        width: 1,
      },
    },
  },
};

export default leaseBoundariesLayer;
