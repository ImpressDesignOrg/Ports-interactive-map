import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Button, Collapse, Form } from 'antd';

import MapContext from '../MapContext';

import LocationButtons from './LocationButtons';

import {
  keyFreightRouteSwitches,
  nswAdminBoundariesSwitches,
  propertySwitches,
  assetMgtSwitches,
} from '../data/toggles';

import { useForm } from 'antd/lib/form/util';
import SwitchControl from './SwitchControl';

const { Panel } = Collapse;

export default function Sidebar() {
  const [visible, setVisible] = useState(true);

  const { setActive } = useContext(MapContext);

  const [form] = useForm();

  const handleReset = () => {
    setActive({});
    form.resetFields();
  };

  return (
    <div className='sidebar-wrapper'>
      <StyledToggle visible={visible} onClick={() => setVisible(!visible)}>
        {visible ? 'X' : '<'}
      </StyledToggle>
      <StyledContainer visible={visible}>
        <LocationButtons />
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
                  {keyFreightRouteSwitches.map((v) => (
                    <SwitchControl item={v} />
                  ))}
                </Panel>
                <Panel header='NSW Administrative Boundaries'>
                  {nswAdminBoundariesSwitches.map((v) => (
                    <SwitchControl item={v} />
                  ))}
                </Panel>
                <Panel header='Property'>
                  {propertySwitches.map((v) => (
                    <SwitchControl item={v} />
                  ))}
                </Panel>
                <Panel header='Asset Management'>
                  {assetMgtSwitches.map((v) => (
                    <SwitchControl item={v} />
                  ))}
                </Panel>
              </Collapse>
            </Form>
          </div>
        </StyledControls>
      </StyledContainer>
    </div>
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
