const PB_linesLayer = {
  url: 'https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/channelplans/json/PB_LINES.geojson',
  objectIdField: 'ObjectID',
  popupTemplate: {
    title: 'Port Botany Lines',
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'autocad_la',
            label: 'Type',
            visible: true,
          },
        ],
      },
    ],
  },
};

export default PB_linesLayer;
