import React from 'react';
import styled from 'styled-components';

import Context, { clearActive } from '../../context';

import { ALL_SWITCHES, PB_SWITCHES, PK_SWITCHES, CR_SWITCHES, EN_SWITCHES } from '../../data/toggles';

import Switch from './Switch';

export default function ActiveLayersForm() {
  const [data, setData] = React.useContext(Context);

  const handleReset = () => {
    // reset to layers to initial state (all false)
    setData((prev) => ({
      ...prev,
      viewing: data.viewing,
      siderLevel: data.siderLevel,
      ...clearActive,
    }));
  };

  const handleToggles = () => {
    switch (data.viewing) {
      case 'PB':
        return PB_SWITCHES;
      case 'PK':
        return PK_SWITCHES;
      case 'CR':
        return CR_SWITCHES;
      case 'EN':
        return EN_SWITCHES;
      case 'ALL':
      default:
        return ALL_SWITCHES;
    }
  };

  const togglesArr = handleToggles();

  return (
    <StyledWrapper>
      <StyledForm>
        <MenuBtnsWrapper>
          <button
            onClick={() => {
              setData((prev) => ({ ...prev, siderLevel: 1 }));
            }}
          >
            Back to all views
          </button>
          <button type='reset' onClick={() => handleReset()}>
            Clear all selections
          </button>
        </MenuBtnsWrapper>
        <TogglesWrapper>
          {togglesArr.map((v) => {
            // display a different label for PB railNetwork
            if (v.key === 'railNetwork' && (data.viewing === 'PB' || data.viewing === 'PK')) {
              return <Switch key={v.label} item={v} label={v.portBotanyLabel} />;
            } else {
              return <Switch key={v.label} item={v} label={v.label} />;
            }
          })}
        </TogglesWrapper>
      </StyledForm>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  margin: 0 0 20px 0;
  font-family: 'Roboto';

  .heading-wrapper {
    display: flex;
    justify-content: center;

    img {
      max-width: 120px;
    }
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 0;
`;

const MenuBtnsWrapper = styled.div`
  margin: 0;
  display: flex;
  justify-content: flex-end;
  padding: 30px 0;
  font-family: 'Roboto Condensed';

  @media (max-width: 400px) {
    flex-direction: column;
  }

  button {
    background: none;
    border: none;
    box-shadow: none;
    cursor: pointer;
    margin: 0 5px;
    font-size: 15px;

    @media (max-width: 400px) {
      text-align: right;
      margin: 5px 0;
    }

    &:hover {
      color: #68a0b9;
    }

    svg {
      margin-right: 5px;
    }
  }
`;

const TogglesWrapper = styled.div`
  height: 100%;
  padding-right: 10px;
`;
