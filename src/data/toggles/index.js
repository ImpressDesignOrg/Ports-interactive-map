import React from 'react';
import { MdLocalAirport } from 'react-icons/md';
import { FaRegBuilding, FaGripLinesVertical, FaMapMarkerAlt } from 'react-icons/fa';
import { GiVirtualMarker } from 'react-icons/gi';

export const ALL_SWITCHES = {
  keyFreightRoute: [
    { label: 'Airports', icon: <MdLocalAirport />, key: 'airports', locations: true },
    { label: 'Seaports', icon: 'ICON', key: 'seaports' },
    { label: 'Intermodal Terminals', icon: 'ICON', key: 'intermodalTerminals' },
    { label: 'Road Train Assembly', icon: 'ICON', key: 'roadTrainAssembly' },
    { label: 'Key Roads', icon: 'ICON', key: 'keyRoads' },
    { label: 'Key Rail', icon: 'ICON', key: 'keyRail' },
    { label: 'Secondary Roads', icon: 'ICON', key: 'secondaryRoads' },
  ],
  nswAdminBoundaries: [
    { label: 'Local Government', icon: <FaGripLinesVertical color='#aaff00' />, key: 'localGov' },
    { label: 'State Government', icon: <FaGripLinesVertical color='#e69800' />, key: 'stateGov' },
    { label: 'Federal Government', icon: <FaGripLinesVertical color='#7a8ef5' />, key: 'federalGov' },
  ],
  property: [
    {
      label: 'Berths',
      iconUrl: 'https://img.icons8.com/office/16/000000/wharf.png',
      key: 'pbBerths',
    },
    {
      label: 'Gates',
      iconUrl: 'https://img.icons8.com/dusk/16/000000/road-closure.png',
      key: 'pbGates',
    },
    {
      label: 'Berths',
      iconUrl: 'https://img.icons8.com/office/16/000000/wharf.png',
      key: 'pkBerths',
    },
    /* { label: 'Port Kembla Gates', iconUrl: 'https://img.icons8.com/dusk/16/000000/road-closure.png', key: 'pkGates' }, */
    {
      label: 'Tenancy Lease Areas',
      icon: <FaGripLinesVertical color='#e69800' />,
      key: 'tenancyLeaseAreas',
    },
    {
      label: 'Tenancy Units',
      icon: <FaGripLinesVertical color='#e69800' />,
      key: 'tenancyUnits',
    },
    {
      label: 'Lease Boundary',
      icon: <FaGripLinesVertical color='#e69800' />,
      key: 'leaseBoundary',
    },
  ],
  assetMg: [
    { label: 'Breakwater Revetments', icon: <FaGripLinesVertical color='#e69800' />, key: 'breakwaterRevetments' },
    { label: 'Buildings', iconUrl: 'https://img.icons8.com/carbon-copy/100/000000/building.png', key: 'buildings' },
    { label: 'Heritage', icon: <FaRegBuilding />, key: 'buildings' },
    { label: 'Maritime Structures', icon: <FaGripLinesVertical color='#e69800' />, key: 'maritimeStructures' },
    { label: 'Rail Network', icon: <FaGripLinesVertical color='#e69800' />, key: 'railNetwork' },
    { label: 'Road Network', icon: <FaGripLinesVertical color='#e69800' />, key: 'roadNetwork' },
    { label: 'Port Botany Labels', icon: <GiVirtualMarker />, key: 'pbLabels' },
    { label: 'Port Botany Lines', icon: <FaMapMarkerAlt />, key: 'pbLines' },
    { label: 'Port Kembla Labels', icon: <GiVirtualMarker />, key: 'pkLabels' },
    { label: 'Port Kembla Lines', icon: <FaMapMarkerAlt />, key: 'pkLines' },
  ],
};

export const ALL_LOCATIONS_SWITCHES = {
  keyFreightRoute: [
    { label: 'Airports', icon: <MdLocalAirport />, key: 'airports', locations: true },
    { label: 'Seaports', icon: 'ICON', key: 'seaports' },
    { label: 'Intermodal Terminals', icon: 'ICON', key: 'intermodalTerminals' },
    { label: 'Road Train Assembly', icon: 'ICON', key: 'roadTrainAssembly' },
    { label: 'Key Roads', icon: 'ICON', key: 'keyRoads' },
    { label: 'Key Rail', icon: 'ICON', key: 'keyRail' },
    { label: 'Secondary Roads', icon: 'ICON', key: 'secondaryRoads' },
  ],
  nswAdminBoundaries: [
    { label: 'Local Government', icon: <FaGripLinesVertical color='#aaff00' />, key: 'localGov' },
    { label: 'State Government', icon: <FaGripLinesVertical color='#e69800' />, key: 'stateGov' },
    { label: 'Federal Government', icon: <FaGripLinesVertical color='#7a8ef5' />, key: 'federalGov' },
  ],
  property: [],
  assetMg: [],
};

