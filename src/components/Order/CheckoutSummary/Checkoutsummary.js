import React from "react";
import Burger from "../../Burger/Burger";
import "./Checkoutsummary.css";
function Checkoutsummary(props) {
  return (
    <div className="Checkoutsummary">
      <h1>We hope it tastes well</h1>
      <div style={{ margin: "auto", width: "100%", height: "300px" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <button className="btn btn-danger" onClick={props.checkoutCancelled}>
        Cancel
      </button>
      &nbsp;
      <button className="btn btn-success" onClick={props.checkoutContinued}>
        Continue
      </button>
    </div>
  );
}

export default Checkoutsummary;
