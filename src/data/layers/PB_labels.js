const PB_labelsLayer = {
  url:
    'https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/channelplans/json/PB_LABELS.geojson',
  objectIdField: 'ObjectID',
  popupTemplate: {
    title: 'Port Botany Labels',
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

export default PB_labelsLayer;
