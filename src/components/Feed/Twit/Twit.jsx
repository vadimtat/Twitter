import React from 'react'
import {Avatar, Icon} from "@mui/material";
import styled from "styled-components";
import {AutorInfo} from "./Autorinfo.jsx";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TwitText from "./TwitText.jsx";


const TweetBlock = styled.div`
  justify-content: space-between;
  //max-width: 600px;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  margin: 0;
`
const AvatarBlock = styled.div`
  margin-top: 4px;
  max-width: 40px;
`
const TextBlock = styled.div`
  flex: 0.95;

  & img {
    margin-top: 12px;
    width: 100%;
    border-radius: 15px;
  }

  & p {
    margin: 0;
  }
`
// let tweets = [
//     {id: 1, text:'Practically invisible', alt:'автомобиль', url: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/07/25/16587103907228.jpg'},
//     {id: 2, text:'Practically', alt:'автомобиль', url: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/07/25/16587103907228.jpg'},
// ]

const Twit = (props) => {
    let tweetsElement = props.tweets.map(el => <TwitText key={el.id} id={el.id} alt={el.alt} text={el.text}
                                                    url={el.url}/>)
    return (
        <TweetBlock>
            <AvatarBlock>
                <Avatar
                    src="https://lh3.googleusercontent.com/ogw/AGvuzYYatBq9IWyGLNcjY2eseSU6j1ewQbuHItflFutWbg=s32-c-mo"
                />
            </AvatarBlock>
            <TextBlock>
                <AutorInfo Icon={MoreHorizIcon}/>
                {tweetsElement}
            </TextBlock>
        </TweetBlock>
    );


}
export default Twit;