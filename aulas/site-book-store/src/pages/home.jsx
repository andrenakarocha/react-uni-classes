import Header from '../components/Header/Header'
import UltimosLancamentos from '../components/UltimosLancamentos/UltimosLancamentos'
import Pesquisa from '../components/Pesquisa/Pesquisa'
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

function App() {
  return (
  <AppContainer>
    <Header />
    <Pesquisa />
    <UltimosLancamentos />   
  </AppContainer>      
  );
}

export default App;
