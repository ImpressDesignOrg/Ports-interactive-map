export const PK_outerHabourLayer = {
  url: "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/PortsData/harbour/outerHarbour.geojson",
  objectIdField: "ObjectID",
  renderer: {
    type: "simple",
    symbol: {
      type: "picture-marker",
      url: "https://dev-nsw-ports.pantheonsite.io/themes/nswports/js/src/images/marker--carpark.svg",
      width: "50px",
      height: "50px",
    },
  },
};
