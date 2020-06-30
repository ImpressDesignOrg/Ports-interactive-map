const symbol = {
  type: 'picture-marker',
  url: 'https://img.icons8.com/dusk/16/000000/road-closure.png',
  width: '30px',
  height: '30px',
};

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
    symbol,
  },
};

export default PB_gatesLayer;
