import React from "react";
import styled from "styled-components";

import { useSetState } from "../../store";

import BotanyIcon from "../../images/marker--botany.svg";
import KemblaIcon from "../../images/marker--kembla.svg";
import CooksIcon from "../../images/marker--cooks.svg";
import EnfieldIcon from "../../images/marker--enfield.svg";
import NSWPortsIcon from "../../images/marker--nsw-ports.svg";
import AustraliaIcon from "../../images/marker--australia.svg";

const BUTTONS = [
  { label: "Port Botany", id: "PB", icon: BotanyIcon },
  { label: "Port Kembla", id: "PK", icon: KemblaIcon },
  {
    label: "Cooks River Intermodal",
    id: "CR",
    icon: CooksIcon,
  },
  { label: "Enfield Intermodal", id: "EN", icon: EnfieldIcon },
  {
    label: "NSW Ports Locations",
    id: "ALL",
    icon: NSWPortsIcon,
  },
  { label: "National", id: "AUS", icon: AustraliaIcon },
];

export default function LocationButtons() {
  const setState = useSetState();

  const handleClick = (location) => {
    setState((prev) => ({ ...prev, siderLevel: 2, viewing: location }));
  };

  return (
    <StyledContainer>
      <StyledContent>
        {BUTTONS.map((button) => (
          <button key={button.id} onClick={() => handleClick(button.id)}>
            <img src={button.icon} alt='marker-symbol' />
          </button>
        ))}
      </StyledContent>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  margin: 20px 0;
  font-family: "Roboto";
`;

const StyledContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 500px) {
    justify-content: center;
  }

  button {
    display: flex;
    align-items: center;
    flex: 0 0 32%;
    margin: 15px;
    padding: 0;
    box-shadow: none;
    border: none;
    background: none;
    cursor: pointer;
    height: 125px;

    &:hover {
      color: #68a0b9;
    }

    &:focus {
      border: none;
      outline: none;
    }

    @media (max-width: 500px) {
      flex: 0 0 48%;
      margin: 10px 0;
      justify-content: center;
    }

    img {
      width: 125px;
      height: auto;
      max-height: 100%;

      @media (max-width: 500px) {
        width: 140px;
      }

      @media (max-width: 430px) {
        max-width: 90%;
      }
    }
  }
`;
