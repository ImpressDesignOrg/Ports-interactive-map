import React from "react";
import styled from "styled-components";
import { FaMapMarkerAlt, FaBuilding } from "react-icons/fa";
import { GiAustralia } from "react-icons/gi";

import { useSetState } from "../../store";

const BUTTONS = [
  { label: "Port Botany", id: "PB", icon: <FaMapMarkerAlt size='30px' /> },
  { label: "Port Kembla", id: "PK", icon: <FaMapMarkerAlt size='30px' /> },
  { label: "Cooks River Intermodal", id: "CR", icon: <FaMapMarkerAlt size='30px' /> },
  { label: "Enfield Intermodal", id: "EN", icon: <FaMapMarkerAlt size='30px' /> },
  { label: "NSW Ports Locations", id: "ALL", icon: <FaBuilding size='30px' /> },
  { label: "National", id: "AUS", icon: <GiAustralia size='30px' /> },
];

export default function LocationButtons() {
  const setState = useSetState();

  const handleClick = (location) => setState((prev) => ({ ...prev, siderLevel: 2, viewing: location }));

  return (
    <StyledContainer>
      <h2>NSW Ports Locations</h2>
      <div className='sider-content'>
        {BUTTONS.map((button) => (
          <button key={button.id} onClick={() => handleClick(button.id)}>
            {button.icon}
            <span>{button.label}</span>
          </button>
        ))}
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  margin: 20px 0;
  font-family: "Roboto";

  h2 {
    font-size: 22px;
    color: #000;
    font-weight: 700;
    margin: 0 0 10px 0;
  }

  .sider-content {
    display: flex;
    flex-wrap: wrap;

    button {
      display: flex;
      align-items: center;
      flex: 0 0 100%;
      margin: 10px 0;
      padding: 0;
      height: 45px;
      font-size: 18px;
      color: #000;
      box-shadow: none;
      border: none;
      background: none;
      cursor: pointer;
      font-weight: 500;

      &:hover {
        color: #68a0b9;
      }

      &:focus {
        border: none;
        outline: none;
      }

      span {
        margin-left: 22px;
        color: #000;
        font-family: "Roboto Condensed";
      }
    }
  }
`;
