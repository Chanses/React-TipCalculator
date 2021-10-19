import React from "react";
import styled from "styled-components";

const ResultWrapper = styled.div`
  padding: 30px;
  width: 50%;
  background-color: hsl(183, 100%, 15%);
  border-radius: 25px;
  display: flex;
  flex-direction: column;
`;
const AmountWrapper = styled.div``;
const ResetButton = styled.button``;
const Result = () => {
  return (
    <ResultWrapper>
      <AmountWrapper>
        <div>
          <p>
            Tip Amount <span>/ person </span>
          </p>
          <div>0.00$</div>
        </div>
        <div>
          <p>
            Total <span>/ person </span>
          </p>
          <div>0.00$</div>
        </div>
      </AmountWrapper>
      <ResetButton>RESET</ResetButton>
    </ResultWrapper>
  );
};

export default Result;
