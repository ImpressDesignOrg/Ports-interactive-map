import { handlePopupContent } from "../../utils/popup/content-fields";

const roadNetworkLayer = {
  url: "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/assets/json/ROADNETWORK.geojson",
  outFields: ["*"],
  objectIdField: "ObjectID",
  popupTemplate: {
    title: "NSW Ports road network",
    outfields: ["*"],
    content: handlePopupContent,
  },
  renderer: {
    type: "simple",
    symbol: {
      type: "simple-fill",
      color: [168, 0, 230, 1],
      style: "simple",
      outline: {
        color: [168, 0, 230, 1],
        width: "5px",
      },
    },
  },
};

export default roadNetworkLayer;
