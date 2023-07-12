import React from 'react'
import {Icon} from "@mui/material";
import styled from "styled-components";

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
            <h2>Elon Musk</h2>
            <span>@elonmusk</span>
            <AutorButton role={"button"}><Icon/></AutorButton>
        </AutorStyle>
    );

}
export default AutorInfo;