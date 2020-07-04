import React, { useContext } from 'react';
import styled from 'styled-components';
import { Switch, Form } from 'antd';

import MapContext from '../../MapContext';

export default function SwitchControl({ item }) {
  const { active, setActive } = useContext(MapContext);

  const { label, icon, iconUrl, key } = item;

  const handleToggle = (e, key) => {
    setActive({ ...active, [key]: e });
  };

  return (
    <StyledSwitch key={label}>
      <div className='label-wrapper'>
        {icon ? icon : <img src={iconUrl} alt={key} />}
        <p>{label}</p>
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
      font-weight: 500;
      font-family: 'Roboto Condensed';
    }
  }

  .ant-form-item {
    margin: 0;

    button {
      margin: 0;
    }
  }
`;
