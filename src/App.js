import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  body {
    background-color: blue;
  }

`
function App() {
  return (
    <>
      <GlobalStyle />
      <div>Welcome to pizza store</div>
   </>
  );
}

export default App;
