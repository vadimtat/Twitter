import React from 'react';
import styled from "styled-components";

const TweetCounter = styled.div`
  display: flex;
  text-align: center;
  & p {
    margin: 0;
  }

`
const ProfileTweets = ({value}) => {
    return (
        <TweetCounter>
            <p>{value}</p>
            <p>Tweets</p>
        </TweetCounter>
    );
};
export {ProfileTweets};