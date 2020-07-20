import React from 'react';
import './App.css';
import Converter from './components/Converter'
function App() {
  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <div className="row">
        <Converter moedaA="USD" moedaB="BRL"></Converter>
        <Converter moedaA="BRL" moedaB="USD"></Converter>
      </div>
      <div className="row">
        <Converter moedaA="CAD" moedaB="BRL"></Converter>
        <Converter moedaA="BRL" moedaB="CAD"></Converter>
      </div>
      <div className="row">
        <Converter moedaA="EUR" moedaB="BRL"></Converter>
        <Converter moedaA="BRL" moedaB="EUR"></Converter>
      </div>
    </div>
  );
}

export default App;
