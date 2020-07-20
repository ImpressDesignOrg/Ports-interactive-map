import { building } from "../../symbols";
import { clusterConfig } from "../../../utils/popup/cluster";
import { handlePopupContent } from "../../../utils/popup/content-fields";

const buildingsLayer = {
  url: "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/assets/json/BUILDINGS.geojson",
  outFields: ["*"],
  objectIdField: "ObjectID",
  popupTemplate: {
    title: "Building",
    outfields: ["*"],
    content: handlePopupContent,
  },
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
