const npwsReserveLayer = {
  url:
    'https://maps.six.nsw.gov.au/arcgis/rest/services/public/NSW_Administrative_Boundaries/MapServer/6',
  objectIdField: 'ObjectID',
  popupTemplate: {
    title: 'NPWS Reserve',
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'reservename',
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

export default npwsReserveLayer;
