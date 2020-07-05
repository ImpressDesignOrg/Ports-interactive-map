const allLocationsLayer = {
  url:
    'https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/allLocations/index.geojson',
  objectIdField: 'ObjectID',
  renderer: {
    type: 'simple',
    symbol: {
      type: 'picture-marker',
      url: 'https://f399e9-5fsa23.netlify.app/images/marker--airports.svg',
      width: '50px',
      height: '50px',
    },
  },
  popupTemplate: {
    title: 'NSW Ports Locations',
    id: 'zoom-to',
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
};

export default allLocationsLayer;
