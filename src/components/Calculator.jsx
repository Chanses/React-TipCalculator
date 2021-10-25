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
  const [tipAmount, setTipAmount] = useState(0.0);
  const [tipTotal, setTipTotal] = useState(0.0);
  const [bill, setBill] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [tip, setTip] = useState(0);

  const resetvalue = () => {
    setTipAmount(0);
    setTipTotal(0);
    setBill(0);
    setNumberOfPeople(0);
    setTip(0);
  };

  const state = {
    bill: bill,
    tip: tip,
    numberOfPeople: numberOfPeople,
    tipAmount: tipAmount,
    tipTotal: tipTotal,
  };

  return (
    <CalculatorWrapper>
      <Menu
        state={state}
        setBill={setBill}
        setTip={setTip}
        setNumberOfPeople={setNumberOfPeople}
        setTipAmount={setTipAmount}
        setTipTotal={setTipTotal}
      />
      <Result
        state={state}
        tipAmount={tipAmount}
        tipTotal={tipTotal}
        resetvalue={resetvalue}
      />
    </CalculatorWrapper>
  );
};

export default Calculator;
