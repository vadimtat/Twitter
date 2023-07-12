import React from 'react'
import styled from "styled-components";
import TweetBox from "../Tweet/TweetBox.jsx";
import Category from "./Category.jsx";
import Tweet from "../Tweet/Tweet.jsx";


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
const Feed = () => {
    return (
        <FeedContent>
            <FeedHeader>
                <h2>Home</h2>
                <Category/>
            </FeedHeader>
            <TweetBox/>
            <Tweet/>
        </FeedContent>
    );

}

export default Feed;