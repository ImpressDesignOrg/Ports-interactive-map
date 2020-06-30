import React from 'react';
import { MdLocalAirport } from 'react-icons/md';
import { FaBuilding, FaRegBuilding, FaGripLinesVertical, FaMapMarkerAlt } from 'react-icons/fa';
import { GiAtSea, GiPositionMarker, GiVirtualMarker } from 'react-icons/gi';

export const keyFreightRouteSwitches = [
  { label: 'Airports', icon: <MdLocalAirport />, key: 'airports' },
  { label: 'Seaports', icon: 'ICON', key: 'seaports' },
  { label: 'Intermodal Terminals', icon: 'ICON', key: 'intermodalTerminals' },
  { label: 'Road Train Assembly', icon: 'ICON', key: 'roadTrainAssembly' },
  { label: 'Key Roads', icon: 'ICON', key: 'keyRoads' },
  { label: 'Key Rail', icon: 'ICON', key: 'keyRail' },
  { label: 'Secondary Roads', icon: 'ICON', key: 'secondaryRoads' },
];

export const nswAdminBoundariesSwitches = [
  { label: 'Local Government Area', icon: <FaGripLinesVertical color='#aaff00' />, key: 'localGov' },
  { label: 'State Government District', icon: <FaGripLinesVertical color='#e69800' />, key: 'stateGov' },
  { label: 'Federal Government Division', icon: <FaGripLinesVertical color='#7a8ef5' />, key: 'federalGov' },
  { label: 'Suburbs', icon: <FaGripLinesVertical color='#a900e6' />, key: 'suburbs' },
  { label: 'Parish', icon: <FaGripLinesVertical color='#73dfff' />, key: 'parish' },
  { label: 'NPWS Reserve', icon: <FaGripLinesVertical color='#73b273' />, key: 'npwsReserve' },
  { label: 'State Forest', icon: <FaGripLinesVertical color='#73b273' />, key: 'stateForest' },
];

export const propertySwitches = [
  { label: 'Port Botany Berths', icon: <GiAtSea />, key: 'pbBerths' },
  { label: 'Port Botany Gates', icon: <GiPositionMarker />, key: 'pbGates' },
  { label: 'Port Kembla Berths', icon: <GiAtSea />, key: 'pkBerths' },
  { label: 'Port Kembla Gates', icon: <GiPositionMarker />, key: 'pkGates' },
  { label: 'Tenancy Lease Areas', icon: <FaGripLinesVertical color='#e69800' />, key: 'tenancyLeaseAreas' },
  { label: 'Tenancy Units', icon: <FaGripLinesVertical color='#e69800' />, key: 'tenancyUnits' },
  { label: 'leaseBoundary', icon: <FaGripLinesVertical color='#e69800' />, key: 'leaseBoundary' },
];

export const assetMgtSwitches = [
  { label: 'Breakwater Revetments', icon: <FaGripLinesVertical color='#e69800' />, key: 'breakwaterRevetments' },
  { label: 'Buildings', icon: <FaBuilding />, key: 'buildings' },
  { label: 'Heritage', icon: <FaRegBuilding />, key: 'buildings' },
  { label: 'Maritime Structures', icon: <FaGripLinesVertical color='#e69800' />, key: 'maritimeStructures' },
  { label: 'Rail Network', icon: <FaGripLinesVertical color='#e69800' />, key: 'railNetwork' },
  { label: 'Road Network', icon: <FaGripLinesVertical color='#e69800' />, key: 'roadNetwork' },
  { label: 'Port Botany Labels', icon: <GiVirtualMarker />, key: 'pbLabels' },
  { label: 'Port Botany Lines', icon: <FaMapMarkerAlt />, key: 'pbLines' },
  { label: 'Port Kembla Labels', icon: <GiVirtualMarker />, key: 'pkLabels' },
  { label: 'Port Kembla Lines', icon: <FaMapMarkerAlt />, key: 'pkLines' },
];
