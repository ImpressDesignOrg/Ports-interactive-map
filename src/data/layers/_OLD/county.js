const countyLayer = {
  url:
    'https://maps.six.nsw.gov.au/arcgis/rest/services/public/NSW_Administrative_Boundaries/MapServer/3',
  objectIdField: 'ObjectID',
  popupTemplate: {
    title: 'County',
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'countyname',
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

export default countyLayer;
