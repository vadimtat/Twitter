import React from 'react'
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const DialogBlock = styled.div`
  min-width: 397px;

`
const Dialog = (props) => {
    return (
        <DialogBlock>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </DialogBlock>

    );

}
export {Dialog};