import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppDescription from './components/AppDescription';
import ButtonContainer from './containers/ButtonContainer';
import SortContainer from './containers/SortContainer';

function App() {
  return (
    <div className="App">
      <h1>Playground</h1>
      <AppDescription />
      <ButtonContainer />
      <SortContainer />
    </div>
  );
}

export default App;
