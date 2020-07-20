const keyRailsLayer = {
  url: "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/keyFreightRoutes/keyRail.geojson",
  objectIdField: "ObjectID",
  popupTemplate: {
    title: "Rail Freight Network",
    content: [
      {
        type: "fields",
        fieldInfos: [
          {
            fieldName: "Name",
            label: "Name",
            visible: true,
          },
        ],
      },
    ],
  },
};

export default keyRailsLayer;
