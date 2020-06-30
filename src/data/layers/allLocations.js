const symbol = {
  type: 'picture-marker', // autocasts as new PictureMarkerSymbol()
  url: 'https://img.icons8.com/officel/16/000000/marker.png',
  width: '30px',
  height: '30px',
};

const allLocationsLayer = {
  url: 'https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/allLocations/index.geojson',
  objectIdField: 'ObjectID',
  popupTemplate: {
    title: 'NSW Ports Locations',
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'NAME',
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

export default allLocationsLayer;
