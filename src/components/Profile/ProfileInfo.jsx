import React from 'react'
import {Avatar} from "@mui/material";
import styled from "styled-components";
import {AutorName} from "./AutorName.jsx";
import {ButtonWhite} from "../../Button/ButtonWhite.jsx";

const ProfileInfoWrapper = styled.div`
  padding: 12px 16px 0 16px;
`
const ProfileInfoAvatar = styled.span`
  position: absolute;
  top: -70px;
`
const ProfileInfoBlock = styled.div`
  min-height: 80px;
  display: flex;
  justify-content: space-between;
  position: relative;
  
`
const ProfileInfo = () => {
    return (
        <ProfileInfoWrapper>
            <ProfileInfoBlock>
                <ProfileInfoAvatar>
                    <Avatar sx={{width: 133, height: 133}}
                            src="https://img.championat.com/s/735x490/news/big/i/h/sekrety-uspeha-ilona-maska_1624878465685615318.jpg"
                    />
                </ProfileInfoAvatar>
                <span></span>
                <ButtonWhite text="Edit profile"/>
            </ProfileInfoBlock>
            <AutorName text={"Вадим Татаринцев"}/>
        </ProfileInfoWrapper>
    );

}
export {ProfileInfo};