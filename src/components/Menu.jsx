import React from "react";
import styled from "styled-components";

const MenuWrapper = styled.div`
  padding-right: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  input {
    margin-top: 5px;
    width: 350px;
    height: 30px;
    border-radius: 5px;
    padding-left: 15px;
    background-color: hsl(189, 41%, 97%);
    border: none;
    outline: none;
  }
  div {
    margin-bottom: 30px;
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
        <input type="text" placeholder="0" />
      </div>
      <div>
        <p>Select Tip %</p>
        <button>5%</button>
        <button>10%</button>
        <button>15%</button>
        <button>20%</button>
        <button>50%</button>
        <button>Custom</button>
      </div>
      <div>
        <p>Number of People</p>
        <input type="text" placeholder="0" />
      </div>
    </MenuWrapper>
  );
};

export default Menu;
