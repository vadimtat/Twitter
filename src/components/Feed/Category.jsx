import React from 'react'
import styled from "styled-components";

const CategoryBlock = styled.div`
  display: flex;
  justify-content: space-between;

  & a {
    color: rgb(83, 100, 113);
    padding:  16px;
    width: 100%;
    text-align: center;
    transition: all 0.2s ease-out;

    &:hover {
      background-color: rgba(15, 20, 25, 0.1);
    }
  }
`

const Category = () => {
    return (
        <CategoryBlock>
            <a>For You</a>
            <a>Following</a>
        </CategoryBlock>
    );
}
export {Category};