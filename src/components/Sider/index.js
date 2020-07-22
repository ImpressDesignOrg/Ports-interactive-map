import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineClose } from "react-icons/ai";

import { useTrackedState } from "../../store";

import LocationButtons from "./LocationButtons";
import ActiveLayers from "./ActiveLayers";

export default function Sidebar() {
  const [visible, setVisible] = useState(true);
  // to adjust icon color when hovered
  const [btnHovered, setBtnHovered] = useState(false);
  const state = useTrackedState();

  /*   let body, url;

  (() => {
    switch (state.viewing) {
      case "AUS":
      case "ALL":
        body = "Interested in learning more about NSW Ports and our operations?";
        url = "/about-nsw-ports";
        break;
      case "PB":
        body = "Interested in learning more about Port Botany?";
        url = "/port-botany";
        break;
      case "PK":
        body = "Interested in learning more about Port Kembla?";
        url = "/port-kembla";
        break;
      case "EN":
        body = "Interested in learning more about Cooks River?";
        url = "/enfield-intermodal-logistics-centre";
        break;
      case "CR":
        body = "Interested in learning more about Enfield?";
        url = "/cooks-river-intermodal-terminal";
        break;
      default:
        break;
    }
  })(); */

  return (
    <div>
      <StyledToggle
        visible={visible}
        onClick={() => {
          setBtnHovered(!btnHovered);
          setVisible(!visible);
        }}
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
        <StyledHeader viewing={state.viewing}>
          <div className='icon-wrapper'></div>
          <MobileCloseBtn onClick={() => setVisible(false)}>
            <AiOutlineClose size='30px' color='#fff' />
          </MobileCloseBtn>
        </StyledHeader>
        <ButtonsWrapper>{state.siderLevel === 1 ? <LocationButtons /> : <ActiveLayers />}</ButtonsWrapper>
        {/*         {window.location.pathname === "/map-test-page" && (
          <InfoWrapper>
            <div>
              <h5>Want to find out more?</h5>
              <p>
                {body} <a href={url}>Find out more information here</a>
              </p>
            </div>
          </InfoWrapper>
        )} */}
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
`;

const handleBannerImage = (viewing) => {
  switch (viewing) {
    case "AUS":
    case "ALL":
      return "https://dev-nsw-ports.pantheonsite.io/themes/nswports/js/src/images/header--nsw-ports.jpg";
    case "PB":
      return "https://dev-nsw-ports.pantheonsite.io/themes/nswports/js/src/images/header--botany.jpg";
    case "PK":
      return "https://dev-nsw-ports.pantheonsite.io/themes/nswports/js/src/images/header--kembla.jpg";
    case "EN":
      return "https://dev-nsw-ports.pantheonsite.io/themes/nswports/js/src/images/header--enfield.jpg";
    case "CR":
      return "https://dev-nsw-ports.pantheonsite.io/themes/nswports/js/src/images/header--cooks.jpg";
    default:
      break;
  }
};

const handleBannerIcon = (viewing) => {
  switch (viewing) {
    case "AUS":
    case "ALL":
      return "https://dev-nsw-ports.pantheonsite.io/themes/nswports/js/src/images/marker--nsw-ports.svg";
    case "PB":
      return "https://dev-nsw-ports.pantheonsite.io/themes/nswports/js/src/images/marker--botany.svg";
    case "PK":
      return "https://dev-nsw-ports.pantheonsite.io/themes/nswports/js/src/images/marker--kembla.svg";
    case "EN":
      return "https://dev-nsw-ports.pantheonsite.io/themes/nswports/js/src/images/marker--enfield.svg";
    case "CR":
      return "https://dev-nsw-ports.pantheonsite.io/themes/nswports/js/src/images/marker--cooks.svg";
    default:
      break;
  }
};

const StyledHeader = styled.div`
  height: 125px;
  position: relative;
  background: url(${(props) => handleBannerImage(props.viewing)});
  background-size: cover;
  background-repeat: no-repeat;

  .icon-wrapper {
    background: url(${(props) => handleBannerIcon(props.viewing)});
    position: absolute;
    z-index: 3;
    height: 110px;
    width: 110px;
    background-repeat: no-repeat;
    background-position: center center;
    left: 33%;
    top: 7%;
  }
`;

const MobileCloseBtn = styled.button`
  z-index: 4;
  position: absolute;
  top: 10px;
  right: 10px;

  @media (min-width: 500px) {
    display: none;
  }

  background: none;
  border: none;
  cursor: pointer;
  margin: 10px 10px 0 auto;
`;

const ButtonsWrapper = styled.div`
  padding: 0 20px;

  @media (max-width: 500px) {
    flex: 1;
  }
`;

const InfoWrapper = styled.div`
  height: 165px;
  width: 100%;
  background: #fff;
  border-top: 2px solid #002650;

  div {
    padding: 20px;

    h5 {
      margin-top: 0;
    }

    p {
      a {
        text-decoration: none;
        cursor: pointer;
        color: #002650;
        font-weight: 600;
        border-bottom: 2px solid #fff;

        &:hover {
          border-bottom: 2px solid #002650;
        }
      }
    }
  }
`;
