import { allLocations } from "../../symbols";

const allLocationsLayer = {
  url: "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/allLocations/index.geojson",
  objectIdField: "ObjectID",
  renderer: {
    type: "simple",
    symbol: {
      type: "picture-marker",
      url: allLocations,
      width: "50px",
      height: "50px",
    },
  },
};

export default allLocationsLayer;
