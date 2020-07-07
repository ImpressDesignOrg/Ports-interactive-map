const keyRoadsLayer = {
  url: "http://gis.infrastructure.gov.au/infrastructure/rest/services/KeyFreightRoute/KFR/MapServer/5",
  objectIdField: "ObjectID",
  renderer: {
    type: "simple",
    symbol: {
      type: "simple-fill",
      color: [0, 38, 115, 1],
      style: "simple",
      outline: {
        color: [0, 38, 115, 1],
        width: "1px",
      },
    },
  },
  popupTemplate: {
    title: "Key Freight Road",
    content: [
      {
        type: "fields",
        fieldInfos: [
          {
            fieldName: "Name",
            label: "Name",
            visible: true,
          },
        ],
      },
    ],
  },
};

export default keyRoadsLayer;
