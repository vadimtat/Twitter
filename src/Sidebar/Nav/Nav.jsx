import React from "react";
import styled from "styled-components";

const Navlist = styled.nav`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: rgba(15, 20, 25, 0.1);
    border-radius: 30px;

  }

  & h2 {
    text-decoration: none;
    font-weight: 800;
    font-size: 20px;
    margin: 0 20px 0 16px;
  }
`
const Nav = ({text, Icon}) => {
    return (
        <Navlist>
            <Icon/>
            <h2>{text}</h2>
        </Navlist>
    );

}
export default Nav;
