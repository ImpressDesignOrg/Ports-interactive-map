import { building } from "../../symbols";

const buildingsLayer = {
  url: "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/assets/json/BUILDINGS.geojson",
  objectIdField: "ObjectID",
  renderer: {
    type: "simple",
    symbol: {
      type: "picture-marker",
      url: building,
      width: "50px",
      height: "50px",
    },
  },
  popupTemplate: {
    title: "Building",
    content: [
      {
        type: "fields",
        fieldInfos: [
          {
            fieldName: "ASSET_NO",
            label: "Asset Number",
            visible: true,
          },
          {
            fieldName: "ASS_NAME",
            label: "Asset Name",
            visible: true,
          },
          {
            fieldName: "ASS_CLASS",
            label: "Asset Class",
            visible: true,
          },
          {
            fieldName: "ASS_LOC",
            label: "Asset Location",
            visible: true,
          },
        ],
      },
    ],
  },
};

export default buildingsLayer;