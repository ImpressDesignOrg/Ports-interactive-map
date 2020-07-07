const secondaryRoadsLayer = {
  url: "http://gis.infrastructure.gov.au/infrastructure/rest/services/KeyFreightRoute/KFR/MapServer/4",
  objectIdField: "ObjectID",
  renderer: {
    type: "simple",
    symbol: {
      type: "simple-fill",
      color: [0, 77, 232, 1],
      style: "simple",
      outline: {
        color: [0, 77, 232, 1],
        width: "1px",
      },
    },
  },
  popupTemplate: {
    title: "Secondary Freight Road",
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

export default secondaryRoadsLayer;
