const PK_labelsLayer = {
  url:
    'https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/channelplans/json/PK_LABELS.geojson',
  objectIdField: 'ObjectID',
  popupTemplate: {
    title: 'Port Kembla Labels',
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'TextString',
            label: 'Name',
            visible: true,
          },
        ],
      },
    ],
  },
};

export default PK_labelsLayer;
