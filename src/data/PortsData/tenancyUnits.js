import { handlePopupContent } from "../../utils/popup/content-fields";

const tenancyUnitsLayer = {
  url: "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/tenancydata/json/TENANCY_UNITS.geojson",
  outFields: ["*"],
  objectIdField: "ObjectID",
  popupTemplate: {
    title: "NSW Ports Lease Area",
    outfields: ["*"],
    content: handlePopupContent,
  },
  renderer: {
    type: "simple",
    symbol: {
      type: "simple-fill",
      color: [51, 51, 204, 0],
      style: "solid",
      outline: {
        color: [51, 51, 204, 0.9],
        width: 2,
      },
    },
  },
};

export default tenancyUnitsLayer;
