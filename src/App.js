import React from 'react';
import {Button} from "./components/button/Button";
import './App.css';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <Button color="main" size="sm"/> 
        <Button color="main" disabled="true"/>
        <Button color="secondary" />
        <Button color="secondary" disabled="true" />
        <Button color="tertiary" />
        <Button color="tertiary" disabled="true" />
      </header>
    </div>
  );
  
}


export default App;
