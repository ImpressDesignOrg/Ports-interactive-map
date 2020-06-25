const intermodalTerminalsLayer = {
  url:
    'http://gis.infrastructure.gov.au/infrastructure/rest/services/KeyFreightRoute/KFR/MapServer/2',
  objectIdField: 'ObjectID',
  popupTemplate: {
    title: 'Intermodal Terminal',
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'Name',
            label: 'Intermodal Terminal',
            visible: true,
          },
        ],
      },
    ],
  },
};

export default intermodalTerminalsLayer;
