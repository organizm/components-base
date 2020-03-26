import React from 'react';
import {Button} from "./components/button/Button";
import './App.css';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <Button className="main" size="sm" color="red"/> 
        <Button className="main-sm" disabled="true"/>
        <Button className="secondary" />
        <Button className="secondary" disabled="true" />
        <Button className="tertiary" />
        <Button className="tertiary" disabled="true" />
        <Button className="main-lg" size="lg" color="red"/> 
        <Button className="main-lg" disabled="true"/>
        <Button className="secondary-lg" />
        <Button className="secondary-lg" disabled="true" />
        <Button className="tertiary-lg" />
        <Button className="tertiary-lg" disabled="true" />
      </header>
    </div>
  );
  
}


export default App;
