import { seaport } from "../../symbols";

const seaportsLayer = {
  url: "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/keyFreightRoutes/majorSeaports.geojson",
  objectIdField: "ObjectID",
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