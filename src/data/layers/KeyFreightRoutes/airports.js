import React from 'react';
import { MdLocalAirport } from 'react-icons/md';

const airportsLayer = {
  url: 'https://raw.githubusercontent.com/darcydev/StaticMedia/master/api/Ports/keyFreightRoutes/majorAirports.geojson',
  objectIdField: 'ObjectID',
  popupTemplate: {
    title: 'Airport',
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'Name',
            label: 'Airport',
            visible: true,
          },
        ],
      },
    ],
  },
  renderer: {
    type: 'simple',
    symbol: {
      type: 'simple-marker',
      path:
        'M57.4 37.8L37 22V7a5 5 0 1 0-10 0v15L6.6 37.8S5 38.9 5 40v4.2a1.3 1.3 0 0 0 .7 1.3c.5.3 1.9-.3 2.4-.5L27 38.9V50l-7.3 5.5a1.6 1.6 0 0 0-.7 1.4V60c0 .4.1 1.3 1.4.8L32 56l11.6 4.8c1.4.5 1.4-.5 1.4-.8v-3.1a1.6 1.6 0 0 0-.7-1.4L37 50V38.9l18.9 6.2c.5.2 1.9.7 2.4.5a1.3 1.3 0 0 0 .7-1.3V40c0-1.1-1.6-2.2-1.6-2.2z',
    },
  },
};

export default airportsLayer;
