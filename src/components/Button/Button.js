import React from "react";

function Button(props) {
  return (
    <button
      className={props.class_name}
      onClick={props.clicked}
      style={{ marginLeft: "9px" }}
    >
      {props.children}
    </button>
  );
}

export default Button;
