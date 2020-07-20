import { defineLayerSettings, layerSettings } from "../../../utils/layer-settings";

const localGovLayer = {
  url: "https://maps.six.nsw.gov.au/arcgis/rest/services/public/NSW_Administrative_Boundaries/MapServer/1",
  ...defineLayerSettings(["tom"], "councilname"),
};

export default localGovLayer;
