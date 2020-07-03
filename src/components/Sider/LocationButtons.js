import React, { useContext } from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';
import { GiAustralia } from 'react-icons/gi';

import MapContext from '../../MapContext';

export default function LocationButtons() {
  const { siderLevel, setViewing, setSiderLevel } = useContext(MapContext);

  const handleClick = (location) => {
    setSiderLevel(siderLevel + 1);

    switch (location) {
      case 'AUS':
        setViewing('AUS');
        break;
      case 'ALL':
        setViewing('ALL');
        break;
      case 'PB':
        setViewing('PB');
        break;
      case 'PK':
        setViewing('PK');
        break;
      case 'CR':
        setViewing('CR');
        break;
      case 'EN':
        setViewing('EN');
        break;
      default:
        break;
    }
  };

  return (
    <StyledContainer>
      <h2>Select one of our locations</h2>
      <div className='viewport-buttons-content'>
        <button onClick={() => handleClick('PB')}>
          <FaMapMarkerAlt />
          <span>Port Botany</span>
        </button>
        <button onClick={() => handleClick('PK')}>
          <FaMapMarkerAlt />
          <span>Port Kembla</span>
        </button>
        <button onClick={() => handleClick('CR')}>
          <FaMapMarkerAlt />
          <span>Cooks River Intermodal Terminal</span>
        </button>
        <button onClick={() => handleClick('EN')}>
          <FaMapMarkerAlt />
          <span>Enfield Intermodal Terminal</span>
        </button>
        <button onClick={() => handleClick('ALL')}>
          <FaBuilding />
          <span>NSW Ports Locations</span>
        </button>
        <button onClick={() => handleClick('AUS')}>
          <GiAustralia />
          <span>National</span>
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
      font-size: 15px;
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
  }
`;
