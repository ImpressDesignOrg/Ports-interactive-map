import React from "react";
import styled from "styled-components";
import { RiArrowGoBackLine } from "react-icons/ri";

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

  const handleToggles = () => {
    let togglesArr;
    const newTogglesArr = [];

    switch (state.viewing) {
      case "AUS":
        togglesArr = AUS_SWITCHES;
        break;
      case "ALL":
        togglesArr = ALL_SWITCHES;
        break;
      case "PB":
        togglesArr = PB_SWITCHES;
        break;
      default:
        break;
    }

    console.log("toggleObj :>> ", togglesArr);

    // reorder the toggles so that the active toggles are first
    togglesArr.map((v) => {
      console.log("v :>> ", v);

      if (state[v.key] === true) {
        newTogglesArr.unshift(v);
      } else {
        newTogglesArr.push(v);
      }
    });

    return newTogglesArr;
  };

  const togglesArr = handleToggles();

  return (
    <StyledContainer>
      <form>
        <div className='layers-btns-wrp'>
          <button
            onClick={() => {
              setState((prev) => ({ ...prev, siderLevel: 1 }));
            }}
          >
            <RiArrowGoBackLine />
            Locations
          </button>
          <button type='reset' onClick={() => handleReset()}>
            Clear all
          </button>
        </div>
        <div className='toggles-wrapper'>
          {state.viewing === "AUS" && AUS_SWITCHES.map((v) => <Switch key={v.label} item={v} />)}
          {state.viewing === "ALL" && ALL_SWITCHES.map((v) => <Switch key={v.label} item={v} />)}
          {state.viewing === "PB" && togglesArr.map((v) => <Switch key={v.label} item={v} />)}
          {state.viewing === "PK" && PK_SWITCHES.map((v) => <Switch key={v.label} item={v} />)}
          {state.viewing === "CR" && CR_SWITCHES.map((v) => <Switch key={v.label} item={v} />)}
          {state.viewing === "EN" && EN_SWITCHES.map((v) => <Switch key={v.label} item={v} />)}
        </div>
      </form>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  margin: 20px 0;
  font-family: "Roboto";

  .heading-wrapper {
		display:flex;
		justify-content: center;

		img {
			max-width: 120px;
		}
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 435px;
		margin-top: 30px;
		
		.toggles-wrapper {
      width: 95%;
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
    }

    .layers-btns-wrp {
			margin: 0 0 15px 0;
			display: flex;
      justify-content: flex-end;
      text-align: right;
			
      button {
        display: flex;
        align-items: center;
        background: none;
        border: none;
        border-bottom: 2px solid #fff;
        box-shadow: none;
        cursor: pointer;
        font-size: 16px;
        font-family: "Roboto";
        font-weight: 500;
				margin: 0 10px;

        &:hover {
          border-bottom: 2px solid #68a0b9;
        }

        &:focus {
          border: none;
          outline: none;
        }

        svg {
          margin-right: 5px;
        }
    }
  }
`;
