import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

// import { useTrackedState } from '../../store';
import Context from '../../context';

import LocationButtons from './LocationButtons';
import ActiveLayers from './ActiveLayers';

const getWindowDimensions = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

export default function Sidebar() {
  const [data, setData] = React.useContext(Context);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [visible, setVisible] = useState(windowDimensions.width > 900 ? true : false);
  // to adjust icon color when hovered
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <StyledContainer>
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
          <AiOutlineArrowRight size='20px' color={btnHovered ? '#002650' : '#68a0b9'} />
        ) : (
          <AiOutlineArrowLeft size='20px' color={btnHovered ? '#002650' : '#68a0b9'} />
        )}
      </StyledToggle>
      <StyledContent id={visible ? 'active' : ''} visible={visible}>
        <StyledHeader viewing={data.viewing}>
          <div className='icon-wrapper'></div>
        </StyledHeader>
        <ButtonsWrapper>{data.siderLevel === 1 ? <LocationButtons /> : <ActiveLayers />}</ButtonsWrapper>
      </StyledContent>
    </StyledContainer>
  );
}

const StyledContainer = styled.div``;

const StyledToggle = styled.button`
  z-index: 3;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: ${(props) => (props.visible ? '350px' : '0')};
  top: 3%;
  height: 80px;
  width: 40px;
  border: none;
  cursor: pointer;
  background: #002650;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  &:hover {
    background: #f5a91c;
  }

  @media (max-width: 500px) {
    right: ${(props) => (props.visible ? '85%' : '0')};
  }
`;

const StyledContent = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 350px;
  z-index: 2;
  right: 0px;
  top: 0px;
  border-radius: 10px;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.visible ? '1' : '0')};
  transition: visibility 0.5s, opacity 0.1s linear;

  @media (max-width: 500px) {
    width: 85%;
  }
`;

const handleBannerImage = (viewing) => {
  switch (viewing) {
    case 'AUS':
    case 'ALL':
      return 'https://dev-nsw-ports.pantheonsite.io/themes/nswports/js/src/images/header--nsw-ports.jpg';
    case 'PB':
      return 'https://dev-nsw-ports.pantheonsite.io/themes/nswports/js/src/images/header--botany.jpg';
    case 'PK':
      return 'https://dev-nsw-ports.pantheonsite.io/themes/nswports/js/src/images/header--kembla.jpg';
    case 'EN':
      return 'https://dev-nsw-ports.pantheonsite.io/themes/nswports/js/src/images/header--enfield.jpg';
    case 'CR':
      return 'https://dev-nsw-ports.pantheonsite.io/themes/nswports/js/src/images/header--cooks.jpg';
    default:
      break;
  }
};

const handleBannerIcon = (viewing) => {
  switch (viewing) {
    case 'AUS':
    case 'ALL':
      return 'https://dev-nsw-ports.pantheonsite.io/themes/nswports/js/src/images/marker--nsw-ports.svg';
    case 'PB':
      return 'https://dev-nsw-ports.pantheonsite.io/themes/nswports/js/src/images/marker--botany.svg';
    case 'PK':
      return 'https://dev-nsw-ports.pantheonsite.io/themes/nswports/js/src/images/marker--kembla.svg';
    case 'EN':
      return 'https://dev-nsw-ports.pantheonsite.io/themes/nswports/js/src/images/marker--enfield.svg';
    case 'CR':
      return 'https://dev-nsw-ports.pantheonsite.io/themes/nswports/js/src/images/marker--cooks.svg';
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

const ButtonsWrapper = styled.div`
  padding: 0 20px;

  @media (max-width: 500px) {
    flex: 1;
  }
`;
