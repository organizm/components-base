import React from 'react';
<<<<<<< HEAD
import { Button } from './components/button/Button';
import { Checkbox } from './components/checkbox/Checkbox';
=======
import {Button} from "./components/button/Button";
import {Checkbox} from "./components/checkbox/Checkbox";
>>>>>>> c09b38e1f591025e6067a46cb83e323b86321584
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button className="btn-base" size="btn-main" disabled={false} />
        <br></br>
        <Button className="btn-base" size="btn-main" disabled={true} color="">
          DAISABLE
        </Button>
        <br></br>
        <Button className="btn-base" size="btn-secondary" disabled={false}>
          SECOND
        </Button>
        <br></br>
        <Button className="btn-base" size="btn-secondary" disabled={true}>
          btn-secondary
        </Button>
        <br></br>
        <Button
          className="btn-base"
          size="btn-tertiary"
          disabled={false}
          color=""
        >
          Start new project
        </Button>
        <br></br>
<<<<<<< HEAD
        <Button className="btn-base" size="btn-tertiary" disabled={true}>
          btn-tertiary
        </Button>
        <br></br>
        <Checkbox
          className="chek-base"
          disabled={false}
          color="chek-main"
          label="test label"
          id="cb1"
        />
        <Checkbox
          className="chek-base"
          disabled={true}
          color="chek-main"
          id="cb2"
        />
        <Checkbox
          className="chek-base"
          disabled={false}
          color="chek-success"
          id="cb3"
        />
=======
        <Button className="btn-base" size="btn-tertiary" disabled={true}>btn-tertiary</Button>
        <br></br>
        {/* <Checkbox className="chek-base" size="chek-main" disabled={false} color="chek-main" id="checkbox"  onChange={() => {}} type="checkbox"></Checkbox>
        <Checkbox className="chek-base" size="chek-main" disabled={true} color="chek-main" id="checkbox" name="checkbox"   onChange={() => {}} type="checkbox"></Checkbox>
        <Checkbox className="chek-base" size="chek-main" disabled={false} checked color="chek-main" id="checkbox"  onChange={() => {}} type="checkbox"></Checkbox>
        <Checkbox className="chek-base" size="chek-main" disabled={true} checked color="chek-main" id="checkbox" name="checkbox"  onChange={() => {}} type="checkbox"></Checkbox> */}
        <Checkbox className="chek-base" size="chek-main" id="cb1" />
        <Checkbox className="chek-base" size="chek-secondary"  id="cb2" />
        <Checkbox className="chek-base" color="chek-success" id="cb3" />
        <Checkbox className="chek-base" checked id="cb4" />
>>>>>>> c09b38e1f591025e6067a46cb83e323b86321584
      </header>
    </div>
  );
}

export default App;
