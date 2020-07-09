const PK_linesLayer = {
  url:
    'https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/channelplans/json/PK_LINES.geojson',
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
  renderer: {
    type: 'simple',
    symbol: {
      type: 'simple-fill',
      color: [255, 94, 2230, 1],
      style: 'simple',
      outline: {
        color: [255, 94, 223, 1],
        width: '5px',
      },
    },
  },
};

export default PK_linesLayer;
