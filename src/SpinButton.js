import React from "react";

/* SpinButton is a component to randomize the
   fields in the SpinnerMachine component. It expects
   an event handler for its onClick event attribute in
   the props */
function SpinButton(props) {
  return (
    <button
      id="spin-button"
      className="btn btn-info"
      onClick={props.clickHandler}
    >
      Spin the wheel!
    </button>
  );
}

export default SpinButton;
