import { allLocations } from "../../symbols";

import BotanyIcon from "../../../images/marker--botany.svg";
import KemblaIcon from "../../../images/marker--kembla.svg";
import CooksIcon from "../../../images/marker--cooks.svg";
import EnfieldIcon from "../../../images/marker--enfield.svg";

const symbolSettings = {
  type: "picture-marker",
  width: "80px",
  height: "80px",
};

export const allLocationsLayer = {
  url: "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/allLocations/index.geojson",
  objectIdField: "ObjectID",
  renderer: {
    type: "simple",
    symbol: {
      ...symbolSettings,
      url: allLocations,
    },
  },
};

export const botanyLayer = {
  url: "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/allLocations/botany.geojson",
  objectIdField: "ObjectID",
  renderer: {
    type: "simple",
    symbol: {
      ...symbolSettings,
      url: BotanyIcon,
    },
  },
};

export const kemblaLayer = {
  url: "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/allLocations/kembla.geojson",
  objectIdField: "ObjectID",
  renderer: {
    type: "simple",
    symbol: {
      ...symbolSettings,
      url: KemblaIcon,
    },
  },
};

export const cooksLayer = {
  url: "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/allLocations/cooks.geojson",
  objectIdField: "ObjectID",
  renderer: {
    type: "simple",
    symbol: {
      ...symbolSettings,
      url: CooksIcon,
    },
  },
};

export const enfieldLayer = {
  url: "https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/allLocations/enfield.geojson",
  objectIdField: "ObjectID",
  renderer: {
    type: "simple",
    symbol: {
      ...symbolSettings,
      url: EnfieldIcon,
    },
  },
};
