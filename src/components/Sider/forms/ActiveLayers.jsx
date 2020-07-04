import React, { useContext } from 'react';
import styled from 'styled-components';
import { Form } from 'antd';

import MapContext from '../../../MapContext';
import { useSetState, useTrackedState } from '../../../store';

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
  const state = useTrackedState();
  const setState = useSetState();

  const handleReset = () => {
    setState((prev) => ({ ...prev, active: {} }));
    form.resetFields();
  };

  const headingMarkup = () => {
    switch (state.viewing) {
      case 'AUS':
        return 'Australia';
      case 'ALL':
        return 'NSW Ports';
      case 'PB':
        return 'Port Botany';
      case 'PK':
        return 'Port Kembla';
      case 'CR':
        return 'Cooks River Intermodal';
      case 'EN':
        return 'Enfield Intermodal';
      default:
        break;
    }
  };

  return (
    <StyledContainer>
      <div className='heading-wrapper'>
        <h2>{headingMarkup()}</h2>
        <div className='buttons-wrapper'>
          <button
            onClick={() => setState((prev) => ({ ...prev, siderLevel: 1 }))}
          >
            Locations
          </button>
          <button htmlType='reset' onClick={() => handleReset()}>
            Clear
          </button>
        </div>
      </div>
      <Form form={form}>
        <div className='toggles-wrapper'>
          {state.viewing === 'AUSTRALIA' &&
            PB_SWITCHES.map((v) => <SwitchControl item={v} />)}
          {state.viewing === 'ALL LOCATIONS' &&
            PB_SWITCHES.map((v) => <SwitchControl item={v} />)}
          {state.viewing === 'PB' &&
            PB_SWITCHES.map((v) => <SwitchControl item={v} />)}
          {state.viewing === 'PK' &&
            PK_SWITCHES.map((v) => <SwitchControl item={v} />)}
          {state.viewing === 'CR' &&
            CR_SWITCHES.map((v) => <SwitchControl item={v} />)}
          {state.viewing === 'EN' &&
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
    h2 {
      font-size: 22px;
      color: #000;
      font-weight: 700;
      margin: 0 0 10px 0;
      padding: 0;
    }

    .buttons-wrapper {
      text-align: right;

      button {
        background: none;
        border: none;
        border-bottom: 1px solid #68a0b9;
        box-shadow: none;
        cursor: pointer;
        font-size: 12px;
        font-family: 'Roboto';
        font-weight: 500;
        margin: 0 10px;

        &:hover {
          border-bottom: 1px solid #1d384b;
        }

        &:focus {
          border: none;
          outline: none;
        }
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
