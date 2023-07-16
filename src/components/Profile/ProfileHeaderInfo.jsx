import React from 'react'
import {AutorName} from "./AutorName.jsx";
import {ProfileTweets} from "./ProfileTweets.jsx";

const  ProfileHeaderInfo = () => {
    return(
        <div>
            <AutorName text={"Вадим Татаринцев"}/>
            <ProfileTweets value="0"/>
        </div>
    );

}
export {ProfileHeaderInfo};