import React, { Component } from "react";
import styled from "styled-components";
import Calculator from "./components/Calculator";

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: hsl(185, 41%, 84%);
  font-family: "Space Mono";
`;
const AppH = styled.div`
  width: 30px;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 80px;
  color: hsl(184, 100%, 15%);
  letter-spacing: 0.3em;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <AppH>
          <div>SPLI TTER</div>
        </AppH>

        <Calculator />
      </AppWrapper>
    );
  }
}

export default App;
