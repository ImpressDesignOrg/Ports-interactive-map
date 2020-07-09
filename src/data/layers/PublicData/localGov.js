const localGovLayer = {
  url:
    'https://maps.six.nsw.gov.au/arcgis/rest/services/public/NSW_Administrative_Boundaries/MapServer/1',
  objectIdField: 'ObjectID',
  popupTemplate: {
    title: 'Local Government Area',
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'lganame',
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

export default localGovLayer;
