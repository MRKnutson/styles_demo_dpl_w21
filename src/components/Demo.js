import styled from "styled-components";
import { MOBILE, TABLET_SIZE } from "../styles";

const Demo = () =>{
  return (
    <div>
      <h1>Style Component Demo</h1>
      <Button>Click</Button>
      <Responsive>
        <Card />
        <Card />
        <Card />
        <Card />
      </Responsive>
    </div>
  )
};

const Responsive = styled.div`
display: flex;
@media (max-width: ${MOBILE}) {
  flex-direction: column;
}`

const Button = styled.div`
  width: 100px;
  display: flex;
  background: steelblue;
  color: white;
  padding: 25px;
  cursor: pointer;

  &:hover {
    background: red;
  }
  // &:active {
  //   background: red;
  // }
  // &:visited {
  //   background: red;
  // }
`

const Card = styled.div`
  width: 200px;
  height: 200px;
  margin: 20px;
  border: 1px solid red;
  background: steelblue;

  @media(max-width: ${TABLET_SIZE}) {
    background: red;
  }
`

export default Demo;