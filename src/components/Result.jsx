import React from "react";
import styled from "styled-components";

const ResultWrapper = styled.div`
  padding: 30px;
  width: 50%;
  background-color: hsl(183, 100%, 15%);
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 790px) {
    width: calc(100% - 60px);
    min-width: 220px;
  }
`;
const AmountWrapper = styled.div`
  div {
    color: hsl(172, 67%, 45%);
    font-size: 30px;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  div p {
    color: white;
    font-size: 17px;
    font-weight: 500;
  }
  div p span {
    color: hsl(184, 14%, 56%);
    font-size: 15px;
    font-weight: 500;
  }
`;
const ResetButton = styled.button`
  height: 50px;
  color: hsl(183, 100%, 15%);
  font-size: 19px;
  font-weight: 700;
  border-radius: 5px;
  background-color: hsl(172, 67%, 45%);
  border: none;
  :hover {
    background-color: hsl(185, 41%, 84%);
    cursor: pointer;
  }
`;

const Result = (props) => {
  const resetStyle = () => {
    let item = document.querySelectorAll("button");
    item.forEach((element) => {
      element.style.color = "";
      element.style.backgroundColor = "";
    });
  };
  const resetInputs = () => {
    const inputs = document.querySelectorAll("input");
    inputs.forEach((e) => (e.value = ""));
  };
  const resetAll = () => {
    props.resetvalue();

    resetStyle();
    resetInputs();
    console.log(props.state);
  };

  return (
    <ResultWrapper>
      <AmountWrapper>
        <div>
          <p>
            Tip Amount <br />
            <span>/ person </span>
          </p>
          <div>{props.state.tipAmount}$</div>
        </div>
        <div>
          <p>
            Total <br />
            <span>/ person </span>
          </p>
          <div>{props.state.tipTotal}$</div>
        </div>
      </AmountWrapper>
      <ResetButton onClick={resetAll}>RESET</ResetButton>
    </ResultWrapper>
  );
};

export default Result;
