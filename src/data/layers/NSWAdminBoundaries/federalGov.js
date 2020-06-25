const federalGovLayer = {
  url:
    'https://maps.six.nsw.gov.au/arcgis/rest/services/public/NSW_Administrative_Boundaries/MapServer/7',
  objectIdField: 'ObjectID',
  popupTemplate: {
    title: 'Federal Electoral Division',
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'divisionname',
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

export default federalGovLayer;
