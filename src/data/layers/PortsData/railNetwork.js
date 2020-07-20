import { handlePopupContent } from "../../../utils/popup/content-fields";

const railNetworkLayer = {
  url: "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/assets/json/RAILNETWORK.geojson",
  outFields: ["*"],
  objectIdField: "ObjectID",
  popupTemplate: {
    title: "Rail Network",
    outfields: ["*"],
    content: handlePopupContent,
  },
};

export default railNetworkLayer;
