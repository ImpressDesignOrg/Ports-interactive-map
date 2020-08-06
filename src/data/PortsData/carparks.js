import { clusterConfig } from "../../utils/popup/cluster";

export const carparksLayer = {
  url: "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/PortsData/carparks/carparks.geojson",
  objectIdField: "ObjectID",
  popupTemplate: {
    title: "{Asset name}",
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
