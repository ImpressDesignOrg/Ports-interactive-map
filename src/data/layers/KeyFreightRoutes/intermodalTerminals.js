import { intermodalTerminal } from "../../symbols";

const intermodalTerminalsLayer = {
  url:
    "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/keyFreightRoutes/intermodalTerminals.geojson",
  objectIdField: "ObjectID",
  renderer: {
    type: "simple",
    symbol: {
      type: "picture-marker",
      url: intermodalTerminal,
      width: "50px",
      height: "50px",
    },
  },
  popupTemplate: {
    title: "Intermodal Terminal",
    content: [
      {
        type: "fields",
        fieldInfos: [
          {
            fieldName: "Name",
            label: "Intermodal Terminal",
            visible: true,
          },
        ],
      },
    ],
  },
};

export default intermodalTerminalsLayer;
