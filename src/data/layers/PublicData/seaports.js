import { seaport } from "../../symbols";
import { clusterConfig } from "../../../utils/cluster-config";

const seaportsLayer = {
  url: "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/keyFreightRoutes/majorSeaports.geojson",
  objectIdField: "ObjectID",
  featureReduction: clusterConfig,
  renderer: {
    type: "simple",
    symbol: {
      type: "picture-marker",
      url: seaport,
      width: "50px",
      height: "50px",
    },
  },
  popupTemplate: {
    title: "{NAME}",
  },
};

export default seaportsLayer;
