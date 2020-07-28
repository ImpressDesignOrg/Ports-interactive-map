const localGovLayer = {
  url: "https://maps.six.nsw.gov.au/arcgis/rest/services/public/NSW_Administrative_Boundaries/MapServer/1",
  objectIdField: "ObjectID",
  popupTemplate: {
    title: "{councilname}",
  },
};

export default localGovLayer;
