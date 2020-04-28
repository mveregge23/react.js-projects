import React from "react";

/* Spinner represents an individual field within the spinner machine.
   It expects the elements to be passed through the props, and has
   its own functions to handle the changes to its styling as it
   spins. */
class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topMargin: 0,
      timeRemaining: 0,
    };
    this.spin = this.spin.bind(this);
    this.move = this.move.bind(this);
    this.tick = this.tick.bind(this);
    this.initialize = this.initialize.bind(this);
  }

  /* spin is called by the parent component, SpinnerMachine, to make
     the Spinner component spin. Triggering the spin via a ref to the 
     component in SpinnerMachine may have been a bad design decision, by
     React standards. */
  spin() {
    this.initialize();

    // wait for spinner to go to bottom, then top, then go to random element
    setTimeout(() => {
      this.timer = setInterval(() => this.tick(), 100);
    }, 2000);
  }

  /* initialize resets the spinner by spinning to the bottom element, then
     the top element, then the target random element */
  initialize() {
    // spin to bottom element
    this.setState({ topMargin: -(this.props.elements.length - 1) * 100 });

    // wait to get to bottom element, then spin to top element
    setTimeout(() => {
      this.setState({ topMargin: 0 });
    }, 1000);

    // calculate random element, clear timer
    this.targetEl = Math.floor(Math.random() * this.props.elements.length);
    clearInterval(this.timer);

    /* timeRemaining is equal to the number of elements that the Spinner needs
       to move times 100ms each */
    this.setState({ timeRemaining: this.targetEl * 100 });
  }

  /* tick checks the timeRemaining in state to determine if movement
     of the Spinner should continue or not */
  tick() {
    if (this.state.timeRemaining <= 0) {
      clearInterval(this.timer);
      return;
    }
    this.move();
  }

  /* move changes the topMargin of Spinner and decrements the timeRemaining */
  move() {
    this.setState((state) => {
      return {
        topMargin: state.topMargin - 100,
        timeRemaining: state.timeRemaining - 100,
      };
    });
  }

  render() {
    let { topMargin } = this.state;

    return (
      <span
        className="spinner-container"
        style={{
          marginTop: topMargin + "px",
        }}
      >
        {this.props.elements.map((el) => (
          <div className="spinner-element" key={el}>
            {el}
          </div>
        ))}
      </span>
    );
  }
}

export default Spinner;
