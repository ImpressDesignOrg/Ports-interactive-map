import React, { useContext } from 'react';
import styled from 'styled-components';

import Context from '../../context';

import BotanyIcon from '../../images/marker--botany.svg';
import KemblaIcon from '../../images/marker--kembla.svg';
import CooksIcon from '../../images/marker--cooks.svg';
import EnfieldIcon from '../../images/marker--enfield.svg';
import NSWPortsIcon from '../../images/marker--nsw-ports.svg';

const BUTTONS = [
  { id: 'PB', icon: BotanyIcon },
  { id: 'PK', icon: KemblaIcon },
  {
    id: 'CR',
    icon: CooksIcon,
  },
  { id: 'EN', icon: EnfieldIcon },
  {
    id: 'ALL',
    icon: NSWPortsIcon,
  },
];

export default function LocationButtons() {
  const [data, setData] = useContext(Context);

  const handleClick = (location) => {
    setData((prev) => ({ ...prev, siderLevel: 2, viewing: location }));
  };

  return (
    <StyledContainer>
      <StyledContent>
        {BUTTONS.map((button) => (
          <button key={button.id} onClick={() => handleClick(button.id)}>
            <img src={button.icon} alt='marker-symbol' />
          </button>
        ))}
      </StyledContent>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  margin: 20px 0;
  font-family: 'Roboto';
`;

const StyledContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  button {
    display: flex;
    align-items: center;
    flex: 0 0 120px;
    margin: 15px;
    padding: 0;
    box-shadow: none;
    border: none;
    background: none;
    cursor: pointer;
    height: 125px;

    &:hover {
      color: #68a0b9;
    }

    &:focus {
      border: none;
      outline: none;
    }

    @media (max-width: 500px) {
      flex: 0 0 100px;
      margin: 0;
      justify-content: center;
    }

    img {
      width: 125px;
      height: auto;
      max-height: 100%;

      @media (max-width: 500px) {
        width: 140px;
      }

      @media (max-width: 430px) {
        max-width: 90%;
      }
    }
  }
`;
