const symbol = {
  type: 'picture-marker',
  url: 'https://img.icons8.com/office/16/000000/wharf.png',
  width: '30px',
  height: '30px',
};

const PB_berthLayer = {
  url:
    'https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/gatenumbers/json/PB_BERTH.geojson',
  objectIdField: 'ObjectID',
  popupTemplate: {
    title: 'Port Botany Berth',
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
  renderer: {
    type: 'simple',
    symbol,
  },
};

export default PB_berthLayer;
