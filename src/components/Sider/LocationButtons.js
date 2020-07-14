import React from "react";
import styled from "styled-components";

import { useSetState } from "../../store";

const BUTTONS = [
  { label: "Port Botany", id: "PB", iconUrl: "https://f399e9-5fsa23.netlify.app/images/marker--botany.svg" },
  { label: "Port Kembla", id: "PK", iconUrl: "https://f399e9-5fsa23.netlify.app/images/marker--kembla.svg" },
  {
    label: "Cooks River Intermodal",
    id: "CR",
    iconUrl: "https://f399e9-5fsa23.netlify.app/images/marker--cooksriver.svg",
  },
  { label: "Enfield Intermodal", id: "EN", iconUrl: "https://f399e9-5fsa23.netlify.app/images/marker--enfield.svg" },
  {
    label: "NSW Ports Locations",
    id: "ALL",
    iconUrl: "https://f399e9-5fsa23.netlify.app/images/marker--location--circle.svg",
  },
  { label: "National", id: "AUS", iconUrl: "https://f399e9-5fsa23.netlify.app/images/marker--australia.svg" },
];

export default function LocationButtons() {
  const setState = useSetState();

  const handleClick = (location) => {
    setState((prev) => ({ ...prev, siderLevel: 2, viewing: location }));
  };

  return (
    <StyledContainer>
      <h2>NSW Ports Locations</h2>
      <div className='sider-content'>
        {BUTTONS.map((button) => (
          <button key={button.id} onClick={() => handleClick(button.id)}>
            {button.icon ? button.icon : <img src={button.iconUrl} alt='marker-symbol' />}
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
      margin: 15px 0;
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

      img {
        width: 60px;
        height: auto;
      }

      span {
        margin-left: 22px;
        color: #000;
        font-family: "Roboto Condensed";

        &:hover {
          color: #68a0b9;
        }
      }
    }
  }
`;
