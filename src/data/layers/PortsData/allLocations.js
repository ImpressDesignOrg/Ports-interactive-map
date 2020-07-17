import { allLocations, botany, kembla, cooksriver, enfield } from "../../symbols";

const symbolSettings = {
  type: "picture-marker",
  width: "80px",
  height: "80px",
};

export const allLocationsLayer = {
  url: "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/allLocations/index.geojson",
  objectIdField: "ObjectID",
  renderer: {
    type: "simple",
    symbol: {
      type: "picture-marker",
      url: allLocations,
      width: "80px",
      height: "80px",
    },
  },
};

export const botanyLayer = {
  url: "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/allLocations/botany.geojson",
  objectIdField: "ObjectID",
  renderer: {
    type: "simple",
    symbol: {
      ...symbolSettings,
      url: botany,
    },
  },
};

export const kemblaLayer = {
  url: "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/allLocations/kembla.geojson",
  objectIdField: "ObjectID",
  renderer: {
    type: "simple",
    symbol: {
      ...symbolSettings,
      url: kembla,
    },
  },
};

export const cooksLayer = {
  url: "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/allLocations/cooks.geojson",
  objectIdField: "ObjectID",
  renderer: {
    type: "simple",
    symbol: {
      ...symbolSettings,
      url: cooksriver,
    },
  },
};

export const enfieldLayer = {
  url: "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/allLocations/enfield.geojson",
  objectIdField: "ObjectID",
  renderer: {
    type: "simple",
    symbol: {
      ...symbolSettings,
      url: enfield,
    },
  },
};
