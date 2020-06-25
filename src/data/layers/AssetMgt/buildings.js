const buildingsLayer = {
  url: 'https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/assets/json/BUILDINGS.geojson',
  objectIdField: 'ObjectID',
  popupTemplate: {
    title: 'Buildings',
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'ASSET_NO',
            label: 'Asset Number',
            visible: true,
          },
          {
            fieldName: 'ASS_NAME',
            label: 'Asset Name',
            visible: true,
          },
          {
            fieldName: 'ASS_CLASS',
            label: 'Asset Class',
            visible: true,
          },
          {
            fieldName: 'ASS_LOC',
            label: 'Asset Location',
            visible: true,
          },
        ],
      },
    ],
  },
};

export default buildingsLayer;