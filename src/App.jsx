import './App.css'
import {Sidebar} from "./components/Sidebar/Sidebar.jsx";
import styled from "styled-components";
import {Widjets} from "./components/Widjets/Widjets.jsx";
import React from "react";
import {Profile} from "./components/Profile/Profile.jsx";
import {Feed} from "./components/Feed/Feed.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Messages} from "./components/Messages/Messages.jsx";

// let messages = [
//     {id: 1, message: 'hi'},
//     {id: 2, message: 'lol'},
//     {id: 3, message: 'grisha'},
//     {id: 4, message: 'alwlele'},
//     {id: 5, message: 'you'},
//     {id: 6, message: 'you'}
// ]
// let dialogs = [
//     {id: 1, name: 'kolya'},
//     {id: 2, name: 'dmitriy'},
//     {id: 3, name: 'ivan'},
//     {id: 4, name: 'dmitriy'},
//     {id: 5, name: 'dmitriy'},
//     {id: 6, name: 'dmitriy'}
// ]

const MainWrapper = styled.div`
  display: flex;
  height: 100vh;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;`

const App = (props) => {
    return (
        <BrowserRouter>
            <MainWrapper>
                <Sidebar/>
                <Routes>
                    <Route path='/feed' element={<Feed tweets={props.tweets}/>}/>
                    <Route path='/profile' element={<Profile tweets={props.tweets}/>}/>
                    <Route path='/messages' element={<Messages messages={props.messages} dialogs={props.dialogs}/>}/>
                </Routes>
                {/*<Widjets/>*/}
            </MainWrapper>
        </BrowserRouter>
    );
}

export default App
