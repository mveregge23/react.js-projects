import React from "react";

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
