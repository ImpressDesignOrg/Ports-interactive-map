import React from 'react';
import { MdLocalAirport, MdLocalShipping } from 'react-icons/md';
import {
  FaRegBuilding,
  FaGripLinesVertical,
  FaMapMarkerAlt,
  FaDocker,
  FaCircle,
} from 'react-icons/fa';
import { GiVirtualMarker, GiGate } from 'react-icons/gi';
import { RiShipLine } from 'react-icons/ri';
import { BsBuilding } from 'react-icons/bs';
import { AiOutlineLine } from 'react-icons/ai';

const ICON_SIZE = '30px';

const ALL = {
  airports: {
    label: 'Airports',
    icon: <MdLocalAirport size={ICON_SIZE} />,
    key: 'airports',
  },
  seaports: {
    label: 'Seaports',
    icon: <RiShipLine size={ICON_SIZE} />,
    key: 'seaports',
  },
  intermodalTerminals: {
    label: 'Intermodal Terminals',
    icon: <MdLocalShipping size={ICON_SIZE} />,
    key: 'intermodalTerminals',
  },
  roadTrainAssemby: {
    label: 'Road Train Assembly',
    icon: <MdLocalAirport size={ICON_SIZE} />,
    key: 'roadTrainAssembly',
  },
  keyRoads: {
    label: 'Key Roads',
    icon: <MdLocalAirport size={ICON_SIZE} />,
    key: 'keyRoads',
  },
  keyRail: {
    label: 'Key Rail',
    icon: <MdLocalAirport size={ICON_SIZE} />,
    key: 'keyRail',
  },
  secondaryRoads: {
    label: 'Secondary Roads',
    icon: <MdLocalAirport size={ICON_SIZE} />,
    key: 'secondaryRoads',
  },
  localGov: {
    label: 'Local Government',
    icon: <FaGripLinesVertical size={ICON_SIZE} color='#aaff00' />,
    key: 'localGov',
  },
  stateGov: {
    label: 'State Government',
    icon: <FaGripLinesVertical size={ICON_SIZE} color='#e69800' />,
    key: 'stateGov',
  },
  federalGov: {
    label: 'Federal Government',
    icon: <FaGripLinesVertical size={ICON_SIZE} color='#7a8ef5' />,
    key: 'federalGov',
  },
  tenancyLeaseArea: {
    label: 'Tenancy Lease Areas',
    icon: <FaCircle size={ICON_SIZE} color='#e69800' />,
    key: 'tenancyLeaseAreas',
  },
  tenancyUnits: {
    label: 'Tenancy Units',
    icon: <FaCircle size={ICON_SIZE} color='#3333cc' />,
    key: 'tenancyUnits',
  },
  leaseBoundary: {
    label: 'Lease Boundary',
    icon: <FaGripLinesVertical size={ICON_SIZE} color='#e69800' />,
    key: 'leaseBoundary',
  },
  breakwaterRevetments: {
    label: 'Breakwater Revetments',
    icon: <FaCircle size={ICON_SIZE} color='#ccc433' />,
    key: 'breakwaterRevetments',
  },
  buildings: {
    label: 'Buildings',
    icon: <BsBuilding size={ICON_SIZE} />,
    key: 'buildings',
  },
  heritage: {
    label: 'Heritage',
    icon: <FaRegBuilding size={ICON_SIZE} />,
    key: 'buildings',
  },
  maritimeStructures: {
    label: 'Maritime Structures',
    icon: <AiOutlineLine size={ICON_SIZE} color='#007502' />,
    key: 'maritimeStructures',
  },
  railNetwork: {
    label: 'Rail Network',
    icon: <FaGripLinesVertical size={ICON_SIZE} color='#e69800' />,
    key: 'railNetwork',
  },
  roadNetwork: {
    label: 'Road Network',
    icon: <AiOutlineLine size={ICON_SIZE} color='#a800e6' />,
    key: 'roadNetwork',
  },
};

export const AUS_SWITCHES = [
  ALL.airports,
  ALL.seaports,
  ALL.intermodalTerminals,
  ALL.roadTrainAssemby,
  ALL.keyRoads,
  ALL.keyRail,
  ALL.secondaryRoads,
  ALL.localGov,
  ALL.stateGov,
  ALL.federalGov,
];

export const ALL_SWITCHES = [
  ALL.airports,
  ALL.seaports,
  ALL.intermodalTerminals,
  ALL.roadTrainAssemby,
  ALL.keyRoads,
  ALL.keyRail,
  ALL.secondaryRoads,
  ALL.localGov,
  ALL.stateGov,
  ALL.federalGov,
];

export const PB_SWITCHES = [
  {
    label: 'Berths',
    icon: <FaDocker size={ICON_SIZE} />,
    key: 'pbBerths',
  },
  {
    label: 'Gates',
    icon: <GiGate size={ICON_SIZE} />,
    key: 'pbGates',
  },
  ALL.breakwaterRevetments,
  ALL.tenancyLeaseArea,
  ALL.tenancyUnits,
  ALL.leaseBoundary,
  ALL.roadNetwork,
  {
    label: 'Lines',
    icon: <AiOutlineLine size={ICON_SIZE} color='#ff5edf' />,
    key: 'pbLines',
  },
  ALL.buildings,
  ALL.heritage,
  ALL.maritimeStructures,
  {
    label: 'Labels',
    icon: <GiVirtualMarker size={ICON_SIZE} />,
    key: 'pbLabels',
  },
  ALL.localGov,
  ALL.stateGov,
  ALL.federalGov,
];

export const PK_SWITCHES = [
  {
    label: 'Berths',
    icon: <GiGate size={ICON_SIZE} />,
    key: 'pkBerths',
  },
  ALL.breakwaterRevetments,
  ALL.tenancyLeaseArea,
  ALL.tenancyUnits,
  ALL.leaseBoundary,
  ALL.roadNetwork,
  ALL.railNetwork,
  {
    label: 'Lines',
    icon: <AiOutlineLine size={ICON_SIZE} color='#ff5edf' />,
    key: 'pkLines',
  },
  ALL.buildings,
  ALL.heritage,
  ALL.maritimeStructures,
  {
    label: 'Labels',
    icon: <GiVirtualMarker size={ICON_SIZE} />,
    key: 'pkLabels',
  },
  ALL.localGov,
  ALL.stateGov,
  ALL.federalGov,
];

export const CR_SWITCHES = [
  ALL.tenancyLeaseArea,
  ALL.tenancyUnits,
  ALL.buildings,
  ALL.heritage,
  ALL.localGov,
  ALL.stateGov,
  ALL.federalGov,
];

export const EN_SWITCHES = [
  ALL.tenancyLeaseArea,
  ALL.tenancyUnits,
  ALL.heritage,
  ALL.buildings,
  ALL.roadNetwork,
  ALL.railNetwork,
  ALL.localGov,
  ALL.stateGov,
  ALL.federalGov,
];
