import { clusterConfig } from "../../utils/popup/cluster";
import { handlePopupContent } from "../../utils/popup/content-fields";

const heritageLayer = {
  url:
    "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/assets/json/HERITAGE.geojson",
  outFields: ["*"],
  objectIdField: "ObjectID",
  popupTemplate: {
    title: "Heritage",
    outfields: ["*"],
    content: handlePopupContent,
  },
  featureReduction: clusterConfig,
  renderer: {
    type: "simple",
    symbol: {
      type: "picture-marker",
      url:
        "https://dev-nsw-ports.pantheonsite.io/themes/nswports/js/src/images/marker--heritage.svg",
      width: "50px",
      height: "50px",
    },
  },
};

export default heritageLayer;