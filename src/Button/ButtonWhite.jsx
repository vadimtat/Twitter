import React from 'react'
import button from "./Button.jsx";
import styled from "styled-components";

const BtWhite = styled.a`
  //border: 1px ;
  display: block;
  border-color: rgb(207, 217, 222);
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  text-decoration: none;
  padding: 0 10px 0 10px;
  color: #1a1a1a;
`
const ButtonWhite = ({text}) => {
    return(
        <BtWhite>{text}</BtWhite>
    );
}
export {ButtonWhite}