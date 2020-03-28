import React from 'react';
// import {Button} from "./components/button/Button";
import {Button} from "./components/button/Button";
import './App.css';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <Button className="btn-base" size="btn-main" disabled={false}/>
        <br></br>
        <Button className="btn-base" size="btn-main" disabled={true} color="" ariaLabel="DAISABLE"/>
        <br></br>
        <Button className="btn-base" size="btn-secondary" disabled={false} ariaLabel="SECOND"/>
        <br></br>
        <Button className="btn-base" size="btn-secondary" disabled={true} ariaLabel="disabled"/>
        <br></br>
        <Button className="btn-base" size="btn-tertiary" disabled={false} color="" ariaLabel="Start new project"/>
        <br></br>
        <Button className="btn-base" size="btn-tertiary" disabled={true} color="" />
      </header>
    </div>
  );
  
}


export default App;
