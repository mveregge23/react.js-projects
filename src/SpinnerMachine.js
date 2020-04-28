import React from "react";
import SpinButton from "./SpinButton.js";
import Spinner from "./Spinner.js";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// add items to these arrays to change language
let mechanism = [
  "Tiered",
  "Dynamic",
  "Differential",
  "Weighted",
  "Location-Based",
];
let denomination = ["Daily", "Weekly", "Biweekly", "Monthly", "Yearly"];
let threshold = ["Hours", "Shifts", "Steps", "Breaths"];

/* SpinnerMachine is the parent component of the Spinners, and triggers
   them to spin when the user clicks the SpinButton */
class SpinnerMachine extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.mSpinner = React.createRef();
    this.dSpinner = React.createRef();
    this.tSpinner = React.createRef();
  }

  // handleClick delegates the spinning logic to the Spinners
  handleClick = (event) => {
    event.preventDefault();
    this.mSpinner.current.spin();
    this.dSpinner.current.spin();
    this.tSpinner.current.spin();
  };

  render() {
    return (
      <>
        <div className="spinner-machine">
          <Spinner elements={mechanism} ref={this.mSpinner} />
          <Spinner elements={denomination} ref={this.dSpinner} />
          <Spinner elements={threshold} ref={this.tSpinner} />
        </div>
        <SpinButton clickHandler={this.handleClick}>Spin the wheel!</SpinButton>
      </>
    );
  }
}

export default SpinnerMachine;
