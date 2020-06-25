const keyRoadsLayer = {
  url: 'http://gis.infrastructure.gov.au/infrastructure/rest/services/KeyFreightRoute/KFR/MapServer/5',
  objectIdField: 'ObjectID',
  popupTemplate: {
    title: 'Key Freight Road',
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'Name',
            label: 'Name',
            visible: true,
          },
        ],
      },
    ],
  },
};

export default keyRoadsLayer;
