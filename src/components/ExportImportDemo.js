import styled from "styled-components";

export const Transparent = styled.div`
  background: transparent !important;
`

export const Header = styled.div`
  background: transparent !important;
`

export const AppContainer = styled.div`
  background: rgb(62,62,62);
  background: linear-gradient(45deg, rgba(62,62,62,1) 0%, rgba(0,0,0,1) 100%);
  min-height: 100vh;
  padding: 20px;
`

export const yo = ()=>{
  console.log("yo")
};

const hi = () => {console.log("hi")};

export default hi;