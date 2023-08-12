import React from 'react';
import './App.css';
import styled from "styled-components";
import {StyledBtn, SuperButton} from "./components/Button.styled";
import {Link} from "./components/Link.styled";
import {Menu} from "./components/Menu.styled";
import {myTheme} from "./styles/Theme.styled";

function App() {
    return (
        <div className="App">
            <Menu>
                <ul>
                    <li><a href="">menu item 1</a></li>
                    <li><a href="">menu item 2</a></li>
                    <li><a href="">menu item 3</a></li>
                </ul>
            </Menu>
            <Box>
                {/*<StyledBtn as={Link} href={'#'}>Link Component</StyledBtn>*/}
                {/*<StyledBtn as='a' href={'#'}>Link</StyledBtn>*/}
                {/*<StyledBtn color={'red'} fontSize={'20px'}>hello!</StyledBtn>*/}
                {/*<StyledBtn color={'orange'}>hello!</StyledBtn>*/}
                <StyledBtn color={myTheme.colors.primary} btnType={'primary'} active>hello!</StyledBtn>
                <StyledBtn color={myTheme.colors.secondary} btnType={'outlined'}>hello!</StyledBtn>
                <SuperButton fontSize={'30px'}>Super Button</SuperButton>
            </Box>
        </div>
    );
}

export default App;


const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: zoom-in;
  }

  @media ${myTheme.media.tablet} {
    flex-direction: column;
  }
`

