import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Switch from "react-switch";

import { useTrackedState, useSetState } from "../../store";

export default function SwitchComp({ item }) {
  const state = useTrackedState();
  const setState = useSetState();
  const { register } = useForm();

  const handleToggle = (e, key) => {
    setState((prev) => ({ ...prev, [key]: e }));
  };

  const { label, icon, iconUrl, key } = item;

  return (
    <StyledSwitch name={`switch-${label}`} key={label}>
      <label>
        <span>
          {icon ? icon : <img src={iconUrl} alt={key} />}
          <p>{label}</p>
        </span>
        <Switch
          ref={register}
          onChange={(e) => handleToggle(e, key)}
          checked={state[key]}
          checkedIcon={false}
          uncheckedIcon={false}
          onColor='#68a0b9'
          offColor='#A9A9A9'
          height={24}
          width={45}
        />
      </label>
    </StyledSwitch>
  );
}

const StyledSwitch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0;
  width: 100%;

  label {
    display: flex;
    justify-content: space-between;
    width: 100%;
    cursor: pointer;
    align-items: center;
  }

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  span {
    display: flex;
    align-items: center;

    img,
    svg {
      height: 50px;
      width: 50px;
    }

    p {
      margin: 0 0 0 20px;
      margin-left: 22px;
      color: #000;
      font-size: 18px;
      font-weight: 500;
      font-family: "Roboto Condensed";
      border-bottom: 1px solid #fff;

      &:hover {
        color: #68a0b9;
      }
    }
  }
`;
