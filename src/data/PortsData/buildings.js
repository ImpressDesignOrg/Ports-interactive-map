import { clusterConfig } from "../../utils/popup/cluster";
// import { handlePopupContent } from "../../utils/popup/content-fields";

const handlePopupContent = (feature) => {
  const dataObj = feature.graphic.attributes;

  let htmlString = "";

  // iterate over the metadata object and add all non-null values to as a new table in a row
  Object.keys(dataObj).forEach((key) => {
    const value = dataObj[key];

    // we don't need these keys in the popup
    // the returned string only contains non-null values
    if (value !== null && key !== "Angle" && key !== "ObjectID" && key !== "TextString" && key !== "Asset Name") {
      htmlString = htmlString + `<tr><td>${key}</td><td>${value}</td></tr>`;
    }
  });

  return `<table style="width:100%" class="esri-widget__table">${htmlString}</table>`;
};

const buildingsLayer = {
  url: "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/assets/json/BUILDINGS.geojson",
  outFields: ["*"],
  objectIdField: "ObjectID",
  popupTemplate: {
    title: "{Asset Name}",
    outfields: ["*"],
    content: handlePopupContent,
  },
  featureReduction: clusterConfig,
  renderer: {
    type: "simple",
    symbol: {
      type: "picture-marker",
      url: "https://dev-nsw-ports.pantheonsite.io/themes/nswports/js/src/images/marker--building.svg",
      width: "50px",
      height: "50px",
    },
  },
};

export default buildingsLayer;
