const stateForestLayer = {
  url:
    'https://maps.six.nsw.gov.au/arcgis/rest/services/public/NSW_Administrative_Boundaries/MapServer/5',
  objectIdField: 'ObjectID',
  popupTemplate: {
    title: 'State Forest',
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'stateforestname',
            label: 'Name',
            visible: true,
          },
          {
            fieldName: 'shape_area',
            label: 'Area',
            visible: true,
          },
        ],
      },
    ],
  },
};

export default stateForestLayer;
