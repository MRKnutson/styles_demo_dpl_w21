import logo from './logo.svg';
import './App.css';
import { Header, Segment } from 'semantic-ui-react';
import styled from 'styled-components';
import HeaderText from './components/HeaderText';
import hi, { AppContainer, Transparent, Header as MyHeader, yo } from './components/ExportImportDemo';
import Projects from './components/Projects';
import Demo from './components/Demo';

function App() {
  hi();
  yo();
  return (
    <AppContainer>
      <HeaderText fsize ="large">My Portfolio</HeaderText>
      <Segment as={Transparent}>
        <HeaderText fsize="medium">My Projects</HeaderText>
        <Projects />
      </Segment>
      <Segment  as={Transparent}>
        <HeaderText fsize="small">Contact</HeaderText>
      </Segment>
      <Demo />
    </AppContainer>
  );
}





export default App;
