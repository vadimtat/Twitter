import React from 'react'
import styled from "styled-components";
import TwitBox from "./Twit/TwitBox.jsx";
import {Category} from "./Category.jsx";
import Twit from "./Twit/Twit.jsx";
import {FeedTitle} from "./FeedTitile.jsx";


const FeedContent =
    styled.div`
      max-width: 600px;
      overflow-y: scroll;
      //min-width: fit-content;
      border-right: 1px solid #E1E8ED;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }

    `
const FeedHeader = styled.div`
  position: sticky;
  top: -0.5;
  background-color: white;
  z-index: 100;
  border-bottom: 1px solid #E1E8ED;

`
const Feed = (props) => {
    return (
        <FeedContent>
            <FeedHeader>
                <FeedTitle/>
                <Category/>
            </FeedHeader>
            <TwitBox/>
            <Twit tweets={props.tweets}/>
        </FeedContent>
    );

}

export {Feed};