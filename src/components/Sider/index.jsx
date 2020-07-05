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

  const INFO_BODY = () => {
    switch (state.viewing) {
      case 'AUS':
      case 'ALL':
        return 'Interested in learning more about NSW Ports and our operations?';
      case 'PB':
        return 'Interested in learning more about Port Botany?';
      case 'PK':
        return 'Interested in learning more about Port Kembla?';
      case 'EN':
        return 'Interested in learning more about Enfield Intermodal Terminal?';
      case 'CR':
        return 'Interested in learning more about Cooks River Intermodal Terminal?';
      default:
        break;
    }
  };

  const INFO_URL = () => {
    switch (state.viewing) {
      case 'AUS':
      case 'ALL':
      case 'PB':
      case 'PK':
      case 'EN':
      case 'CR':
        return '/';
      default:
        break;
    }
  };

  return (
    <div className='sidebar-wrapper'>
      <StyledInfoPopup>
        <div className='content'>
          <div className='heading'>{state.activeInfo}</div>
          <div className='body'>{state.activeInfo}</div>
        </div>
      </StyledInfoPopup>

      <StyledToggle visible={visible} onClick={() => setVisible(!visible)}>
        {visible ? <AiOutlineArrowRight /> : <AiOutlineArrowLeft />}
      </StyledToggle>

      <StyledContent visible={visible}>
        {state.siderLevel === 1 ? <LocationButtons /> : <ActiveLayers />}
        <div className='info-wrapper'>
          <div className='info-content'>
            <div className='heading'>Want to find out more?</div>
            <div className='body'>
              <p>
                {INFO_BODY()}{' '}
                <a href={INFO_URL()}>Find out more information here</a>
              </p>
            </div>
          </div>
        </div>
      </StyledContent>
    </div>
  );
}

const StyledInfoPopup = styled.div`
  position: absolute;
  z-index: 3;
  background: #1d384b;
  color: #fff;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  left: 20px;
  bottom: 30px;

  .content {
    .heading {
      background: #68a0b9;
      font-size: 20px;
      text-align: center;
    }

    .body {
      padding: 15px;
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

const StyledContent = styled.div`
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

  .info-wrapper {
    position: absolute;
    height: 207px;
    width: 350px;
    left: 0px;
    background: #68a0b9;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    .info-content {
      padding: 40px 30px;

      .heading {
        font-size: 22px;
        font-family: 'Roboto Condensed';
        color: #fff;
        font-weight: 600;
        border-bottom: 1px solid #fff;
        margin-bottom: 20px;
      }

      p {
        font-size: 17px;
        color: #fff;
        font-family: 'Roboto Condensed';
        font-weight: 300;

        a {
          text-decoration: none;
          cursor: pointer;
          color: #fff;
          font-weight: 600;

          &:hover {
            color: #1d384b;
          }
        }
      }
    }
  }
`;
