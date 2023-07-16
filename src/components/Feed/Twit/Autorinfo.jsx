import React from 'react'
import {Icon} from "@mui/material";
import styled from "styled-components";
import {AutorName} from "../../Profile/AutorName.jsx";

const AutorStyle = styled.div`
  display: flex;
  align-items: center;
  & h2 {
    font-size: 15px;
    margin: 0;
    margin-right: 5px;
  }
`
const AutorButton = styled.div`
  display: flex;
margin-left: auto;
`

const AutorInfo = ({Icon}) => {
    return (
        <AutorStyle>
            <AutorName text={"Вадим Татаринцев"}/>
            <span>@elonmusk</span>
            <AutorButton><Icon/></AutorButton>
        </AutorStyle>
    );

}
export {AutorInfo};