import { berth } from "../../symbols";
import { clusterConfig } from "../../../utils/cluster-config";
import { handlePopupContent } from "../../../utils/popup-template";

const PB_berthLayer = {
  url: "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/gatenumbers/json/PB_BERTH.geojson",
  outFields: ["*"],
  objectIdField: "ObjectID",
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
  popupTemplate: {
    title: "Port Botany {TextString}",
    outfields: ["*"],
    content: handlePopupContent,
  },
};

export default PB_berthLayer;
