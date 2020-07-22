import { clusterConfig } from "../../utils/popup/cluster";

const PB_gatesLayer = {
  url:
    "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/gatenumbers/json/PB_GATENO.geojson",
  objectIdField: "ObjectID",
  featureReduction: clusterConfig,
  renderer: {
    type: "simple",
    symbol: {
      type: "picture-marker",
      url:
        "https://dev-nsw-ports.pantheonsite.io/themes/nswports/js/src/images/marker--gate.svg",
      width: "50px",
      height: "50px",
    },
  },
  popupTemplate: {
    title: "{GATE_NUM}",
  },
};

export default PB_gatesLayer;
