const maritimeStructuresLayer = {
  url: "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/assets/json/MARITIMESTRUCTURES.geojson",
  objectIdField: "ObjectID",
  popupTemplate: {
    title: "Maritime Structures",
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
  renderer: {
    type: "simple",
    symbol: {
      type: "simple-fill",
      color: [0, 117, 2, 1],
      style: "simple",
      outline: {
        color: [0, 117, 2, 1],
        width: "1px",
      },
    },
  },
};

export default maritimeStructuresLayer;
