import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import { useTrackedState } from "../../store";

import LocationButtons from "./LocationButtons";
import ActiveLayers from "./ActiveLayers";

export default function Sidebar() {
  const [visible, setVisible] = useState(true);
  const state = useTrackedState();

  const INFO_BODY = () => {
    switch (state.viewing) {
      case "default":
      case "AUS":
      case "ALL":
        return "Interested in learning more about NSW Ports and our operations?";
      case "PB":
        return "Interested in learning more about Port Botany?";
      case "PK":
        return "Interested in learning more about Port Kembla?";
      case "EN":
        return "Interested in learning more about Enfield Intermodal Terminal?";
      case "CR":
        return "Interested in learning more about Cooks River Intermodal Terminal?";
      default:
        break;
    }
  };

  const INFO_URL = () => {
    switch (state.viewing) {
      case "AUS":
      case "ALL":
      case "PK":
      case "EN":
      case "CR":
      case "PB":
        return "/";
      default:
        break;
    }
  };

  return (
    <div className='sidebar-wrapper'>
      <StyledToggle visible={visible} onClick={() => setVisible(!visible)}>
        {visible ? (
          <AiOutlineArrowRight size='20px' color='#68a0b9' />
        ) : (
          <AiOutlineArrowLeft size='20px' color='#68a0b9' />
        )}
      </StyledToggle>
      <StyledContent visible={visible}>
        {state.siderLevel === 1 ? <LocationButtons /> : <ActiveLayers />}
        <div className='info-wrapper'>
          <div className='info-content'>
            <div className='heading'>Want to find out more?</div>
            <div className='body'>
              <p>
                {INFO_BODY()}
                <a href={INFO_URL()} target='_blank' rel='noopener noreferrer'>
                  Find out more information here
                </a>
              </p>
            </div>
          </div>
        </div>
      </StyledContent>
    </div>
  );
}

const StyledToggle = styled.button`
  z-index: 3;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: ${(props) => (props.visible ? "380px" : "0")};
  top: 7%;
  height: 60px;
  width: 30px;
  border: none;
  cursor: pointer;
  background: #efefef;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  &:hover {
    background: #1d384b;
  }
`;

const StyledContent = styled.div`
  padding: 20px 40px;
  background: #fff;
  height: 100%;
  position: absolute;
  width: 268px;
  height: 700px;
  z-index: 2;
  right: 30px;
  top: 40px;
  border-radius: 10px;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  opacity: ${(props) => (props.visible ? "1" : "0")};
  transition: visibility 0.5s, opacity 0.1s linear;

  .info-wrapper {
    position: absolute;
    height: 207px;
    width: 350px;
    left: 0;
    bottom: 0;
    background: #68a0b9;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    .info-content {
      padding: 40px 30px;

      .heading {
        font-size: 22px;
        font-family: "Roboto Condensed";
        color: #fff;
        font-weight: 600;
        border-bottom: 1px solid #fff;
        margin-bottom: 20px;
      }

      p {
        font-size: 18px;
        color: #fff;
        font-family: "Roboto";
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
