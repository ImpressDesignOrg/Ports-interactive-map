import { clusterConfig } from "../../utils/popup/cluster";
import { handlePopupContent } from "../../utils/popup/content-fields";

export const carparksLayer = {
  url: "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/PortsData/carparks/carparks.geojson",
  outFields: ["*"],
  objectIdField: "ObjectID",
  popupTemplate: {
    title: "Parking",
    outfields: ["*"],
    content: handlePopupContent,
  },
  featureReduction: clusterConfig,
  renderer: {
    type: "simple",
    symbol: {
      type: "picture-marker",
      url: "https://dev-nsw-ports.pantheonsite.io/themes/nswports/js/src/images/marker--carpark.svg",
      width: "50px",
      height: "50px",
    },
  },
};
