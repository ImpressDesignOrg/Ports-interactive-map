import React, { useContext } from 'react';
import styled from 'styled-components';
import { Form } from 'antd';

import MapContext from '../../../MapContext';

import {
  PB_SWITCHES,
  PK_SWITCHES,
  CR_SWITCHES,
  EN_SWITCHES,
} from '../../../data/toggles';

import { useForm } from 'antd/lib/form/util';
import SwitchControl from '../SwitchControl';

export default function ActiveLayersForm() {
  const [form] = useForm();
  const { viewing, setActive } = useContext(MapContext);

  const handleReset = () => {
    setActive({});
    form.resetFields();
  };

  return (
    <StyledContainer>
      <div className='heading-wrapper'>
        <h2>NSW Ports Data</h2>
        <button htmlType='reset' onClick={() => handleReset()}>
          Clear
        </button>
      </div>
      <Form form={form}>
        <div className='toggles-wrapper'>
          {viewing === 'AUSTRALIA' &&
            PB_SWITCHES.map((v) => <SwitchControl item={v} />)}
          {viewing === 'ALL LOCATIONS' &&
            PB_SWITCHES.map((v) => <SwitchControl item={v} />)}
          {viewing === 'PB' &&
            PB_SWITCHES.map((v) => <SwitchControl item={v} />)}
          {viewing === 'PK' &&
            PK_SWITCHES.map((v) => <SwitchControl item={v} />)}
          {viewing === 'CR' &&
            CR_SWITCHES.map((v) => <SwitchControl item={v} />)}
          {viewing === 'EN' &&
            EN_SWITCHES.map((v) => <SwitchControl item={v} />)}
        </div>
      </Form>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  margin: 20px 0;
  font-family: 'Roboto';

  .heading-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 22px;
      color: #000;
      font-weight: 700;
    }

    button {
      background: none;
      border: none;
      border-bottom: 1px solid #68a0b9;
      box-shadow: none;
      cursor: pointer;
      font-size: 12px;
      font-family: 'Roboto';
      font-weight: 500;

      &:hover {
        border-bottom: 1px solid #1d384b;
      }

      &:focus {
        border: none;
        outline: none;
      }
    }
  }

  form {
    width: 100%;
    max-height: 400px;
    overflow: scroll;
    overflow-x: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
