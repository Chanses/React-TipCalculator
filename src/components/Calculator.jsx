import React from "react";
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
  return (
    <CalculatorWrapper>
      <Menu />
      <Result />
    </CalculatorWrapper>
  );
};

export default Calculator;
