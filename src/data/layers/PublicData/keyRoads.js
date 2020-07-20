const keyRoadsLayer = {
  url: "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/keyFreightRoutes/keyRoad.geojson",
  objectIdField: "ObjectID",
  popupTemplate: {
    title: "{Name}",
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

export default keyRoadsLayer;
