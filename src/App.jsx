import './App.css'
import Sidebar from "./Sidebar/Sidebar.jsx";
import styled from "styled-components";
import Feed from "./Feed/Feed.jsx";
import Widjets from "./Widjets/Widjets.jsx";

const MainWrapper = styled.div`
  //display: flex;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  //height: 100vh;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;`

const App = () => {
    return (
        <MainWrapper>
            <Sidebar/>
            <Feed />
            <Widjets />
        </MainWrapper>
    );
}

export default App
