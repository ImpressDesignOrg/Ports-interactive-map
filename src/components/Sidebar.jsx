import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Switch } from 'antd';

import Map from './Map';

const viewports = {
  PB: {
    zoom: 13,
    center: [151.218, -33.976],
  },
  PK: { zoom: 13, center: [150.8996, -34.4854] },
  CR: { zoom: 13, center: [151.1111, -33.333] },
  EN: { zoom: 13, center: [151.1111, -33.3333] },
};

export default function Sidebar() {
  const [visible, setVisible] = useState(false);
  const [viewport, setViewport] = useState({
    zoom: 12,
    center: [151.1111, -33.333],
  });

  return (
    <>
      <div className='sidebar-wrapper'>
        <StyledContainer visible={visible}>
          <Button onClick={() => setVisible(!visible)}>
            {visible ? '>' : '<'}
          </Button>
          <div className='zoom-buttons-wrapper'>
            <div className='zoom-buttons-content'>
              <Button onClick={() => setViewport(viewports.PB)}>
                Port Botany
              </Button>
              <Button onClick={() => setViewport(viewports.PK)}>
                Port Kembla
              </Button>
              <Button onClick={() => setViewport(viewports.CR)}>
                Cooks River
              </Button>
              <Button onClick={() => setViewport(viewports.EN)}>Enfield</Button>
            </div>
          </div>
          <StyledControls>
            <div className='controls-content'>
              <div className='category'>
                <h2>Category 1</h2>
                <div className='switch-wrapper'>
                  <div className='switch'>
                    <p>Roads</p>
                    <Switch />
                  </div>
                  <div className='switch'>
                    <p>Rail</p>
                    <Switch />
                  </div>
                </div>
              </div>
            </div>
          </StyledControls>
        </StyledContainer>
      </div>
      <div className='map-wrapper'>
        <Map viewport={viewport} />
      </div>
    </>
  );
}

const StyledContainer = styled.div`
  padding: 30px;
  background: #efefef;
  height: 100%;
`;

const StyledControls = styled.div`
  .switch-wrapper {
    .switch {
      display: flex;
      align-items: center;
      width: 200px;
      justify-content: space-between;
      margin: 5px 0;

      p {
        margin: 0;
      }
    }
  }
`;
