import React from "react";
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];
function BuildControls(props) {
  return (
    <div className="BuildControls">
      <p>
        Total Price: <strong>{props.price}</strong>
      </p>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientReduced(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
      <button
        className="OrderButton"
        onClick={props.ordered}
        disabled={!props.purchaseable}
      >
        ORDER NOW
      </button>
    </div>
  );
}

export default BuildControls;
