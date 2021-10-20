import React from "react";
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
    background-color: hsl(185, 41%, 84%);
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
`;

const TipSelector = () => {
  return (
    <TipSelectorWrapper>
      <div>
        <p>Select Tip %</p>
        <button>5%</button>
        <button>10%</button>
        <button>15%</button>
        <button>20%</button>
        <button>50%</button>

        <TipSelectorInput type="text" placeholder="Custom" />
      </div>
    </TipSelectorWrapper>
  );
};

export default TipSelector;
