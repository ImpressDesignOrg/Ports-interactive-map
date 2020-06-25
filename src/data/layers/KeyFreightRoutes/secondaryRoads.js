const secondaryRoadsLayer = {
  url: 'http://gis.infrastructure.gov.au/infrastructure/rest/services/KeyFreightRoute/KFR/MapServer/4',
  objectIdField: 'ObjectID',
  popupTemplate: {
    title: 'Secondary Freight Road',
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

export default secondaryRoadsLayer;
