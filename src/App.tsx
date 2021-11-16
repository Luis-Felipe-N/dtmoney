import styled from 'styled-components'
import { DashBoard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

const Title = styled.h1 `
  color: red;

`

export function App() {
  return (
    <>
      <Header />
      <DashBoard />
      <GlobalStyle />
    </>
  );
}
