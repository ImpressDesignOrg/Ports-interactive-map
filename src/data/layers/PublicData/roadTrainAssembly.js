import { roadTrainAssembly } from "../../symbols";

const roadTrainAssemblyLayer = {
  url:
    "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/keyFreightRoutes/roadTrainAssembly.geojson",
  objectIdField: "ObjectID",
  renderer: {
    type: "simple",
    symbol: {
      type: "picture-marker",
      url: roadTrainAssembly,
      width: "50px",
      height: "50px",
    },
  },
  popupTemplate: {
    title: "Road Train Assembly",
    content: [
      {
        type: "fields",
        fieldInfos: [
          {
            fieldName: "Name",
            label: "Road Train Assembly",
            visible: true,
          },
        ],
      },
    ],
  },
};

export default roadTrainAssemblyLayer;
