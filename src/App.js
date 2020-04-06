import React from "react";
import { Button } from "./components/button/Button";
import { Checkbox, changeLabelFunc } from "./components/checkbox/Checkbox";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.onChange = this.onChange.bind(this);
    this.changeLabel = this.changeLabel.bind(this);
  }

  changeLabel(e) {
    this.setState({ checked: !this.state.checked });
    let msg;
    if (this.state.checked) {
      this.setState({ msg: "Checked" });
    } else {
      this.setState({ msg: "Un-Checked" });
    }
    msg = "Un-Checked";
  }

  render() {
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
          <Button className="btn-base" size="btn-tertiary" disabled={true}>
            btn-tertiary
          </Button>
          <br></br>
          <Checkbox
            className="chek-base"
            disabled={false}
            color="chek-main"
            label="test label"
            // onChange={changeLabel()}
            // onChange={() => this.changeLabel()}
            // onChange={() => {
            //   changeLabelFunc();
            // }}
            // onChange={this.changeLabel}
            id="cb1"
          />
          <Checkbox className="chek-base" disabled={true} color="" id="cb2" />
          <Checkbox
            className="chek-base"
            disabled={false}
            color="chek-success"
            checked={true}
            // onChange={this.changeLabel}
            id="cb3"
          />
        </header>
      </div>
    );
  }
}
// function changeLabel(msg) {
//   let msg;
//   // if (this.state.checked) {
//   //   this.setState({ msg: "Checked" });
//   // } else {
//   //   this.setState({ msg: "Un-Checked" });
//   // }
//   msg = "Un-Checked";
// }

export default App;
