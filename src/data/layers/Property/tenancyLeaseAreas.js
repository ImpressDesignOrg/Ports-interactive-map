const tenancyLeaseAreasLayer = {
  url:
    'https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/tenancydata/json/TENANCY_LEASE_AREAS.geojson',
  objectIdField: 'ObjectID',
  popupTemplate: {
    title: 'Tenancy Lease Areas',
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'LEASE',
            label: 'Lease Name',
            visible: true,
          },
          {
            fieldName: 'LEASE_TYPE',
            label: 'Lease Type',
            visible: true,
          },
        ],
      },
    ],
  },
};

export default tenancyLeaseAreasLayer;
