import { gate } from "../../symbols";

const PB_gatesLayer = {
  url: "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/gatenumbers/json/PB_GATENO.geojson",
  objectIdField: "ObjectID",
  renderer: {
    type: "simple",
    symbol: {
      type: "picture-marker",
      url: gate,
      width: "40px",
      height: "40px",
    },
  },
  popupTemplate: {
    title: "Port Botany Gate {GATE_NUM}",
    content: [
      {
        type: "fields",
        fieldInfos: [
          {
            fieldName: "GATE_NUM",
            label: "Gate Number",
            visible: true,
          },
        ],
      },
    ],
  },
};

export default PB_gatesLayer;
