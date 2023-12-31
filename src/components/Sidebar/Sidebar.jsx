import React from "react";
import {Nav} from "./Nav/Nav.jsx";
import Button from "../../Button/Button.jsx";
import styled from "styled-components";
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';


const SideBlock = styled.div`
  border-right: 1px solid #E1E8ED;
  max-width: 260px;
`
const Sidebar = () => {
    return (
        <div>
            <TwitterIcon/>
            <SideBlock>
                <Nav Icon={HomeIcon} text='Home' url='/feed'/>
                <Nav Icon={SearchIcon} text='Explore'/>
                <Nav Icon={NotificationsNoneIcon} text='Notification'/>
                <Nav Icon={MailOutlineIcon} text='Messages' url='/messages'/>
                <Nav Icon={ListAltIcon} text='Lists'/>
                <Nav Icon={BookmarkBorderOutlinedIcon} text='Bookmarks'/>
                <Nav Icon={VerifiedOutlinedIcon} text='Verified'/>
                <Nav Icon={PermIdentityIcon} text='Profile' url='/profile'/>
                <Nav Icon={MoreHorizIcon} text='More'/>
                <Button/>
            </SideBlock>
        </div>
    );

}
export {Sidebar};