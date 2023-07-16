import React from 'react'
import Twit from "../Feed/Twit/Twit.jsx";
import {ProfileTabs} from "./ProfileTabs.jsx";
import {ProfileHeader} from "./ProfileHeader.jsx";
import {ProfileBanner} from "./ProfileBanner.jsx";
import {ProfileInfo} from "./ProfileInfo.jsx";

const Profile = () => {
    return(
        <div>
            <ProfileHeader/>
            <ProfileBanner/>
            <ProfileInfo/>
            <ProfileTabs/>
            <Twit/>
        </div>

    );

}
export { Profile };