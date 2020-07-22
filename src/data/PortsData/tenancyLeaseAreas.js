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
};

export default tenancyLeaseAreasLayer;
