import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const Navlist = styled.nav`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  padding: 12px;

  &:hover {
    background-color: rgba(15, 20, 25, 0.1);
    border-radius: 30px;

  }

  & a {
    text-decoration: none;
    font-weight: 800;
    font-size: 20px;
    margin: 0 20px 0 16px;
  }
`
const Nav = ({text, Icon, url}) => {
    return (
        <Navlist>
            <Icon/>
            <NavLink to={url}>{text}</NavLink>
        </Navlist>
    );

}
export {Nav};
