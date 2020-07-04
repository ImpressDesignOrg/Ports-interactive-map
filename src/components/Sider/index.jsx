import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import { useTrackedState } from '../../store';

import LocationButtons from './forms/LocationButtons';
import ActiveLayers from './forms/ActiveLayers';

export default function Sidebar() {
  const [visible, setVisible] = useState(true);
  const state = useTrackedState();

  return (
    <StyledWrapper visible={visible}>
      <StyledToggle visible={visible} onClick={() => setVisible(!visible)}>
        {visible ? <AiOutlineArrowRight /> : <AiOutlineArrowLeft />}
      </StyledToggle>
      <div className='content'>
        {state.siderLevel === 1 ? <LocationButtons /> : <ActiveLayers />}
        <div className='info'>NSW Ports Info Box</div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .content {
    padding: 20px 40px;
    background: #fff;
    height: 100%;
    position: absolute;
    width: 350px;
    height: 700px;
    z-index: 2;
    right: 30px;
    top: 40px;
    border-radius: 10px;
    visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.visible ? '1' : '0')};
    transition: visibility 0.5s, opacity 0.1s linear;

    .info {
      position: absolute;
      height: 205px;
      width: 350px;
      left: 0px;
      background: #68a0b9;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
`;

const StyledToggle = styled(Button)`
  position: absolute;
  z-index: 3;
  right: ${(props) => (props.visible ? '380px' : '0')};
  top: 7%;
  height: 60px;
  border: none;
  display: flex;
  align-items: center;
  background: #68a0b9;

  &:hover {
    background: #1d384b;
  }
`;
