import React, { useContext } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import Switch from 'react-switch';

import Context from '../../context';

export default function SwitchComp({ item, label }) {
  const [data, setData] = useContext(Context);
  const { register } = useForm();

  const handleToggle = (e, key) => {
    setData((prev) => ({ ...prev, [key]: e }));
  };

  const { icon, iconUrl, key } = item;

  return (
    <StyledSwitch id={`switch-${key}`} name={`switch-${label}`} key={label}>
      <label>
        <span>
          {icon ? icon : <img src={iconUrl} alt={key} />}
          <p>{label}</p>
        </span>
        <Switch
          ref={register}
          onChange={(e) => handleToggle(e, key)}
          checked={data[key]}
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
  margin: 13px 0;
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
      margin: 0 0 0 15px;
      color: #000;
      font-size: 18px;
      font-weight: 500;
      font-family: 'Roboto Condensed';
      border-bottom: 1px solid #fff;

      &:hover {
        color: #68a0b9;
      }
    }
  }
`;
