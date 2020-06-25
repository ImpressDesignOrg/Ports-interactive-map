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
};

export default PB_gatesLayer;
