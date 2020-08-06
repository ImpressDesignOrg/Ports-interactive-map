import React from "react";
import { AiOutlineLine } from "react-icons/ai";

import BuildingIcon from "../images/marker--building.svg";
import BerthIcon from "../images/marker--berth.svg";
import SeaportIcon from "../images/marker--seaport.svg";
import IntermodalTerminalIcon from "../images/marker--imt.svg";
import CarparkIcon from "../images/marker--carpark.svg";

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
  keyRail: {
    label: "Key National Rail",
    icon: <AiOutlineLine size={ICON_SIZE} color='#FF1493' />,
    key: "keyRail",
  },
  keyRoads: {
    label: "Key National Roads",
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
    label: "Tenancy Lease Area",
    icon: <AiOutlineLine size={ICON_SIZE} color='#e69800' />,
    key: "tenancyLeaseAreas",
  },
  tenancyUnits: {
    label: "NSW Ports Lease Boundary",
    icon: <AiOutlineLine size={ICON_SIZE} color='#3333cc' />,
    key: "nswPortsLeaseArea",
  },
  buildings: {
    label: "Buildings",
    iconUrl: BuildingIcon,
    key: "buildings",
  },
  railNetwork: {
    label: "NSW Ports Rail Network",
    portBotanyLabel: "NSW Ports On-dock Rail",
    icon: <AiOutlineLine size={ICON_SIZE} color='#8B0000' />,
    key: "railNetwork",
  },
  roadNetwork: {
    label: "NSW Ports Road Network",
    icon: <AiOutlineLine size={ICON_SIZE} color='#a800e6' />,
    key: "roadNetwork",
  },
  carparks: {
    label: "Carpark",
    iconUrl: CarparkIcon,
    key: "carparks",
  },
};

export const ALL_SWITCHES = [ALL.seaports, ALL.intermodalTerminals, ALL.keyRoads, ALL.secondaryRoads];

export const PB_SWITCHES = [
  {
    label: "Berths",
    iconUrl: BerthIcon,
    key: "pbBerths",
  },
  ALL.buildings,
  ALL.carparks,
  ALL.tenancyUnits,
  ALL.tenancyLeaseArea,
  ALL.roadNetwork,
  ALL.railNetwork,
];

export const PK_SWITCHES = [
  {
    label: "Berths",
    iconUrl: BerthIcon,
    key: "pkBerths",
  },
  ALL.buildings,
  ALL.carparks,
  ALL.tenancyUnits,
  ALL.tenancyLeaseArea,
  ALL.roadNetwork,
  ALL.railNetwork,
];

export const CR_SWITCHES = [ALL.buildings, ALL.tenancyUnits, ALL.tenancyLeaseArea];

export const EN_SWITCHES = [
  ALL.buildings,
  ALL.carparks,
  ALL.tenancyUnits,
  ALL.tenancyLeaseArea,
  ALL.roadNetwork,
  ALL.railNetwork,
];
