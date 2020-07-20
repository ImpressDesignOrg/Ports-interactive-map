import { roadTrainAssembly } from "../../symbols";
import { handlePopupContent } from "../../../utils/popup-template";

const roadTrainAssemblyLayer = {
  url:
    "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/keyFreightRoutes/roadTrainAssembly.geojson",
  outFields: ["*"],
  objectIdField: "ObjectID",
  popupTemplate: {
    title: "RTA",
    outfields: ["*"],
    content: handlePopupContent,
  },
  renderer: {
    type: "simple",
    symbol: {
      type: "picture-marker",
      url: roadTrainAssembly,
      width: "50px",
      height: "50px",
    },
  },
};

export default roadTrainAssemblyLayer;
