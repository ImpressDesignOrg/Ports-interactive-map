import React, { useContext } from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';
import { GiAustralia } from 'react-icons/gi';

import MapContext from '../../MapContext';
import { viewports } from '../../data/viewports';

export default function LocationButtons() {
  const { siderLevel, setZoom, setCenter, setSiderLevel } = useContext(MapContext);

  const handleClick = (location) => {
    setZoom(location.zoom);
    setCenter(location.center);
    setSiderLevel(siderLevel + 1);
  };

  return (
    <StyledContainer>
      <h2>Select one of our locations</h2>
      <div className='viewport-buttons-content'>
        <button onClick={() => handleClick(viewports.PB)}>
          <FaMapMarkerAlt />
          <span>Port Botany</span>
        </button>
        <button onClick={() => handleClick(viewports.PK)}>
          <FaMapMarkerAlt />
          <span>Port Kembla</span>
        </button>
        <button onClick={() => handleClick(viewports.CR)}>
          <FaMapMarkerAlt />
          <span>Cooks River Intermodal Terminal</span>
        </button>
        <button onClick={() => handleClick(viewports.EN)}>
          <FaMapMarkerAlt />
          <span>Enfield Intermodal Terminal</span>
        </button>
        <button onClick={() => handleClick(viewports.allLocations)}>
          <FaBuilding />
          <span>All our locations</span>
        </button>
        <button onClick={() => handleClick(viewports.allLocations)}>
          <GiAustralia />
          <span>Australia</span>
        </button>
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  margin: 20px 0;
  font-family: 'Roboto';

  h2 {
    font-size: 20px;
    color: #5b6770;
    font-weight: 700;
  }

  .viewport-buttons-content {
    display: flex;
    flex-wrap: wrap;

    button {
      display: flex;
      align-items: center;
      flex: 0 0 100%;
      margin: 5px;
      height: 45px;
      font-size: 16px;
      color: #000;
      box-shadow: none;
      border: none;
      background: none;
      cursor: pointer;

      &:hover {
        color: #1d384b;
      }

      span {
        margin-left: 15px;
        color: #5b6770;
        font-weight: 600;
      }
    }

    /*     button:last-child {
      flex: 0 0 96%;
    } */
  }
`;
