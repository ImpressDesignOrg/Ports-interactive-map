import { berth } from "../../symbols";
import { clusterConfig } from "../../../utils/cluster-config";
import { handlePopupContent } from "../../../utils/popup-template";

const PK_berthsLayer = {
  url: "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/gatenumbers/json/PK_BERTH.geojson",
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
    title: "Port Kembla {TextString}",
    outfields: ["*"],
    content: handlePopupContent,
  },
};

export default PK_berthsLayer;
