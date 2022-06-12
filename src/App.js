import Heading from './components/Heading'
import Grid from './components/Grid'
import './App.css'
import React from 'react';
import { GlobalState } from './GlobalContext';

function App() {
  return (
  <React.Fragment>
    <Heading/>
    <GlobalState>
      <Grid/>
    </GlobalState>
  </React.Fragment>
   );
}

export default App;
