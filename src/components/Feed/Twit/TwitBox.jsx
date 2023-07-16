import React from 'react'
import {Avatar, Button} from "@mui/material";
import styled from "styled-components";

const FormClass = styled.form`
  min-height: 30px;
  border-bottom: 1px solid #E1E8ED;
`
const TwitBox = () => {
    return (
        <FormClass>
            <div>
                <Avatar
                    src="https://lh3.googleusercontent.com/ogw/AGvuzYYatBq9IWyGLNcjY2eseSU6j1ewQbuHItflFutWbg=s32-c-mo"/>
                <input type="text" placeholder="What's happened"/>
                <input type="text" placeholder="image"/>
            </div>
            <Button>Tweet</Button>
        </FormClass>
    );


}
export default TwitBox;