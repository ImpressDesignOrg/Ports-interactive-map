import { clusterConfig } from "../../utils/popup/cluster";

const seaportsLayer = {
  url:
    "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/keyFreightRoutes/majorSeaports.geojson",
  objectIdField: "ObjectID",
  popupTemplate: {
    title: "{name}",
  },
  featureReduction: clusterConfig,
  renderer: {
    type: "simple",
    symbol: {
      type: "picture-marker",
      url:
        "https://dev-nsw-ports.pantheonsite.io/themes/nswports/js/src/images/marker--seaport.svg",
      width: "50px",
      height: "50px",
    },
  },
};

export default seaportsLayer;
