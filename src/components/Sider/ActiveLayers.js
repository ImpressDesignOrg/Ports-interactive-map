import React from "react";
import styled from "styled-components";

import { deactiveLayers, useSetState, useTrackedState } from "../../store";

import { AUS_SWITCHES, ALL_SWITCHES, PB_SWITCHES, PK_SWITCHES, CR_SWITCHES, EN_SWITCHES } from "../../data/toggles";

import Switch from "./Switch";

export default function ActiveLayersForm() {
  const state = useTrackedState();
  const setState = useSetState();

  const handleReset = () => {
    // reset to layers to initial state (all false)
    setState(() => ({
      viewing: state.viewing,
      siderLevel: state.siderLevel,
      ...deactiveLayers,
    }));
  };

  /**
   * Function to reorder the toggles so that the 'active' toggles are first in the order
   */
  const handleToggles = () => {
    switch (state.viewing) {
      case "AUS":
        return AUS_SWITCHES;
      case "ALL":
        return ALL_SWITCHES;
      case "PB":
        return PB_SWITCHES;
      case "PK":
        return PK_SWITCHES;
      case "CR":
        return CR_SWITCHES;
      case "EN":
        return EN_SWITCHES;
      default:
        return undefined;
    }
  };

  const togglesArr = handleToggles();

  return (
    <StyledWrapper>
      <StyledForm>
        <MenuBtnsWrapper>
          <button
            onClick={() => {
              setState((prev) => ({ ...prev, siderLevel: 1 }));
            }}
          >
            Back to all views
          </button>
          <button type='reset' onClick={() => handleReset()}>
            Clear all selections
          </button>
        </MenuBtnsWrapper>
        <TogglesWrapper>
          {togglesArr.map((v) => (
            <Switch key={v.label} item={v} />
          ))}
        </TogglesWrapper>
      </StyledForm>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  margin: 0 0 20px 0;
  font-family: "Roboto";

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
  font-family: "Roboto Condensed";

  button {
    background: none;
    border: none;
    box-shadow: none;
    cursor: pointer;
    margin: 0 5px;
    font-size: 15px;

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
  overflow: scroll;
  overflow-x: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;

  scrollbar-width: thin;
  scrollbar-color: orange #68a0b9;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #68a0b9;
    border-radius: 20px;
  }
`;
