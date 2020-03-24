import React from 'react';
import {Button} from "./components/button/Button";
import './App.css';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <Button color="main"/> 
        <Button color="secondary" />
        <Button color="tertiary" />
        <Button />
      </header>
    </div>
  );
  
}


export default App;
