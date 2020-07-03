import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import MapContext from '../../MapContext';

import LocationButtons from './LocationButtons';
import ActiveLayersForm from './ActiveLayersForm';

export default function Sidebar() {
  const [visible, setVisible] = useState(true);
  const { siderLevel, setSiderLevel } = useContext(MapContext);

  const handleVisible = () => setVisible(!visible);

  return (
    <StyledWrapper visible={visible}>
      <div className='toggle-wrapper'>
        <StyledToggle visible={visible} onClick={() => handleVisible()}>
          {visible ? <AiOutlineArrowRight color='#000' /> : <AiOutlineArrowLeft color='#000' />}
        </StyledToggle>
      </div>
      <div className='content'>
        {siderLevel === 1 ? (
          <Button onClick={() => setSiderLevel(siderLevel + 1)}>GO FORWARD: select a layer</Button>
        ) : (
          <Button onClick={() => setSiderLevel(siderLevel - 1)}>GO BACK: select a location</Button>
        )}
        {siderLevel === 1 ? <LocationButtons /> : <ActiveLayersForm />}
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .content {
    padding: 40px 20px;
    background: #fff;
    height: 100%;
    position: absolute;
    width: 350px;
    height: 80vh;
    z-index: 2;
    right: 30px;
    top: 85px;
    border-radius: 10px;
    visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.visible ? '1' : '0')};
    transition: visibility 0.5s, opacity 0.1s linear;
  }
`;

const StyledToggle = styled(Button)`
  position: absolute;
  z-index: 3;
  right: ${(props) => (props.visible ? '380px' : '0')};
  top: 15%;
  height: 80px;
  border: none;
  display: flex;
  align-items: center;
`;
