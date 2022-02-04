import styled from "styled-components";
import { PRIMARY_COLOR } from "../styles";

export const fontSize = (size) =>{
  switch(size){
    case 'large':
      return "4rem";
    case 'medium':
      return "3rem";
    default:
      return "2rem"
  }
};

const HeaderText = styled.h1`
  color: ${PRIMARY_COLOR} !important;
  text-align: center !important;
  font-size: ${props => fontSize(props.fsize)} !important;
`

export default HeaderText; 