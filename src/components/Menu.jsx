import React, { useRef, useState } from "react";
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
  @media (max-width: 790px) {
    width: 100%;
    margin-bottom: 30px;
    margin-right: 0px;
  }
`;
const MenuInput = styled.input`
  margin-top: 10px;
  width: calc(100% - 60px);
  max-width: 400px;
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
  color: hsl(183, 100%, 15%);
  font-weight: 700;
  :focus {
    outline: 2px solid hsl(172, 67%, 45%);
  }
  ::placeholder {
    color: hsl(184, 14%, 56%);
  }
  @media (max-width: 790px) {
    width: calc(100% - 60px);
    min-width: 220px;
  }
`;

const Menu = () => {
  const [bill, setBill] = useState(0);
  const billOnChange = (event) => {
    setBill(event.currentTarget.value);
    console.log(bill);
  };
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const numberOfPeopleOnChange = (event) => {
    setNumberOfPeople(event.currentTarget.value);
    console.log(numberOfPeople);
  };

  return (
    <MenuWrapper>
      <div>
        <p>Bill</p>
        <MenuInput
          type="text"
          placeholder="0"
          style={{ backgroundImage: `url(${dollarImg})` }}
          onChange={billOnChange}
        />
      </div>
      <TipSelector />
      <div>
        <p>Number of People</p>

        <MenuInput
          type="text"
          placeholder="0"
          style={{ backgroundImage: `url(${personImg})` }}
          onChange={numberOfPeopleOnChange}
        />
      </div>
    </MenuWrapper>
  );
};

export default Menu;
