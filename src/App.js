import React from 'react';
import {Button} from "./components/button/Button";
import './App.css';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <Button className="btn-base" size="main" disabled={false} color=""/> 
        <Button className="btn-base" size="main" disabled={true} color=""/>
        <Button className="btn-base" size="secondary" disabled={false} color="accent_blue"/>
        <Button className="btn-base" size="secondary" disabled={true} color=""/>
        <Button className="btn-base" size="tertiary" disabled={false} color=""/>
        <Button className="btn-base" size="tertiary" disabled={true} color=""/>
      </header>
    </div>
  );
  
}


export default App;
