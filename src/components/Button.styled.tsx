import styled, {css} from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    btnType?: 'primary' | 'outlined'
    active?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: 0;
  padding: 10px 20px;
  border-radius: 50px;
  font-size: ${props => props.fontSize || '2rem'};
  font-weight: bold;

  &:hover {
    background-color: #155e18;
  }

  &:last-child {
    background-color: #00d0ff;
  }

  ${props => props.btnType === 'outlined' && css<StyledBtnPropsType>`
    border: 2px solid ${props => props.color || 'blue'};
    color: ${props => props.color || 'blue'};
    background-color: transparent;

    &:hover {
      border-color: #155e18;
      color: #155e18;
      background-color: transparent;
    }
  `}

  ${props => props.btnType === 'primary' && css<StyledBtnPropsType>`
    background-color: ${props => props.color || 'blue'};
    color: snow;
  `} //primary

  ${props => props.active && css<StyledBtnPropsType>`
    box-shadow: 2px 2px 2px 4px #a95aa9;
  `}
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