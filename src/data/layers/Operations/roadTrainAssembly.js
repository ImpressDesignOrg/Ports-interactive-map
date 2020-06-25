const roadTrainAssemblyLayer = {
  url:
    'http://gis.infrastructure.gov.au/infrastructure/rest/services/KeyFreightRoute/KFR/MapServer/3',
  objectIdField: 'ObjectID',
  popupTemplate: {
    title: 'Road Train Assembly',
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'Name',
            label: 'Road Train Assembly',
            visible: true,
          },
        ],
      },
    ],
  },
};

export default roadTrainAssemblyLayer;
