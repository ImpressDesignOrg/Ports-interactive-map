import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineClose } from "react-icons/ai";

import { useTrackedState } from "../../store";

import LocationButtons from "./LocationButtons";
import ActiveLayers from "./ActiveLayers";

import BannerNSWPorts from "../../images/banner--nsw-ports.svg";

export default function Sidebar() {
  const [visible, setVisible] = useState(true);
  // to adjust icon color when hovered
  const [btnHovered, setBtnHovered] = useState(false);
  const state = useTrackedState();

  let header;
  let body;
  let url;

  (() => {
    switch (state.viewing) {
      case "AUS":
      case "ALL":
        header = "NSW Ports";
        body = "Interested in learning more about NSW Ports and our operations?";
        url = "/";
        break;
      case "PB":
        header = "Port Botany";
        body = "Interested in learning more about Port Botany?";
        url = "/";
        break;
      case "PK":
        header = "Port Kembla";
        body = "Interested in learning more about Port Kembla?";
        url = "/";
        break;
      case "EN":
        header = "Enfield";
        body = "Interested in learning more about Cooks River?";
        url = "/";
        break;
      case "CR":
        header = "Cooks River";
        body = "Interested in learning more about Enfield?";
        url = "/";
        break;
      default:
        break;
    }
  })();

  return (
    <div className='sidebar-wrapper'>
      <StyledToggle
        visible={visible}
        onClick={() => setVisible(!visible)}
        onMouseEnter={() => setBtnHovered(true)}
        onMouseLeave={() => setBtnHovered(false)}
      >
        {visible ? (
          <AiOutlineArrowRight size='20px' color={btnHovered ? "#002650" : "#68a0b9"} />
        ) : (
          <AiOutlineArrowLeft size='20px' color={btnHovered ? "#002650" : "#68a0b9"} />
        )}
      </StyledToggle>
      <StyledContent visible={visible}>
        <div className='header-wrp'>
          {/* X icon is displayed on mobile only */}
          <div className='mobile-close-wrp'>
            <button onClick={() => setVisible(false)}>
              <AiOutlineClose size='30px' color='#fff' />
            </button>
          </div>
          <div className='svg-wrp'>INSERT {header} BANNER SVG</div>
        </div>
        <div className='buttons-wrapper'>{state.siderLevel === 1 ? <LocationButtons /> : <ActiveLayers />}</div>
        <div className='info-wrapper'>
          <div className='info-content'>
            <div className='heading'>Want to find out more?</div>
            <div className='body'>
              <p>
                {body}{" "}
                <a href={url} target='_blank' rel='noopener noreferrer'>
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
  top: 17%;
  height: 60px;
  width: 30px;
  border: none;
  cursor: pointer;
  background: #002650;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  &:hover {
    background: #f5a91c;
  }

  @media (max-width: 500px) {
    display: ${(props) => (props.visible ? "none" : "flex")};
  }
`;

const StyledContent = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 350px;
  z-index: 2;
  right: 30px;
  top: 4px;
  border-radius: 10px;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  opacity: ${(props) => (props.visible ? "1" : "0")};
  transition: visibility 0.5s, opacity 0.1s linear;

  @media (max-width: 500px) {
    width: 100vw;
    height: 800px;
    left: 0;
    top: 0;
    right: 0;
  }

  .header-wrp {
    background: #002650;
    height: 125px;
    position: relative;

    .mobile-close-wrp {
      z-index: 4;
      cursor: pointer;
      position: absolute;
      top: 10px;
      right: 10px;
      display: ${(props) => (props.visible ? "flex" : "none")};

      @media (min-width: 500px) {
        display: none;
      }

      button {
        background: none;
        border: none;
        margin: 10px 10px 0 auto;
      }
    }

    .svg-wrp {
      font-size: 25px;
      color: #efefef;
    }
  }

  .buttons-wrapper {
    padding: 0 20px;
    height: 500px;

    @media (max-width: 500px) {
      flex: 1;
    }
  }

  .info-wrapper {
    height: 207px;
    width: 100%;
    background: #68a0b9;
    flex: 1;

    .info-content {
      height: 125px;
      padding: 20px 30px;

      @media (max-width: 500px) {
        padding: 25px 30px;
      }

      .heading {
        font-size: 22px;
        font-family: "Roboto Condensed";
        color: #fff;
        font-weight: 600;
        border-bottom: 1px solid #fff;
        margin-bottom: 15px;
      }

      p {
        font-size: 16px;
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
