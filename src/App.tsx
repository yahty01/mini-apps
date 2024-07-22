import React from 'react';
import { Counter } from "./layout/counter/Counter";
import Container from '@mui/material/Container';
// import { CashConverter } from "./layout/cash-converter/CashConverter";

function App() {
  return (
      <Container className="App" maxWidth="xl">
        <Counter />
        {/*<CashConverter />*/}
      </Container>
  );
}

export default App;