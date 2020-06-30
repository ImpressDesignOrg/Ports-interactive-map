const PB_gatesLayer = {
  url: 'https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/gatenumbers/json/PB_GATENO.geojson',
  objectIdField: 'ObjectID',
  popupTemplate: {
    title: 'Port Botany Gate Number',
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'GATE_NUM',
            label: 'Gate Number',
            visible: true,
          },
        ],
      },
    ],
  },
  renderer: {
    type: 'simple',
    symbol: {
      type: 'simple-marker',
      path:
        'M55.9 28.3c.1-.8.1-1.5.1-2.3a24 24 0 0 0-48 0c0 .8 0 1.6.1 2.3v.3C10.1 47.6 32 61 32 61s21.9-13.6 23.8-32.3z',
    },
  },
};

export default PB_gatesLayer;