export const PB_SWITCHES = [
  { label: 'Local Government', icon: <FaGripLinesVertical color='#aaff00' />, key: 'localGov' },
  { label: 'State Government', icon: <FaGripLinesVertical color='#e69800' />, key: 'stateGov' },
  { label: 'Federal Government', icon: <FaGripLinesVertical color='#7a8ef5' />, key: 'federalGov' },
  {
    label: 'Berths',
    iconUrl: 'https://img.icons8.com/office/16/000000/wharf.png',
    key: 'pbBerths',
  },
  {
    label: 'Gates',
    iconUrl: 'https://img.icons8.com/dusk/16/000000/road-closure.png',
    key: 'pbGates',
  },
  {
    label: 'Tenancy Lease Areas',
    icon: <FaGripLinesVertical color='#e69800' />,
    key: 'tenancyLeaseAreas',
  },
  {
    label: 'Tenancy Units',
    icon: <FaGripLinesVertical color='#e69800' />,
    key: 'tenancyUnits',
  },
  {
    label: 'Lease Boundary',
    icon: <FaGripLinesVertical color='#e69800' />,
    key: 'leaseBoundary',
  },
  { label: 'Breakwater Revetments', icon: <FaGripLinesVertical color='#e69800' />, key: 'breakwaterRevetments' },
  { label: 'Buildings', iconUrl: 'https://img.icons8.com/carbon-copy/100/000000/building.png', key: 'buildings' },
  { label: 'Heritage', icon: <FaRegBuilding />, key: 'buildings' },
  { label: 'Maritime Structures', icon: <FaGripLinesVertical color='#e69800' />, key: 'maritimeStructures' },
  { label: 'Road Network', icon: <FaGripLinesVertical color='#e69800' />, key: 'roadNetwork' },
  { label: 'Port Botany Labels', icon: <GiVirtualMarker />, key: 'pbLabels' },
  { label: 'Port Botany Lines', icon: <FaMapMarkerAlt />, key: 'pbLines' },
];

export const PK_SWITCHES = [
  { label: 'Local Government', icon: <FaGripLinesVertical color='#aaff00' />, key: 'localGov' },
  { label: 'State Government', icon: <FaGripLinesVertical color='#e69800' />, key: 'stateGov' },
  { label: 'Federal Government', icon: <FaGripLinesVertical color='#7a8ef5' />, key: 'federalGov' },
  {
    label: 'Berths',
    iconUrl: 'https://img.icons8.com/office/16/000000/wharf.png',
    key: 'pkBerths',
  },
  {
    label: 'Tenancy Lease Areas',
    icon: <FaGripLinesVertical color='#e69800' />,
    key: 'tenancyLeaseAreas',
  },
  {
    label: 'Tenancy Units',
    icon: <FaGripLinesVertical color='#e69800' />,
    key: 'tenancyUnits',
  },
  {
    label: 'Lease Boundary',
    icon: <FaGripLinesVertical color='#e69800' />,
    key: 'leaseBoundary',
  },
  { label: 'Breakwater Revetments', icon: <FaGripLinesVertical color='#e69800' />, key: 'breakwaterRevetments' },
  { label: 'Buildings', iconUrl: 'https://img.icons8.com/carbon-copy/100/000000/building.png', key: 'buildings' },
  { label: 'Heritage', icon: <FaRegBuilding />, key: 'buildings' },
  { label: 'Maritime Structures', icon: <FaGripLinesVertical color='#e69800' />, key: 'maritimeStructures' },
  { label: 'Rail Network', icon: <FaGripLinesVertical color='#e69800' />, key: 'railNetwork' },
  { label: 'Road Network', icon: <FaGripLinesVertical color='#e69800' />, key: 'roadNetwork' },
  { label: 'Port Kembla Labels', icon: <GiVirtualMarker />, key: 'pkLabels' },
  { label: 'Port Kembla Lines', icon: <FaMapMarkerAlt />, key: 'pkLines' },
];

export const CR_SWITCHES = [
  { label: 'Local Government', icon: <FaGripLinesVertical color='#aaff00' />, key: 'localGov' },
  { label: 'State Government', icon: <FaGripLinesVertical color='#e69800' />, key: 'stateGov' },
  { label: 'Federal Government', icon: <FaGripLinesVertical color='#7a8ef5' />, key: 'federalGov' },
  {
    label: 'Tenancy Lease Areas',
    icon: <FaGripLinesVertical color='#e69800' />,
    key: 'tenancyLeaseAreas',
  },
  {
    label: 'Tenancy Units',
    icon: <FaGripLinesVertical color='#e69800' />,
    key: 'tenancyUnits',
  },
  { label: 'Buildings', iconUrl: 'https://img.icons8.com/carbon-copy/100/000000/building.png', key: 'buildings' },
  { label: 'Heritage', icon: <FaRegBuilding />, key: 'buildings' },
];

