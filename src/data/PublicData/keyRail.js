const keyRailLayer = {
  url: "http://gis.infrastructure.gov.au/infrastructure/rest/services/KeyFreightRoute/KeyFrightRoute/MapServer/6",
  objectIdField: "ObjectID",
  popupTemplate: {
    title: "Key Rail Route",
  },
  renderer: {
    type: "simple",
    symbol: {
      type: "simple-fill",
      color: [0, 38, 115, 1],
      style: "simple",
      outline: {
        color: [0, 38, 115, 1],
        width: "1px",
      },
    },
  },
};

export default keyRailLayer;
