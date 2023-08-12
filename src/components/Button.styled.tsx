import styled from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";

export const StyledBtn = styled.button`
  border: 0;
  background-color: blue;
  padding: 10px 20px;
  border-radius: 50px;
  color: snow;
  font-size: 2rem;
  font-weight: bold;

  &:hover {
    background-color: #155e18;
  }

  &:last-child {
    background-color: #00d0ff;
  }
`
export const SuperButton = styled(StyledBtn)`
  border-radius: 5px;
  background-color: #f1e503;
  box-shadow: -4px -4px 3px 3px black;
  color: black;

  &:hover {
    animation: ${MyAnimation} 2s ease-in-out infinite;
  }
`