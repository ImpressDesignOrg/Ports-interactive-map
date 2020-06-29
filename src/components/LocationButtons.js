import React, { useContext } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

import MapContext from '../MapContext';
import { viewports } from '../data/viewports';

export default function LocationButtons() {
  const { setZoom, setCenter } = useContext(MapContext);

  const handleViewport = (location) => {
    const { zoom, center } = location;

    setZoom(zoom);
    setCenter(center);
  };

  return (
    <StyledContainer>
      <div className='viewport-buttons-content'>
        <Button onClick={() => handleViewport(viewports.PB)}>Port Botany</Button>
        <Button onClick={() => handleViewport(viewports.PK)}>Port Kembla</Button>
        <Button onClick={() => handleViewport(viewports.CR)}>Cooks River</Button>
        <Button onClick={() => handleViewport(viewports.EN)}>Enfield</Button>
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  margin: 20px 0;

  .viewport-buttons-content {
    display: flex;
    flex-wrap: wrap;

    button {
      flex: 0 0 46%;
      margin: 5px;
    }
  }
`;
