const secondaryRoadsLayer = {
  url: "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/keyFreightRoutes/secondaryRoad.geojson",
  objectIdField: "ObjectID",
  popupTemplate: {
    title: "{Name}",
  },
  renderer: {
    type: "simple",
    symbol: {
      type: "simple-fill",
      color: [0, 77, 232, 1],
      style: "simple",
      outline: {
        color: [0, 77, 232, 1],
        width: "1px",
      },
    },
  },
};

export default secondaryRoadsLayer;
