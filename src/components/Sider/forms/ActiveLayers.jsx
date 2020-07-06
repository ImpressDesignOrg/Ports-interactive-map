import React from "react";
import styled from "styled-components";
import { Form } from "antd";
import { RiArrowGoBackLine } from "react-icons/ri";

import { useSetState, useTrackedState } from "../../../store";

import { AUS_SWITCHES, ALL_SWITCHES, PB_SWITCHES, PK_SWITCHES, CR_SWITCHES, EN_SWITCHES } from "../../../data/toggles";

import { useForm } from "antd/lib/form/util";
import SwitchControl from "../SwitchControl";

export default function ActiveLayersForm() {
  const [form] = useForm();
  const state = useTrackedState();
  const setState = useSetState();

  const handleReset = () => {
    // reset to initial state
    setState((prev) => ({
      viewing: state.viewing,
      siderLevel: state.siderLevel,
    }));
    form.resetFields();
  };

  const headingMarkup = () => {
    switch (state.viewing) {
      case "AUS":
        return "National";
      case "ALL":
        return "NSW Ports Properties";
      case "PB":
        return "Port Botany";
      case "PK":
        return "Port Kembla";
      case "CR":
        return "Cooks River Intermodal";
      case "EN":
        return "Enfield Intermodal";
      default:
        break;
    }
  };

  return (
    <StyledContainer>
      <div className='heading-wrapper'>
        <h2>{headingMarkup()}</h2>
        <div className='buttons-wrapper'>
          <button
            onClick={() => {
              handleReset();
              setState((prev) => ({ ...prev, siderLevel: 1 }));
            }}
          >
            <RiArrowGoBackLine />
            Locations
          </button>
          <button htmlType='reset' onClick={() => handleReset()}>
            Clear
          </button>
        </div>
      </div>
      <Form form={form}>
        <div className='toggles-wrapper'>
          {state.viewing === "AUS" && AUS_SWITCHES.map((v) => <SwitchControl item={v} />)}
          {state.viewing === "ALL" && ALL_SWITCHES.map((v) => <SwitchControl item={v} />)}
          {state.viewing === "PB" && PB_SWITCHES.map((v) => <SwitchControl item={v} />)}
          {state.viewing === "PK" && PK_SWITCHES.map((v) => <SwitchControl item={v} />)}
          {state.viewing === "CR" && CR_SWITCHES.map((v) => <SwitchControl item={v} />)}
          {state.viewing === "EN" && EN_SWITCHES.map((v) => <SwitchControl item={v} />)}
        </div>
      </Form>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  margin: 20px 0;
  font-family: "Roboto";

  .heading-wrapper {
    h2 {
      font-size: 22px;
      color: #000;
      font-weight: 700;
      margin: 0 0 10px 0;
      padding: 0;
    }

    .buttons-wrapper {
      display: flex;
      justify-content: flex-end;
      text-align: right;

      button {
        display: flex;
        align-items: center;
        background: none;
        border: none;
        border-bottom: 1px solid #fff;
        box-shadow: none;
        cursor: pointer;
        font-size: 13px;
        font-family: "Roboto";
        font-weight: 500;
        margin: 0 10px;

        &:hover {
          border-bottom: 1px solid #68a0b9;
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
  }

  form {
    display: flex;
    width: 100%;
    max-height: 350px;
    margin-top: 30px;
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

    .toggles-wrapper {
      width: 95%;
      height: 315px;
    }
  }
`;
