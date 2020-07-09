const suburbLayer = {
  url:
    'https://maps.six.nsw.gov.au/arcgis/rest/services/public/NSW_Administrative_Boundaries/MapServer/0',
  objectIdField: 'ObjectID',
  popupTemplate: {
    title: 'Suburbs',
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'suburbname',
            label: 'Name',
            visible: true,
          },
          {
            fieldName: 'postcode',
            label: 'Postcode',
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

export default suburbLayer;
