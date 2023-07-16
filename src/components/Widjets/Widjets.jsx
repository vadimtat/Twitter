import React from 'react'
import styled from "styled-components";


const WidjetsBox = styled.div`
  flex: 0.3;
`
const Widjets = () => {
    return (
        <WidjetsBox>
            <div><input type="search twitter"/></div>
            <div>
                <h2>Trends for you</h2>
                <div>
                    <p>Trending in Germany</p>
                    <b>Kanzlerkandidat</b>
                    <p>Tweets</p>
                </div>
            </div>
        </WidjetsBox>

    );

}
export {Widjets};