import React from "react";
import styled from "styled-components";

import { useSetState } from "../../store";

const URL = "https://f399e9-5fsa23.netlify.app/images/";

const BUTTONS = [
  { label: "Port Botany", id: "PB", iconUrl: `${URL}marker--botany2.svg` },
  { label: "Port Kembla", id: "PK", iconUrl: `${URL}marker--kembla2.svg` },
  {
    label: "Cooks River Intermodal",
    id: "CR",
    iconUrl: `${URL}marker--cooksriver2.svg`,
  },
  { label: "Enfield Intermodal", id: "EN", iconUrl: `${URL}marker--enfield2.svg` },
  {
    label: "NSW Ports Locations",
    id: "ALL",
    iconUrl: `${URL}nsw-ports.svg`,
  },
  { label: "National", id: "AUS", iconUrl: `${URL}marker--australia.svg` },
];

export default function LocationButtons() {
  const setState = useSetState();

  const handleClick = (location) => {
    setState((prev) => ({ ...prev, siderLevel: 2, viewing: location }));
  };

  return (
    <StyledContainer>
      <div className='sider-content'>
        {BUTTONS.map((button) => (
          <button key={button.id} onClick={() => handleClick(button.id)}>
            <img src={button.iconUrl} alt='marker-symbol' />
            <p>{button.label}</p>
          </button>
        ))}
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  margin: 20px 0;
  font-family: "Roboto";

  .sider-content {
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 500px) {
      justify-content: center;
    }

    button {
      display: flex;
      align-items: center;
      flex: 0 0 100%;
      margin: 15px 0;
      padding: 0;
      box-shadow: none;
      border: none;
      background: none;
      cursor: pointer;

      &:hover {
        color: #68a0b9;
      }

      &:focus {
        border: none;
        outline: none;
      }

      @media (max-width: 500px) {
        flex: 0 0 37%;
        margin: 10px 0;
        justify-content: center;
      }

      img {
        width: 60px;
        height: auto;
        max-height: 100%;

        @media (max-width: 500px) {
          width: 140px;
        }
      }

      p {
        margin: 0 0 0 22px;
        color: #000;
        font-family: "Roboto Condensed";
        font-weight: 500;
        height: 45px;
        font-size: 18px;
        color: #000;
        display: flex;
        align-items: center;

        &:hover {
          color: #68a0b9;
        }

        @media (max-width: 500px) {
          display: none;

          margin-left: 35px;
          font-size: 24px;
        }
      }
    }
  }
`;
