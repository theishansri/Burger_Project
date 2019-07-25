import React from "react";
import "./Backdrop.css";

function Backdrop(props) {
  //   console.log("IIIIII", props.show);
  return props.show ? (
    <div className="Backdrop" onClick={props.clicked} />
  ) : null;
}

export default Backdrop;
