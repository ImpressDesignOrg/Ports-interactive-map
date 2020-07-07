import { airport } from "../../symbols";

const airportsLayer = {
  url: "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/keyFreightRoutes/majorAirports.geojson",
  objectIdField: "ObjectID",
  renderer: {
    type: "simple",
    symbol: {
      type: "picture-marker",
      url: airport,
      width: "50px",
      height: "50px",
    },
  },
  popupTemplate: {
    title: "{Name}",
  },
};

export default airportsLayer;
