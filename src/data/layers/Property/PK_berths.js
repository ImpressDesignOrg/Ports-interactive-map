const symbol = {
  type: 'picture-marker',
  url: 'https://img.icons8.com/office/16/000000/wharf.png',
  width: '30px',
  height: '30px',
};

const PK_berthsLayer = {
  url: 'https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/gatenumbers/json/PK_BERTH.geojson',
  objectIdField: 'ObjectID',
  popupTemplate: {
    title: 'Port Kembla Berth',
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

export default PK_berthsLayer;
