import React from 'react'
import styled from "styled-components";

const AutorNameStyle = styled.span`
& span {
  
  margin: 0;
}
`
const  AutorName = ({text}) => {
    return(
        <div>
            <AutorNameStyle>{text}</AutorNameStyle>
        </div>
    );

}
export {AutorName};