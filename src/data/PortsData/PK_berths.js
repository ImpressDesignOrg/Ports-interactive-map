import { clusterConfig } from "../../utils/popup/cluster";
import { handlePopupContent } from "../../utils/popup/content-fields";
import BerthIcon from "../../images/marker--berth.svg";

const PK_berthsLayer = {
  url:
    "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/gatenumbers/json/PK_BERTH.geojson",
  outFields: ["*"],
  objectIdField: "ObjectID",
  featureReduction: clusterConfig,
  renderer: {
    type: "simple",
    symbol: {
      type: "picture-marker",
      url:
        "https://dev-nsw-ports.pantheonsite.io/themes/nswports/js/src/images/marker--berth.svg",
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
