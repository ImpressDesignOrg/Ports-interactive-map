import React, { useContext } from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';
import { GiAustralia } from 'react-icons/gi';

import MapContext from '../../../MapContext';
import { useSetState, useTrackedState } from '../../../store';

export default function LocationButtons() {
  // const { setViewing, setSiderLevel } = useContext(MapContext);
  // const state = useTrackedState();
  const setState = useSetState();

  const handleClick = (location) => {
    setState((prev) => ({ ...prev, siderLevel: 2 }));
    setState((prev) => ({ ...prev, viewing: location }));
  };

  return (
    <StyledContainer>
      <h2>NSW Ports Locations</h2>
      <div className='sider-content'>
        <button onClick={() => handleClick('PB')}>
          <FaMapMarkerAlt size='30px' />
          <span>Port Botany</span>
        </button>
        <button onClick={() => handleClick('PK')}>
          <FaMapMarkerAlt size='30px' />
          <span>Port Kembla</span>
        </button>
        <button onClick={() => handleClick('CR')}>
          <FaMapMarkerAlt size='30px' />
          <span>Cooks River Intermodal</span>
        </button>
        <button onClick={() => handleClick('EN')}>
          <FaMapMarkerAlt size='30px' />
          <span>Enfield Intermodal</span>
        </button>
        <button onClick={() => handleClick('ALL')}>
          <FaBuilding size='30px' />
          <span>NSW Ports Locations</span>
        </button>
        <button onClick={() => handleClick('AUS')}>
          <GiAustralia size='30px' />
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
      font-size: 15px;
      color: #000;
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

      span {
        margin-left: 22px;
        color: #000;
        font-weight: 500;
        font-family: 'Roboto Condensed';
      }
    }
  }
`;
