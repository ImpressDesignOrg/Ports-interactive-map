const symbolSettings = {
  type: "picture-marker",
  width: "80px",
  height: "80px",
};

export const allLocationsLayer = {
  url:
    "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/allLocations/index.geojson",
  objectIdField: "ObjectID",
  renderer: {
    type: "simple",
    symbol: {
      ...symbolSettings,
      url:
        "https://dev-nsw-ports.pantheonsite.io/themes/nswports/js/src/images/marker--nsw-ports.svg",
    },
  },
};

export const botanyLayer = {
  url:
    "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/allLocations/botany.geojson",
  objectIdField: "ObjectID",
  renderer: {
    type: "simple",
    symbol: {
      ...symbolSettings,
      url:
        "https://dev-nsw-ports.pantheonsite.io/themes/nswports/js/src/images/marker--botany.svg",
    },
  },
};

export const kemblaLayer = {
  url:
    "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/allLocations/kembla.geojson",
  objectIdField: "ObjectID",
  renderer: {
    type: "simple",
    symbol: {
      ...symbolSettings,
      url:
        "https://dev-nsw-ports.pantheonsite.io/themes/nswports/js/src/images/marker--kembla.svg",
    },
  },
};

export const cooksLayer = {
  url:
    "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/allLocations/cooks.geojson",
  objectIdField: "ObjectID",
  renderer: {
    type: "simple",
    symbol: {
      ...symbolSettings,
      url:
        "https://dev-nsw-ports.pantheonsite.io/themes/nswports/js/src/images/marker--cooks.svg",
    },
  },
};

export const enfieldLayer = {
  url:
    "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/allLocations/enfield.geojson",
  objectIdField: "ObjectID",
  renderer: {
    type: "simple",
    symbol: {
      ...symbolSettings,
      url:
        "https://dev-nsw-ports.pantheonsite.io/themes/nswports/js/src/images/marker--enfield.svg",
    },
  },
};
