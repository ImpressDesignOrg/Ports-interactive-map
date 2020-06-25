const keyRailsLayer = {
  url: 'http://gis.infrastructure.gov.au/infrastructure/rest/services/KeyFreightRoute/KFR/MapServer/6',
  objectIdField: 'ObjectID',
  popupTemplate: {
    title: 'Rail Freight Network',
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

export default keyRailsLayer;
