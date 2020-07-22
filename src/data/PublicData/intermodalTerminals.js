const intermodalTerminalsLayer = {
  url:
    "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/keyFreightRoutes/intermodalTerminals.geojson",
  objectIdField: "ObjectID",
  popupTemplate: {
    title: "{Name}",
  },
  renderer: {
    type: "simple",
    symbol: {
      type: "picture-marker",
      url:
        "https://dev-nsw-ports.pantheonsite.io/themes/nswports/js/src/images/marker--imt.svg",
      width: "50px",
      height: "50px",
    },
  },
};

export default intermodalTerminalsLayer;
