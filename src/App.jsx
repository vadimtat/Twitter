import './App.css'
import {Sidebar} from "./components/Sidebar/Sidebar.jsx";
import styled from "styled-components";
import {Widjets} from "./components/Widjets/Widjets.jsx";
import React from "react";
import {Profile} from "./components/Profile/Profile.jsx";
import {Feed} from "./components/Feed/Feed.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Messages} from "./components/Messages/Messages.jsx";

const MainWrapper = styled.div`
  display: flex;
  height: 100vh;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;`

const App = () => {
    return (
        <BrowserRouter>
            <MainWrapper>
                <Sidebar/>
                <Routes>
                    <Route path='/feed' element={<Feed/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/messages' element={<Messages/>}/>
                </Routes>
                {/*<Widjets/>*/}
            </MainWrapper>
        </BrowserRouter>
    );
}

export default App
