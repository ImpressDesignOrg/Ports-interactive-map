import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Collapse, Switch, Form } from 'antd';

import Map from './Map';
import SidebarLegend from './SidebarLegend';

import {
  keyFreightRouteSwitches,
  nswAdminBoundariesSwitches,
  propertySwitches,
  assetMgtSwitches,
} from '../data/toggles';
import { viewports } from '../data/viewports';
import { useForm } from 'antd/lib/form/util';

const { Panel } = Collapse;

export default function Sidebar() {
  const [visible, setVisible] = useState(false);
  const [viewport, setViewport] = useState({
    zoom: 10,
    center: [150.9729, -34.2457],
  });
  const [active, setActive] = useState({});

  const [form] = useForm();

  const handleToggle = (e, key) => setActive({ ...active, [key]: e });
  const handleReset = () => {
    setActive({});
    form.resetFields();
  };

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
              <Form form={form}>
                <Form.Item>
                  <Button htmlType='reset' onClick={() => handleReset()}>
                    RESET
                  </Button>
                </Form.Item>
                <Collapse expandIconPosition='right'>
                  <Panel header='Key Freight Routes'>
                    {keyFreightRouteSwitches.map((v) => {
                      const { label, icon, key } = v;

                      return (
                        <StyledSwitch key={label}>
                          <SidebarLegend icon={icon} text={label} />
                          <Form.Item name='switch'>
                            <Switch onClick={(e) => handleToggle(e, key)} />
                          </Form.Item>
                        </StyledSwitch>
                      );
                    })}
                  </Panel>
                  <Panel header='NSW Administrative Boundaries'>
                    {nswAdminBoundariesSwitches.map((v) => {
                      const { label, icon, key } = v;

                      return (
                        <StyledSwitch key={label}>
                          <SidebarLegend icon={icon} text={label} />
                          <Form.Item name='switch'>
                            <Switch onClick={(e) => handleToggle(e, key)} />
                          </Form.Item>
                        </StyledSwitch>
                      );
                    })}
                  </Panel>
                  <Panel header='Property'>
                    {propertySwitches.map((v) => {
                      const { label, icon, key } = v;

                      return (
                        <StyledSwitch key={label}>
                          <SidebarLegend icon={icon} text={label} />
                          <Form.Item name='switch'>
                            <Switch onClick={(e) => handleToggle(e, key)} />
                          </Form.Item>
                        </StyledSwitch>
                      );
                    })}
                  </Panel>
                  <Panel header='Asset Management'>
                    {assetMgtSwitches.map((v) => {
                      const { label, icon, key } = v;

                      return (
                        <StyledSwitch key={label}>
                          <SidebarLegend icon={icon} text={label} />
                          <Form.Item name='switch'>
                            <Switch onClick={(e) => handleToggle(e, key)} />
                          </Form.Item>
                        </StyledSwitch>
                      );
                    })}
                  </Panel>
                </Collapse>
              </Form>
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
  margin-top: 50px;
  overflow: scroll;
  max-height: 70%;

  .content {
    .ant-form .ant-form-item button {
    }

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

  .ant-form-item {
    margin: 0;

    button {
      margin: 0;
    }
  }
`;
