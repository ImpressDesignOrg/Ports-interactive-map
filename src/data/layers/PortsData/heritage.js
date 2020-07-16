import { heritage } from "../../symbols";
import { clusterConfig } from "../../../utils/cluster-config";

const heritageLayer = {
  url: "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/assets/json/HERITAGE.geojson",
  objectIdField: "ObjectID",
  featureReduction: clusterConfig,
  renderer: {
    type: "simple",
    symbol: {
      type: "picture-marker",
      url: heritage,
      width: "50px",
      height: "50px",
    },
  },
  popupTemplate: {
    title: "Heritage Building",
    content: [
      {
        type: "fields",
        fieldInfos: [
          {
            fieldName: "Asset_No",
            label: "Asset Number",
            visible: true,
          },
          {
            fieldName: "ASS_NAME",
            label: "Asset Name",
            visible: true,
          },
          {
            fieldName: "ASS_CLASS",
            label: "Asset Class",
            visible: true,
          },
          {
            fieldName: "ASS_LOC",
            label: "Asset Location",
            visible: true,
          },
        ],
      },
    ],
  },
};

export default heritageLayer;
