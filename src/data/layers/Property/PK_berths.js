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
};

export default PK_berthsLayer;
