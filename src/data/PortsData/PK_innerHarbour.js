export const PK_innerHabourLayer = {
  url: "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/PortsData/harbour/innerHarbour.geojson",
  objectIdField: "ObjectID",
  popupTemplate: {
    title: "{Asset name}",
  },
  renderer: {
    type: "simple",
    symbol: {
      type: "picture-marker",
      url: "https://dev-nsw-ports.pantheonsite.io/themes/nswports/js/src/images/marker--imt	.svg",
      width: "30px",
      height: "30px",
    },
  },
};
