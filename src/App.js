import React from 'react';
import {Button} from "./components/button/Button";
import './App.css';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <Button className="main" color="red"/> 
        <Button className="main" disabled="true"/>
        <Button className="secondary" />
        <Button className="secondary" disabled="true" />
        <Button className="tertiary" />
        <Button className="tertiary" disabled="true" />
      </header>
    </div>
  );
  
}


export default App;
