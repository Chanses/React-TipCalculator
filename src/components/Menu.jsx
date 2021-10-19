import React from "react";
import styled from "styled-components";
import TipSelector from "./TipSelector";

const MenuWrapper = styled.div`
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  border: 1px black solid;

  input {
    margin-top: 10px;
    width: 350px;
    height: 30px;
    font-size: 19px;
    border-radius: 5px;
    padding-left: 15px;
    background-color: hsl(189, 41%, 97%);
    border: none;
    outline: none;
  }
  input:active {
    background-color: red;
  }
  div {
    margin-bottom: 50px;
  }
  div p {
    font-weight: 700;
    color: hsl(183, 100%, 15%);
  }
  div:last-child {
    margin-bottom: 0px;
  }
`;

const Menu = () => {
  return (
    <MenuWrapper>
      <div>
        <p>Bill</p>
        <input type="digit" placeholder="0" />
      </div>
      <TipSelector />
      <div>
        <p>Number of People</p>
        <input type="text" placeholder="0" />
      </div>
    </MenuWrapper>
  );
};

export default Menu;
