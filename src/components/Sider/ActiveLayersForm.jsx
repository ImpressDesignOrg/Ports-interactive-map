import React, { useContext } from 'react';
import styled from 'styled-components';
import { Button, Collapse, Form } from 'antd';

import MapContext from '../../MapContext';

import {
  keyFreightRouteSwitches,
  nswAdminBoundariesSwitches,
  propertySwitches,
  assetMgtSwitches,
} from '../../data/toggles';

import { useForm } from 'antd/lib/form/util';
import SwitchControl from '../SwitchControl';

const { Panel } = Collapse;

export default function ActiveLayersForm() {
  const [form] = useForm();
  const { setActive } = useContext(MapContext);

  const handleReset = () => {
    setActive({});
    form.resetFields();
  };

  return (
    <StyledWrapper>
      <Form form={form}>
        <div className='reset-wrapper'>
          <Button htmlType='reset' onClick={() => handleReset()}>
            RESET
          </Button>
        </div>
        <div className='accordions-wrapper'>
          <Collapse defaultActiveKey={['2']} expandIconPosition='right'>
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
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
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

  .ant-collapse {
    margin: 8px 0;

    .ant-collapse-item {
      .ant-switch-checked {
        background: #1d384b;
      }
    }

    .ant-collapse-header {
      font-size: 16px;
      font-weight: 300;
    }

    .ant-collapse-item-active {
      background: #1d384b;

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
