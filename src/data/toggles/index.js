import React from "react";
import { FaGripLinesVertical, FaCircle } from "react-icons/fa";
import { AiOutlineLine } from "react-icons/ai";
import { seaport, intermodalTerminal, roadTrainAssembly, berth, gate, building, heritage } from "../../data/symbols";

const ICON_SIZE = "30px";

const ALL = {
  seaports: {
    label: "Seaports",
    iconUrl: seaport,
    key: "seaports",
  },
  intermodalTerminals: {
    label: "Intermodal Terminals",
    iconUrl: intermodalTerminal,
    key: "intermodalTerminals",
  },
  roadTrainAssemby: {
    label: "Road Train Assembly",
    iconUrl: roadTrainAssembly,
    key: "roadTrainAssembly",
  },
  keyRoads: {
    label: "Key Roads",
    icon: <AiOutlineLine size={ICON_SIZE} color='#002673' />,
    key: "keyRoads",
  },
  keyRail: {
    label: "Key Rails",
    icon: <AiOutlineLine size={ICON_SIZE} color='#000000' />,
    key: "keyRail",
  },
  secondaryRoads: {
    label: "Secondary Roads",
    icon: <AiOutlineLine size={ICON_SIZE} color='#004de8' />,
    key: "secondaryRoads",
  },
  localGov: {
    label: "Local Government",
    icon: <AiOutlineLine size={ICON_SIZE} color='#aaff00' />,
    key: "localGov",
  },
  tenancyLeaseArea: {
    label: "Tenancy Lease Areas",
    icon: <FaCircle size={ICON_SIZE} color='#e69800' />,
    key: "tenancyLeaseAreas",
  },
  tenancyUnits: {
    label: "Tenancy Units",
    icon: <FaCircle size={ICON_SIZE} color='#3333cc' />,
    key: "tenancyUnits",
  },
  leaseBoundary: {
    label: "Lease Boundary",
    icon: <FaGripLinesVertical size={ICON_SIZE} color='#e69800' />,
    key: "leaseBoundary",
  },
  buildings: {
    label: "Buildings",
    iconUrl: building,
    key: "buildings",
  },
  heritage: {
    label: "Heritage",
    iconUrl: heritage,
    key: "heritage",
  },
  railNetwork: {
    label: "Rail Network",
    icon: <AiOutlineLine size={ICON_SIZE} color='#e69800' />,
    key: "railNetwork",
  },
  roadNetwork: {
    label: "Road Network",
    icon: <AiOutlineLine size={ICON_SIZE} color='#a800e6' />,
    key: "roadNetwork",
  },
};

export const AUS_SWITCHES = [
  ALL.seaports,
  ALL.intermodalTerminals,
  /*   ALL.roadTrainAssemby, */
  ALL.keyRoads,
  /*   ALL.keyRail, */
  ALL.secondaryRoads,
];

export const ALL_SWITCHES = [
  ALL.localGov,
  ALL.intermodalTerminals,
  ALL.seaports,
  ALL.keyRoads,
  ALL.keyRail,
  ALL.secondaryRoads,
];

export const PB_SWITCHES = [
  {
    label: "Berths",
    iconUrl: berth,
    key: "pbBerths",
  },
  {
    label: "Gates",
    iconUrl: gate,
    key: "pbGates",
  },
  ALL.tenancyLeaseArea,
  ALL.tenancyUnits,
  ALL.roadNetwork,
  ALL.buildings,
  ALL.heritage,
  ALL.localGov,
];

export const PK_SWITCHES = [
  {
    label: "Berths",
    iconUrl: berth,
    key: "pkBerths",
  },
  ALL.tenancyLeaseArea,
  ALL.tenancyUnits,
  ALL.roadNetwork,
  ALL.railNetwork,
  ALL.buildings,
  ALL.heritage,
  ALL.localGov,
];

export const CR_SWITCHES = [ALL.tenancyLeaseArea, ALL.tenancyUnits, ALL.buildings, ALL.heritage, ALL.localGov];

export const EN_SWITCHES = [
  ALL.tenancyLeaseArea,
  ALL.tenancyUnits,
  ALL.heritage,
  ALL.buildings,
  ALL.roadNetwork,
  ALL.railNetwork,
  ALL.localGov,
];
