import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Switch } from 'antd';
import { MdLocalAirport, MdDirectionsBoat } from 'react-icons/md';

import Map from './Map';

const viewports = {
  PB: {
    zoom: 13,
    center: [151.218, -33.976],
  },
  PK: { zoom: 13, center: [150.8996, -34.4854] },
  CR: { zoom: 14, center: [151.168, -33.9158] },
  EN: { zoom: 14, center: [151.0644, -33.9078] },
};

export default function Sidebar() {
  const [visible, setVisible] = useState(false);
  const [viewport, setViewport] = useState({
    zoom: 10,
    center: [150.9729, -34.2457],
  });
  const [active, setActive] = useState({});

  const handleToggle = (e, key) => setActive({ ...active, [key]: e });

  console.log('active :>> ', active);

  return (
    <>
      <div className='sidebar-wrapper'>
        <StyledToggle visible={visible} onClick={() => setVisible(!visible)}>
          {visible ? 'X' : '<'}
        </StyledToggle>
        <StyledContainer visible={visible}>
          <div className='viewport-buttons-wrapper'>
            <div className='viewport-buttons-content'>
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
                  <h5>Operations - Key Freight Routes</h5>
                  <div className='switch'>
                    <MdLocalAirport />
                    <p>Airports</p>
                    <Switch onClick={(e) => handleToggle(e, 'airports')} />
                  </div>
                  <div className='switch'>
                    <MdDirectionsBoat />
                    <p>Seaports</p>
                    <Switch onClick={(e) => handleToggle(e, 'seaports')} />
                  </div>
                  <div className='switch'>
                    <MdLocalAirport />
                    <p>Intermodal Terminals</p>
                    <Switch onClick={(e) => handleToggle(e, 'intermodalTerminals')} />
                  </div>
                  <div className='switch'>
                    <MdLocalAirport />
                    <p>Road Train Assembly</p>
                    <Switch onClick={(e) => handleToggle(e, 'roadTrainAssembly')} />
                  </div>
                  <div className='switch'>
                    <MdLocalAirport />
                    <p>Key Road</p>
                    <Switch onClick={(e) => handleToggle(e, 'keyRoads')} />
                  </div>
                  <div className='switch'>
                    <MdLocalAirport />
                    <p>Key Rail</p>
                    <Switch onClick={(e) => handleToggle(e, 'keyRails')} />
                  </div>
                  <div className='switch'>
                    <MdLocalAirport />
                    <p>Secondary Road</p>
                    <Switch onClick={(e) => handleToggle(e, 'secondaryRoads')} />
                  </div>
                </div>
                <div className='switch-wrapper'>
                  <h5>NSW Administrative Boundaries</h5>
                  <div className='switch'>
                    <MdLocalAirport />
                    <p>Suburbs</p>
                    <Switch onClick={(e) => handleToggle(e, 'suburbs')} />
                  </div>
                  <div className='switch'>
                    <MdLocalAirport />
                    <p>Parish</p>
                    <Switch onClick={(e) => handleToggle(e, 'parish')} />
                  </div>
                  <div className='switch'>
                    <p>County</p>
                    <Switch onClick={(e) => handleToggle(e, 'county')} />
                  </div>
                  <div className='switch'>
                    <p>State Forest</p>
                    <Switch onClick={(e) => handleToggle(e, 'stateForest')} />
                  </div>
                  <div className='switch'>
                    <p>NPWS Reserve</p>
                    <Switch onClick={(e) => handleToggle(e, 'npwsReserve')} />
                  </div>
                  <div className='switch'>
                    <p>Local Government</p>
                    <Switch onClick={(e) => handleToggle(e, 'localGov')} />
                  </div>
                  <div className='switch'>
                    <p>State Government</p>
                    <Switch onClick={(e) => handleToggle(e, 'stateGov')} />
                  </div>
                  <div className='switch'>
                    <p>Federal Government</p>
                    <Switch onClick={(e) => handleToggle(e, 'federalGov')} />
                  </div>
                </div>
                <div className='switch-wrapper'>
                  <h5>Property</h5>
                  <div className='switch'>
                    <p>Port Botany Berths</p>
                    <Switch onClick={(e) => handleToggle(e, 'pbBerths')} />
                  </div>
                  <div className='switch'>
                    <p>Port Kembla Berths</p>
                    <Switch onClick={(e) => handleToggle(e, 'pkBerths')} />
                  </div>
                  <div className='switch'>
                    <p>Port Botany Gates</p>
                    <Switch onClick={(e) => handleToggle(e, 'pbGates')} />
                  </div>
                  <div className='switch'>
                    <p>Port Botany Gates</p>
                    <Switch onClick={(e) => handleToggle(e, 'pbGates')} />
                  </div>
                  <div className='switch'>
                    <p>Tenancy Lease Areas</p>
                    <Switch onClick={(e) => handleToggle(e, 'tenancyLeaseAreas')} />
                  </div>
                  <div className='switch'>
                    <p>Tenancy Units</p>
                    <Switch onClick={(e) => handleToggle(e, 'tenancyUnits')} />
                  </div>
                  <div className='switch'>
                    <p>Lease Boundary</p>
                    <Switch onClick={(e) => handleToggle(e, 'leaseBoundaries')} />
                  </div>
                </div>
                <div className='switch-wrapper'>
                  <h5>Asset Management</h5>
                  <div className='switch'>
                    <p>Breakwater Revetments</p>
                    <Switch onClick={(e) => handleToggle(e, 'breakwaterRevetments')} />
                  </div>
                  <div className='switch'>
                    <p>Buildings</p>
                    <Switch onClick={(e) => handleToggle(e, 'buildings')} />
                  </div>
                  <div className='switch'>
                    <p>Heritage</p>
                    <Switch onClick={(e) => handleToggle(e, 'heritage')} />
                  </div>
                  <div className='switch'>
                    <p>Maritime Structures</p>
                    <Switch onClick={(e) => handleToggle(e, 'maritimeStructures')} />
                  </div>
                  <div className='switch'>
                    <p>Rail Network</p>
                    <Switch onClick={(e) => handleToggle(e, 'railNetwork')} />
                  </div>
                  <div className='switch'>
                    <p>Road Network</p>
                    <Switch onClick={(e) => handleToggle(e, 'roadNetwork')} />
                  </div>
                  <div className='switch'>
                    <p>Port Botany Labels</p>
                    <Switch onClick={(e) => handleToggle(e, 'pbLabels')} />
                  </div>
                  <div className='switch'>
                    <p>Port Botany Lines</p>
                    <Switch onClick={(e) => handleToggle(e, 'pbLines')} />
                  </div>
                  <div className='switch'>
                    <p>Port Kembla Labels</p>
                    <Switch onClick={(e) => handleToggle(e, 'pkLabels')} />
                  </div>
                  <div className='switch'>
                    <p>Port Kembla Lines</p>
                    <Switch onClick={(e) => handleToggle(e, 'pkLines')} />
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

const StyledToggle = styled(Button)`
  z-index: 3;
  right: ${(props) => (props.visible ? '50px' : '10px')};
  top: 10px;
`;

const StyledContainer = styled.div`
  padding: 30px;
  background: #fff;
  height: 100%;
  position: absolute;
  width: 350px;
  height: 100vh;
  z-index: 2;
  right: 30px;
  top: 0;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.visible ? '1' : '0')};
  transition: visibility 1s, opacity 0.5s linear;

  .viewport-buttons-wrapper {
    margin: 20px 0;

    .viewport-buttons-content {
      display: flex;
      flex-wrap: wrap;

      button {
        flex: 0 0 46%;
        margin: 5px;
      }
    }
  }
`;

const StyledControls = styled.div`
  .switch-wrapper {
    .switch {
      display: flex;
      align-items: center;
      width: 300px;
      justify-content: space-between;
      margin: 7px 0;

      p {
        margin: 0;
      }
    }
  }
`;
