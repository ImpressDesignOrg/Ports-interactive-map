import React, { useContext } from 'react';
import styled from 'styled-components';
import { Button, Collapse, Form } from 'antd';
import { AiOutlineClose } from 'react-icons/ai';

import MapContext from '../../MapContext';

import { PB_SWITCHES, PK_SWITCHES, CR_SWITCHES, EN_SWITCHES } from '../../data/toggles';

import { useForm } from 'antd/lib/form/util';
import SwitchControl from './SwitchControl';

export default function ActiveLayersForm() {
  const [form] = useForm();
  const { viewing, setActive } = useContext(MapContext);

  const handleReset = () => {
    setActive({});
    form.resetFields();
  };

  return (
    <StyledWrapper>
      <Form form={form}>
        <div className='reset-wrapper'>
          <Button htmlType='reset' onClick={() => handleReset()}>
            <AiOutlineClose />
          </Button>
        </div>
        <div className='accordions-wrapper'>
          {viewing === 'AUSTRALIA' && PB_SWITCHES.map((v) => <SwitchControl item={v} />)}
          {viewing === 'ALL LOCATIONS' && PB_SWITCHES.map((v) => <SwitchControl item={v} />)}
          {viewing === 'PB' && PB_SWITCHES.map((v) => <SwitchControl item={v} />)}
          {viewing === 'PK' && PK_SWITCHES.map((v) => <SwitchControl item={v} />)}
          {viewing === 'CR' && CR_SWITCHES.map((v) => <SwitchControl item={v} />)}
          {viewing === 'EN' && EN_SWITCHES.map((v) => <SwitchControl item={v} />)}
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
`;
