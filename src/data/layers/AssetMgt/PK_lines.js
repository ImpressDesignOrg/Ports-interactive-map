const PK_linesLayer = {
  url: 'https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/channelplans/json/PK_LINES.geojson',
  objectIdField: 'ObjectID',
  popupTemplate: {
    title: 'Port Kembla Lines',
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

export default PK_linesLayer;
