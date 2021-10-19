import React from "react";
import styled from "styled-components";
import Menu from "./Menu";
import Result from "./Result";

const CalculatorWrapper = styled.div`
  width: 1440px;
  background-color: #fff;
  border-radius: 25px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
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
