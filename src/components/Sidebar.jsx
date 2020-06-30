import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Button, Collapse, Form } from 'antd';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

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

  const handleVisible = () => setVisible(!visible);

  const handleReset = () => {
    setActive({});
    form.resetFields();
  };

  return (
    <StyledWrapper visible={visible}>
      <div className='toggle-wrapper'>
        {visible ? (
          <StyledToggle visible={visible} onClick={() => handleVisible()}>
            <AiOutlineArrowRight />
          </StyledToggle>
        ) : (
          <StyledToggle visible={visible} onClick={() => handleVisible()}>
            <AiOutlineArrowLeft />
          </StyledToggle>
        )}
      </div>
      <div className='content'>
        <LocationButtons />
        <div className='form-wrapper'>
          <Form form={form}>
            <div className='reset-wrapper'>
              <Button htmlType='reset' onClick={() => handleReset()}>
                RESET
              </Button>
            </div>
            <div className='accordions-wrapper'>
              <Collapse defaultActiveKey={['1']} expandIconPosition='right'>
                <Panel header='Key Freight Routes' disabled={true}>
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
            </div>
          </Form>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .content {
    padding: 30px;
    background: #fff;
    height: 100%;
    position: absolute;
    width: 450px;
    height: 100vh;
    z-index: 2;
    right: 30px;
    top: 0;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.visible ? '1' : '0')};
    transition: visibility 0.5s, opacity 0.1s linear;
  }

  .content .form-wrapper {
    margin-top: 50px;
    max-height: 70%;
    overflow: scroll;
    overflow-x: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;

    ::-webkit-scrollbar {
      display: none;
    }

    .reset-wrapper {
      text-align: right;
    }

    .accordions-wrapper {
      margin-top: 10px;
    }
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

      .ant-collapse-content {
        background: #e9e9e9;
        font-size: 17px;
      }
    }
  }
`;

const StyledToggle = styled(Button)`
  position: absolute;
  z-index: 3;
  right: ${(props) => (props.visible ? '435px' : '10px')};
  top: 50%;
  height: 50px;
  border: none;
  display: flex;
  align-items: center;
`;
