import React from "react";
import styled from "styled-components";
import TipSelector from "./TipSelector";
import dollarImg from "../images/icon-dollar.svg";
import personImg from "../images/icon-person.svg";

const MenuWrapper = styled.div`
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;

  input {
    margin-top: 10px;
    width: 305px;
    height: 30px;
    font-size: 19px;
    border-radius: 5px;
    padding-right: 15px;
    padding-left: 35px;
    background-color: hsl(189, 41%, 95%);
    border: none;
    outline: none;
    text-align: right;
    background-repeat: no-repeat;
    background-position-x: 10px;
    background-position-y: 7px;
  }

  input:focus {
    border: 2px solid hsl(172, 67%, 45%);
  }
  div {
    margin-bottom: 40px;
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
        <input
          type="text"
          placeholder="0"
          style={{ backgroundImage: `url(${dollarImg})` }}
        />
      </div>
      <TipSelector />
      <div>
        <p>Number of People</p>

        <input
          type="text"
          placeholder="0"
          style={{ backgroundImage: `url(${personImg})` }}
        />
      </div>
    </MenuWrapper>
  );
};

export default Menu;
