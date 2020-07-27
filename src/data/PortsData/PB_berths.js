import { clusterConfig } from "../../utils/popup/cluster";
import { handlePopupContent } from "../../utils/popup/content-fields";

/* let PB_BERTHS = [
  "BD 10",
  "BD 12",
  "BD 11",
  "BD 9",
  "BD 7",
  "BD 8",
  "BULK LIQUIDS BERTH No 1",
  "BD 6",
  "BD 5",
  "HD 4",
  "HD 3",
  "HD 2",
  "HD 1",
  "BULK LIQUIDS BERTH No 2",
];

const uniqueValuesArray = new Array(PB_BERTHS.length);

const getUniqueValuesInfos = () => {
  PB_BERTHS.map((berth, i) => {
    uniqueValuesArray[i] = {
      type: "picture-marker",
      url: `https://dev-nsw-ports.pantheonsite.io/themes/nswports/js/src/images/marker--berth${berth}.svg`,
      width: "70px",
      height: "70px",
    };
  });

  return uniqueValuesArray;
}; */

const PB_berthLayer = {
  title: "Berths",
  url: "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/gatenumbers/json/PB_BERTH.geojson",
  outFields: ["*"],
  objectIdField: "ObjectID",
  popupTemplate: {
    title: "{TextString}",
    outfields: ["*"],
    content: handlePopupContent,
  },
  featureReduction: clusterConfig,
  renderer: {
    type: "simple",
    symbol: {
      type: "picture-marker",
      url: "https://dev-nsw-ports.pantheonsite.io/themes/nswports/js/src/images/marker--berth.svg",
      width: "50px",
      height: "50px",
    },
  },
};

export default PB_berthLayer;
