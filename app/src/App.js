import React from 'react';

import Foxes from './components/Foxes'

import styled from 'styled-components'

import './App.css';

function App() {
  return (
    <StyledDiv className="App">
      <h1>Foxes!</h1>
      <Foxes />
    </StyledDiv>
  );
}

export default App;

const StyledDiv = styled.div`
background-color: #ed960b;
display: flex;
flex-flow: column;
padding: 2px 2px;
margin-top: 1%;
h1 {
  background-color: black;
  padding: 2% 40% 3% 40%;
  margin: 0;
}
`