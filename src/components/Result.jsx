import React from "react";
import styled from "styled-components";

const ResultWrapper = styled.div`
  padding-left: 15px;
`;

const Result = () => {
  return (
    <ResultWrapper>
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
      <button>RESET</button>
    </ResultWrapper>
  );
};

export default Result;
