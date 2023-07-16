import React from 'react'
import {ProfileButton} from "./ProfileButton.jsx";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import {ProfileHeaderInfo} from "./ProfileHeaderInfo.jsx";
import styled from "styled-components";


const ProfileHeaderWrapper = styled.div`
display: flex;
`
const  ProfileHeader = () => {
    return(
        <ProfileHeaderWrapper>
            <ProfileButton Icon={ArrowBackOutlinedIcon}/>
            <ProfileHeaderInfo/>
        </ProfileHeaderWrapper>
    );

}
export {ProfileHeader};