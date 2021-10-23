import React, { useState } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import Result from "./Result";

const CalculatorWrapper = styled.div`
  max-width: 700px;
  background-color: #fff;
  border-radius: 25px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 790px) {
    max-width: 400px;
    min-width: 280px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Calculator = () => {
  const state = {
    bill: 0,
    numberOfPeople: 0,
    tip: 0,
    tipAmount: 0,
  };
  const [tipAmount, setTipAmount] = useState(0);
  const [tipTotal, setTipTotal] = useState(0);

  return (
    <CalculatorWrapper>
      <Menu
        state={state}
        setTipAmount={setTipAmount}
        setTipTotal={setTipTotal}
      />
      <Result state={state} tipAmount={tipAmount} tipTotal={tipTotal} />
    </CalculatorWrapper>
  );
};

export default Calculator;
