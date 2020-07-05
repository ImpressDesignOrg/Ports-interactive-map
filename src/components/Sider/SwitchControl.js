import React from 'react';
import styled from 'styled-components';
import { Switch, Form } from 'antd';
import { FaInfoCircle } from 'react-icons/fa';

import { useSetState, useTrackedState } from '../../store';

export default function SwitchControl({ item }) {
  const state = useTrackedState();
  const setState = useSetState();

  const handleToggle = (e, key) => {
    setState((prev) => ({ ...prev, [key]: e }));
  };

  const handleLabelClick = (label) => {
    setState((prev) => ({ ...prev, activeInfo: label }));
  };

  const { label, icon, iconUrl, key } = item;

  return (
    <StyledSwitch key={label}>
      <div className='label-wrapper' onClick={() => handleLabelClick(label)}>
        {icon ? icon : <img src={iconUrl} alt={key} />}
        <p>{label}</p>
        <FaInfoCircle size='15px' />
      </div>
      <Form.Item name='switch'>
        <Switch onClick={(e) => handleToggle(e, key)} />
      </Form.Item>
    </StyledSwitch>
  );
}

const StyledSwitch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;

  .label-wrapper {
    display: flex;
    align-items: center;

    p {
      margin: 0 0 0 20px;
      margin-left: 22px;
      color: #000;
      font-size: 15px;
      font-weight: 500;
      font-family: 'Roboto Condensed';
      border-bottom: 1px solid #fff;
    }

    &:hover {
      cursor: pointer;

      p {
        border-bottom: 1px solid #68a0b9;
      }
    }
  }

  .ant-form-item {
    margin: 0;

    button {
      margin: 0;
    }

    .ant-switch-checked {
      background: #68a0b9;
    }
  }
`;
