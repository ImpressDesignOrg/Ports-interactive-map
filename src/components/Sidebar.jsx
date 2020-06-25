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
  const [active, setActive] = useState({});

  const handleToggle = (e, key) => setActive({ ...active, [key]: e });

  console.log('active :>> ', active);

  return (
    <>
      <div className='sidebar-wrapper'>
        <StyledContainer visible={visible}>
          <Button onClick={() => setVisible(!visible)}>{visible ? '>' : '<'}</Button>
          <div className='zoom-buttons-wrapper'>
            <div className='zoom-buttons-content'>
              <Button onClick={() => setViewport(viewports.PB)}>Port Botany</Button>
              <Button onClick={() => setViewport(viewports.PK)}>Port Kembla</Button>
              <Button onClick={() => setViewport(viewports.CR)}>Cooks River</Button>
              <Button onClick={() => setViewport(viewports.EN)}>Enfield</Button>
            </div>
          </div>
          <StyledControls>
            <div className='controls-content'>
              <div className='category'>
                <div className='switch-wrapper'>
                  <h2>Operations - Key Freight Routes</h2>
                  <div className='switch'>
                    <p>Airports</p>
                    <Switch onClick={(e) => handleToggle(e, 'airports')} />
                  </div>
                  <div className='switch'>
                    <p>Seaports</p>
                    <Switch onClick={(e) => handleToggle(e, 'seaports')} />
                  </div>
                  <div className='switch'>
                    <p>Intermodal Terminals</p>
                    <Switch onClick={(e) => handleToggle(e, 'intermodalTerminals')} />
                  </div>
                  <div className='switch'>
                    <p>Road Train Assembly</p>
                    <Switch onClick={(e) => handleToggle(e, 'roadTrainAssembly')} />
                  </div>
                  <div className='switch'>
                    <p>Key Road</p>
                    <Switch onClick={(e) => handleToggle(e, 'keyRoads')} />
                  </div>
                  <div className='switch'>
                    <p>Key Rail</p>
                    <Switch onClick={(e) => handleToggle(e, 'keyRails')} />
                  </div>
                  <div className='switch'>
                    <p>Secondary Road</p>
                    <Switch onClick={(e) => handleToggle(e, 'secondaryRoads')} />
                  </div>
                </div>
                <div className='switch-wrapper'>
                  <h2>NSW Administrative Boundaries</h2>
                  <div className='switch'>
                    <p>Suburbs</p>
                    <Switch onClick={() => setActive({ ...active, suburbs: !active.suburbs })} />
                  </div>
                  <div className='switch'>
                    <p>Parish</p>
                    <Switch onClick={() => setActive({ ...active, parish: !active.parish })} />
                  </div>
                  <div className='switch'>
                    <p>County</p>
                    <Switch onClick={() => setActive({ ...active, county: !active.county })} />
                  </div>
                  <div className='switch'>
                    <p>State Forest</p>
                    <Switch
                      onClick={() =>
                        setActive({
                          ...active,
                          stateForest: !active.stateForest,
                        })
                      }
                    />
                  </div>
                  <div className='switch'>
                    <p>NPWS Reserve</p>
                    <Switch
                      onClick={() =>
                        setActive({
                          ...active,
                          npwsReserve: !active.npwsReserve,
                        })
                      }
                    />
                  </div>
                  <div className='switch'>
                    <p>Local Government</p>
                    <Switch onClick={() => setActive({ ...active, localGov: !active.localGov })} />
                  </div>
                  <div className='switch'>
                    <p>State Government</p>
                    <Switch onClick={() => setActive({ ...active, stateGov: !active.stateGov })} />
                  </div>
                  <div className='switch'>
                    <p>Federal Government</p>
                    <Switch onClick={() => setActive({ ...active, federalGov: !active.federalGov })} />
                  </div>
                </div>
                <div className='switch-wrapper'>
                  <h2>Property</h2>
                  <div className='switch'>
                    <p>Port Botany Berth Numbers</p>
                    <Switch onClick={() => setActive({ ...active, pbBerths: !active.pbBerths })} />
                  </div>
                  <div className='switch'>
                    <p>Port Kembla Berth Numbers</p>
                    <Switch onClick={() => setActive({ ...active, pkBerths: !active.pkBerths })} />
                  </div>
                </div>
              </div>
            </div>
          </StyledControls>
        </StyledContainer>
      </div>
      <div className='map-wrapper'>
        <Map viewport={viewport} active={active} />
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
      margin: 10px 0;

      p {
        margin: 0;
      }
    }
  }
`;
