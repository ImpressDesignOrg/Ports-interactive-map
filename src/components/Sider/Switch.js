import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import { useSetState } from "../../store";

export default function Switch({ item }) {
  const setState = useSetState();
  const { register } = useForm();

  const handleToggle = (e, key) => setState((prev) => ({ ...prev, [key]: e }));

  const { label, icon, iconUrl, key } = item;

  return (
    <StyledSwitch name={`switch-${label}`} key={label} className='switch-wrapper'>
      <div className='label-wrapper'>
        {icon ? icon : <img src={iconUrl} alt={key} />}
        <p>{label}</p>
      </div>
      <label className='switch' onClick={(e) => handleToggle(e, key)} ref={register}>
        <input type='checkbox' />
        <span className='slider round' />
      </label>
    </StyledSwitch>
  );
}

const StyledSwitch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0;
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

  .switch {
    position: relative;
    display: inline-block;
    width: 49px;
    height: 24px;

    input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      transition: 0.3s;
      border-radius: 34px;

      &:before {
        position: absolute;
        content: "";
        border-radius: 50%;
        height: 19px;
        width: 19px;
        left: 4px;
        bottom: 3px;
        background-color: white;
        transition: 0.3s;
      }
    }

    input:checked + .slider:before {
      transform: translateX(22px);
    }

    input:checked + .slider {
      background-color: #2196f3;
    }

    input:focus + .slider {
      box-shadow: 0 0 1px #2196f3;
    }
  }
`;
