import { berth } from "../../symbols";
import { clusterConfig } from "../../../utils/popup/cluster";
import { handlePopupContent } from "../../../utils/popup/content-fields";

const PB_berthLayer = {
  url: "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/gatenumbers/json/PB_BERTH.geojson",
  outFields: ["*"],
  objectIdField: "ObjectID",
  popupTemplate: {
    title: "{TextString}",
    outfields: ["*"],
    content: handlePopupContent,
  },
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
