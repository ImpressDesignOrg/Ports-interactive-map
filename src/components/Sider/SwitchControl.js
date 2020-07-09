import React from "react";
import styled from "styled-components";
import { Switch, Form } from "antd";

import { useSetState } from "../../store";

export default function SwitchControl({ item }) {
  const setState = useSetState();

  const handleToggle = (e, key) => setState((prev) => ({ ...prev, [key]: e }));

  const { label, icon, iconUrl, key } = item;

  return (
    <StyledSwitch key={label} className='switch-wrapper'>
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
  cursor: pointer;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  .label-wrapper {
    display: flex;
    align-items: center;

    img {
      height: 30px;
      width: 30px;
    }

    p {
      margin: 0 0 0 20px;
      margin-left: 22px;
      color: #000;
      font-size: 16px;
      font-weight: 500;
      font-family: "Roboto Condensed";
      border-bottom: 1px solid #fff;
    }
  }

  .ant-form-item {
    margin: 0;

    button {
      margin: 0;
    }

    .ant-switch {
      min-width: 37px;
    }

    .ant-switch-checked {
      background: #68a0b9;
    }
  }
`;
