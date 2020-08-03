import { handlePopupContent } from "../../utils/popup/content-fields";

const tenancyLeaseAreasLayer = {
  url:
    "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/tenancydata/json/TENANCY_LEASE_AREAS.geojson",
  outFields: ["*"],
  objectIdField: "ObjectID",
  popupTemplate: {
    title: "Tenancy Lease Area",
    outfields: ["*"],
    content: handlePopupContent,
  },
  renderer: {
    type: "simple",
    symbol: {
      type: "simple-fill",
      color: [230, 152, 0, 1],
      style: "solid",
      outline: {
        color: [56, 45, 25, 1],
        width: 1,
      },
    },
  },
};

export default tenancyLeaseAreasLayer;
