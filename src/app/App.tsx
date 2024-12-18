import React from 'react';
import { Counter } from "../features/ui/Counter/Counter";
import Container from '@mui/material/Container';

function App() {
  return (
      <Container className="App" maxWidth="xl">
        <Counter />
      </Container>
  );
}

export default App;