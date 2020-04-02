import React from "react";

class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topMargin: 0,
      timeRemaining: 0
    };
    this.spin = this.spin.bind(this);
    this.move = this.move.bind(this);
    this.tick = this.tick.bind(this);
    this.initialize = this.initialize.bind(this);
  }

  spin() {
    this.initialize();
    setTimeout(() => {
      this.timer = setInterval(() => this.tick(), 100);
    }, 2000);
  }

  initialize() {
    this.setState({ topMargin: -(this.props.elements.length - 1) * 100 });
    setTimeout(() => {
      this.setState({ topMargin: 0 });
    }, 1000);
    this.targetEl = Math.floor(Math.random() * this.props.elements.length);
    clearInterval(this.timer);
    this.setState({ timeRemaining: this.targetEl * 100 });
  }

  tick() {
    if (this.state.timeRemaining <= 0) {
      clearInterval(this.timer);
      console.log("called tick, timeRemaining: " + this.state.timeRemaining);
      return;
    }
    this.move();
  }

  move() {
    this.setState((state, props) => {
      return {
        topMargin: state.topMargin - 100,
        timeRemaining: state.timeRemaining - 100
      };
    });
    console.log(
      "called move, topMargin: " +
        this.state.topMargin +
        ", timeRemaining: " +
        this.state.timeRemaining
    );
  }

  render() {
    console.log("called render");
    let { topMargin } = this.state;

    return (
      <span
        className="spinner-container"
        style={{
          marginTop: topMargin + "px"
        }}
      >
        {this.props.elements.map(el => (
          <div className="spinner-element" key={el}>
            {el}
          </div>
        ))}
      </span>
    );
  }
}

export default Spinner;
