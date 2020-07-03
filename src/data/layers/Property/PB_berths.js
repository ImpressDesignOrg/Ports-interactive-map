const clusterConfig = {
  type: 'cluster',
  clusterRadius: '50px',
  // {cluster_count} is an aggregate field containing
  // the number of features comprised by the cluster
  popupTemplate: {
    content: 'This cluster represents {cluster_count} items.',
  },
};

const symbol = {
  type: 'picture-marker',
  url: 'https://img.icons8.com/office/16/000000/wharf.png',
  width: '30px',
  height: '30px',
};

const PB_berthLayer = {
  url: 'https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/gatenumbers/json/PB_BERTH.geojson',
  objectIdField: 'ObjectID',
  featureReduction: clusterConfig,
  popupTemplate: {
    title: 'Port Botany Berth',
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'TextString',
            label: 'Name',
            visible: true,
          },
        ],
      },
    ],
  },
  renderer: {
    type: 'simple',
    symbol,
  },
};

export default PB_berthLayer;
