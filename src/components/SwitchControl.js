import React, { useContext } from 'react';
import styled from 'styled-components';
import { Switch, Form } from 'antd';

import MapContext from '../MapContext';

export default function SwitchControl({ item }) {
  const { active, setActive } = useContext(MapContext);

  const { label, icon, key } = item;

  const handleToggle = (e, key) => {
    setActive({ ...active, [key]: e });
  };

  return (
    <StyledSwitch key={label}>
      <div className='label-wrapper'>
        {icon}
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
  margin: 7px 0;

  .label-wrapper {
    display: flex;
    align-items: center;

    p {
      margin: 0 0 0 20px;
    }
  }

  .ant-form-item {
    margin: 0;

    button {
      margin: 0;
    }
  }
`;
