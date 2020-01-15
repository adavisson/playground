import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppDescription from './components/AppDescription';
import ButtonContainer from './containers/ButtonContainer';

function App() {
  return (
    <div className="App">
      <h1>Playground</h1>
      <AppDescription />
      <ButtonContainer />
    </div>
  );
}

export default App;
