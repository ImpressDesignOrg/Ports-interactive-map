const tenancyUnitsLayer = {
  url:
    "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/leaseboundary/json/LEASEBOUNDARY.geojson",
  objectIdField: "ObjectID",
  renderer: {
    type: "simple",
    symbol: {
      type: "simple-fill",
      color: [51, 51, 204, 0],
      style: "solid",
      outline: {
        color: [51, 51, 204, 0.9],
        width: 2,
      },
    },
  },
};

export default tenancyUnitsLayer;
