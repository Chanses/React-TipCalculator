import React, { useRef, useState } from "react";
import styled from "styled-components";

const TipSelectorWrapper = styled.div`
  p {
    margin-bottom: 10px;
  }
  button {
    background-color: hsl(183, 100%, 15%);
    font-size: 19px;
    font-weight: 700;
    padding: 5px 0;
    width: 100px;
    border: none;
    border-radius: 5px;
    margin-right: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    color: hsl(189, 41%, 84%);
  }

  button:hover {
    background-color: hsl(172, 67%, 45%);
    color: hsl(183, 100%, 15%);
  }
`;
const TipSelectorInput = styled.input`
  background-color: hsl(189, 41%, 95%);
  font-size: 19px;
  font-weight: 700;
  padding: 5px 0;
  text-align: center;
  width: 100px;
  border: none;
  outline: none;
  border-radius: 5px;
  color: hsl(183, 100%, 15%);
  :focus {
    outline: 2px solid hsl(172, 67%, 45%);
  }
  ::placeholder {
    color: hsl(183, 100%, 15%);
  }
`;

const TipSelector = (props) => {
  const [tip, setTip] = useState(0);
  props.state.tip = tip;

  const customTipRef = useRef(0);
  const customTipOnChange = (event) => {
    let tip = parseInt(event.currentTarget.value);
    setTip(tip);
  };
  const resetStyle = () => {
    let item = document.querySelectorAll("button");
    item.forEach((element) => {
      element.style.color = "";
      element.style.backgroundColor = "";
    });
  };
  const changeStyle = (id) => {
    let button = document.getElementById(id);
    button.style.color = "hsl(183, 100%, 15%)";
    button.style.backgroundColor = "hsl(185, 41%, 84%)";
  };
  const selectTip = (id, value) => {
    resetStyle();
    changeStyle(id);
    setTip(value);
  };
  const changeTip = {
    changeTip5: function () {
      selectTip("5", 5);
    },
    changeTip10: function () {
      selectTip("10", 10);
    },
    changeTip15: function () {
      selectTip("15", 15);
    },
    changeTip20: function () {
      selectTip("20", 20);
    },
    changeTip50: function () {
      selectTip("50", 50);
    },
  };

  return (
    <TipSelectorWrapper>
      <div>
        <p>Select Tip %</p>
        <button onClick={changeTip.changeTip5} id="5" className="button">
          5%
        </button>
        <button onClick={changeTip.changeTip10} id="10" className="button">
          10%
        </button>
        <button onClick={changeTip.changeTip15} id="15" className="button">
          15%
        </button>
        <button onClick={changeTip.changeTip20} id="20" className="button">
          20%
        </button>
        <button onClick={changeTip.changeTip50} id="50" className="button">
          50%
        </button>

        <TipSelectorInput
          type="text"
          placeholder="Custom"
          onChange={customTipOnChange}
          ref={customTipRef}
          onFocus={resetStyle}
        />
      </div>
    </TipSelectorWrapper>
  );
};

export default TipSelector;
