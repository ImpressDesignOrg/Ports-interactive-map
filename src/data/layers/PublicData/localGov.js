import { handlePopupContent } from "../../../utils/popup/content-fields";

const localGovLayer = {
  url: "https://maps.six.nsw.gov.au/arcgis/rest/services/public/NSW_Administrative_Boundaries/MapServer/1",
  outFields: ["*"],
  objectIdField: "ObjectID",
  popupTemplate: {
    title: "Local Government Area",
    outfields: ["*"],
    content: handlePopupContent,
  },
};

export default localGovLayer;
