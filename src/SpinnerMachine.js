import React from "react";
import SpinButton from "./SpinButton.js";
import Spinner from "./Spinner.js";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

//add items to these arrays
let mechanism = [
  "Tiered",
  "Dynamic",
  "Differential",
  "Weighted",
  "Location-Based"
];
let denomination = ["Daily", "Weekly", "Biweekly", "Monthly", "Yearly"];
let threshold = ["Hours", "Shifts", "Steps", "Breaths"];

class SpinnerMachine extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.mSpinner = React.createRef();
    this.dSpinner = React.createRef();
    this.tSpinner = React.createRef();
  }

  handleClick = event => {
    event.preventDefault();
    this.mSpinner.current.spin();
    this.dSpinner.current.spin();
    this.tSpinner.current.spin();
  };

  render() {
    return (
      <>
        <div className="spinner-machine">
          <Spinner elements={mechanism} timer={2000} ref={this.mSpinner} />
          <Spinner elements={denomination} timer={3000} ref={this.dSpinner} />
          <Spinner elements={threshold} timer={4000} ref={this.tSpinner} />
        </div>
        <SpinButton clickHandler={this.handleClick}>Spin the wheel!</SpinButton>
      </>
    );
  }
}

export default SpinnerMachine;
