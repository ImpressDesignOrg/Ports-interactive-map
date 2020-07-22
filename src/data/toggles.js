import React from "react";
import { AiOutlineLine } from "react-icons/ai";

import BuildingIcon from "../images/marker--building.svg";
import GateIcon from "../images/marker--gate.svg";
import HeritageIcon from "../images/marker--heritage.svg";
import BerthIcon from "../images/marker--berth.svg";
import SeaportIcon from "../images/marker--seaport.svg";
import IntermodalTerminalIcon from "../images/marker--imt.svg";
import TenancyIcon from "../images/marker--tenancy.svg";
import LeaseIcon from "../images/marker--lease.svg";

const ICON_SIZE = "30px";

const ALL = {
  seaports: {
    label: "Seaports",
    iconUrl: SeaportIcon,
    key: "seaports",
  },
  intermodalTerminals: {
    label: "Intermodal Terminals",
    iconUrl: IntermodalTerminalIcon,
    key: "intermodalTerminals",
  },
  keyRoads: {
    label: "Key Roads",
    icon: <AiOutlineLine size={ICON_SIZE} color='#002673' />,
    key: "keyRoads",
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
    icon: LeaseIcon,
    key: "tenancyLeaseAreas",
  },
  tenancyUnits: {
    label: "Tenancy Units",
    icon: TenancyIcon,
    key: "tenancyUnits",
  },
  buildings: {
    label: "Buildings",
    iconUrl: BuildingIcon,
    key: "buildings",
  },
  heritage: {
    label: "Heritage",
    iconUrl: HeritageIcon,
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

export const AUS_SWITCHES = [ALL.seaports, ALL.intermodalTerminals, ALL.keyRoads, ALL.secondaryRoads];

export const ALL_SWITCHES = [ALL.seaports, ALL.intermodalTerminals, ALL.localGov, ALL.keyRoads, ALL.secondaryRoads];

export const PB_SWITCHES = [
  {
    label: "Berths",
    iconUrl: BerthIcon,
    key: "pbBerths",
  },
  {
    label: "Gates",
    iconUrl: GateIcon,
    key: "pbGates",
  },
  ALL.buildings,
  ALL.heritage,
  ALL.tenancyLeaseArea,
  ALL.tenancyUnits,
  ALL.roadNetwork,
  ALL.localGov,
];

export const PK_SWITCHES = [
  {
    label: "Berths",
    iconUrl: BerthIcon,
    key: "pkBerths",
  },
  ALL.buildings,
  ALL.heritage,
  ALL.tenancyLeaseArea,
  ALL.tenancyUnits,
  ALL.roadNetwork,
  ALL.railNetwork,
  ALL.localGov,
];

export const CR_SWITCHES = [ALL.buildings, ALL.heritage, ALL.tenancyLeaseArea, ALL.tenancyUnits, ALL.localGov];

export const EN_SWITCHES = [
  ALL.heritage,
  ALL.buildings,
  ALL.tenancyLeaseArea,
  ALL.tenancyUnits,
  ALL.roadNetwork,
  ALL.railNetwork,
  ALL.localGov,
];