export const EN_SWITCHES = [
  { label: 'Local Government', icon: <FaGripLinesVertical color='#aaff00' />, key: 'localGov' },
  { label: 'State Government', icon: <FaGripLinesVertical color='#e69800' />, key: 'stateGov' },
  { label: 'Federal Government', icon: <FaGripLinesVertical color='#7a8ef5' />, key: 'federalGov' },
  {
    label: 'Tenancy Lease Areas',
    icon: <FaGripLinesVertical color='#e69800' />,
    key: 'tenancyLeaseAreas',
  },
  {
    label: 'Tenancy Units',
    icon: <FaGripLinesVertical color='#e69800' />,
    key: 'tenancyUnits',
  },
  { label: 'Buildings', iconUrl: 'https://img.icons8.com/carbon-copy/100/000000/building.png', key: 'buildings' },
  { label: 'Heritage', icon: <FaRegBuilding />, key: 'buildings' },
  { label: 'Rail Network', icon: <FaGripLinesVertical color='#e69800' />, key: 'railNetwork' },
  { label: 'Road Network', icon: <FaGripLinesVertical color='#e69800' />, key: 'roadNetwork' },
];

export const keyFreightRouteSwitches = [
  { label: 'Airports', icon: <MdLocalAirport />, key: 'airports', locations: true },
  { label: 'Seaports', icon: 'ICON', key: 'seaports', locations: true },
  { label: 'Intermodal Terminals', icon: 'ICON', key: 'intermodalTerminals', locations: true },
  { label: 'Road Train Assembly', icon: 'ICON', key: 'roadTrainAssembly', locations: true },
  { label: 'Key Roads', icon: 'ICON', key: 'keyRoads', locations: true },
  { label: 'Key Rail', icon: 'ICON', key: 'keyRail', locations: true },
  { label: 'Secondary Roads', icon: 'ICON', key: 'secondaryRoads', locations: true },
];

export const nswAdminBoundariesSwitches = [
  { label: 'Local Government', icon: <FaGripLinesVertical color='#aaff00' />, key: 'localGov', locations: true },
  { label: 'State Government', icon: <FaGripLinesVertical color='#e69800' />, key: 'stateGov', locations: true },
  { label: 'Federal Government', icon: <FaGripLinesVertical color='#7a8ef5' />, key: 'federalGov', locations: true },
  /*   { label: 'Suburbs', icon: <FaGripLinesVertical color='#a900e6' />, key: 'suburbs', locations: true },
  { label: 'Parish', icon: <FaGripLinesVertical color='#73dfff' />, key: 'parish', locations: true },
  { label: 'NPWS Reserve', icon: <FaGripLinesVertical color='#73b273' />, key: 'npwsReserve', locations: true },
  { label: 'State Forest', icon: <FaGripLinesVertical color='#73b273' />, key: 'stateForest', locations: true }, */
];

export const propertySwitches = [
  {
    label: 'Berths',
    iconUrl: 'https://img.icons8.com/office/16/000000/wharf.png',
    key: 'pbBerths',
    locations: 'PB',
  },
  {
    label: 'Gates',
    iconUrl: 'https://img.icons8.com/dusk/16/000000/road-closure.png',
    key: 'pbGates',
    locations: 'PB',
  },
  {
    label: 'Berths',
    iconUrl: 'https://img.icons8.com/office/16/000000/wharf.png',
    key: 'pkBerths',
    locations: 'PK',
  },
  /* { label: 'Port Kembla Gates', iconUrl: 'https://img.icons8.com/dusk/16/000000/road-closure.png', key: 'pkGates' }, */
  {
    label: 'Tenancy Lease Areas',
    icon: <FaGripLinesVertical color='#e69800' />,
    key: 'tenancyLeaseAreas',
    locations: ['PB', 'PK', 'CR', 'EN'],
  },
  {
    label: 'Tenancy Units',
    icon: <FaGripLinesVertical color='#e69800' />,
    key: 'tenancyUnits',
    locations: ['PB', 'PK', 'CR', 'EN'],
  },
  {
    label: 'Lease Boundary',
    icon: <FaGripLinesVertical color='#e69800' />,
    key: 'leaseBoundary',
    locations: ['PB', 'PK', 'CR', 'EN'],
  },
];

export const assetMgtSwitches = [
  { label: 'Breakwater Revetments', icon: <FaGripLinesVertical color='#e69800' />, key: 'breakwaterRevetments' },
  { label: 'Buildings', iconUrl: 'https://img.icons8.com/carbon-copy/100/000000/building.png', key: 'buildings' },
  { label: 'Heritage', icon: <FaRegBuilding />, key: 'buildings' },
  { label: 'Maritime Structures', icon: <FaGripLinesVertical color='#e69800' />, key: 'maritimeStructures' },
  { label: 'Rail Network', icon: <FaGripLinesVertical color='#e69800' />, key: 'railNetwork' },
  { label: 'Road Network', icon: <FaGripLinesVertical color='#e69800' />, key: 'roadNetwork' },
  { label: 'Port Botany Labels', icon: <GiVirtualMarker />, key: 'pbLabels' },
  { label: 'Port Botany Lines', icon: <FaMapMarkerAlt />, key: 'pbLines' },
  { label: 'Port Kembla Labels', icon: <GiVirtualMarker />, key: 'pkLabels' },
  { label: 'Port Kembla Lines', icon: <FaMapMarkerAlt />, key: 'pkLines' },
];
