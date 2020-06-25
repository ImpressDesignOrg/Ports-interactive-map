import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Collapse, Switch } from 'antd';

import Map from './Map';
import SidebarLegend from './SidebarLegend';

import {
  keyFreightRouteSwitches,
  nswAdminBoundariesSwitches,
  propertySwitches,
  assetMgtSwitches,
} from '../data/controls/switches';

const { Panel } = Collapse;

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
            <div className='content'>
              <Collapse expandIconPosition='right'>
                <Panel header='Key Freight Routes'>
                  {keyFreightRouteSwitches.map((v) => {
                    const { label, icon, key } = v;

                    return (
                      <StyledSwitch key={label}>
                        <SidebarLegend icon={icon} text={label} />
                        <Switch onClick={(e) => handleToggle(e, key)} />
                      </StyledSwitch>
                    );
                  })}
                </Panel>
              </Collapse>
              <Collapse expandIconPosition='right'>
                <Panel header='NSW Administrative Boundaries'>
                  {nswAdminBoundariesSwitches.map((v) => {
                    const { label, icon, key } = v;

                    return (
                      <StyledSwitch key={label}>
                        <SidebarLegend icon={icon} text={label} />
                        <Switch onClick={(e) => handleToggle(e, key)} />
                      </StyledSwitch>
                    );
                  })}
                </Panel>
              </Collapse>
              <Collapse expandIconPosition='right'>
                <Panel header='Property'>
                  {propertySwitches.map((v) => {
                    const { label, icon, key } = v;

                    return (
                      <StyledSwitch key={label}>
                        <SidebarLegend icon={icon} text={label} />
                        <Switch onClick={(e) => handleToggle(e, key)} />
                      </StyledSwitch>
                    );
                  })}
                </Panel>
              </Collapse>
              <Collapse expandIconPosition='right'>
                <Panel header='Asset Management'>
                  {assetMgtSwitches.map((v) => {
                    const { label, icon, key } = v;

                    return (
                      <StyledSwitch key={label}>
                        <SidebarLegend icon={icon} text={label} />
                        <Switch onClick={(e) => handleToggle(e, key)} />
                      </StyledSwitch>
                    );
                  })}
                </Panel>
              </Collapse>
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
  .content {
    .ant-collapse {
      margin: 8px 0;

      .ant-collapse-item {
      }

      .ant-collapse-item-active {
        background: #1890ff;

        .ant-collapse-header {
          color: #fff;
        }
      }
    }
  }
`;

const StyledSwitch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
`;
