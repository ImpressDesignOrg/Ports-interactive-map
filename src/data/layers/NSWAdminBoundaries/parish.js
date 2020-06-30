const parishLayer = {
  url: 'https://maps.six.nsw.gov.au/arcgis/rest/services/public/NSW_Administrative_Boundaries/MapServer/4',
  objectIdField: 'ObjectID',
  popupTemplate: {
    title: 'Parish',
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'parishname',
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

export default parishLayer;
