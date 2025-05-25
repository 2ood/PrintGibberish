import * as Component from "./components/components.harness.tsx";
import {GlobalStyle} from './styles/global-style.ts';
import styled from "styled-components";

const AppContainer = styled.div`
  display : inline-flex;
  flex-flow : row nowrap;
  flex : 3 7;
`;

function App() {

  return (
    <AppContainer>
      <GlobalStyle />
      <Component.Sidebar />
      <Component.MainContent />
    </AppContainer>
  )
}

export default App
