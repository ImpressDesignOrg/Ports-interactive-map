const stateGovLayer = {
  url:
    'https://maps.six.nsw.gov.au/arcgis/rest/services/public/NSW_Administrative_Boundaries/MapServer/2',
  objectIdField: 'ObjectID',
  popupTemplate: {
    title: 'State Electoral District',
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'districtname',
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

export default stateGovLayer;
