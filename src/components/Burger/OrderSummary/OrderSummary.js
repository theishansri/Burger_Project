import React from "react";
import Aux from "../../hoc/Auxillary";
import Button from "../../Button/Button";
function OrderSummary(props) {
  console.log(props);
  const ingredientsummary = Object.keys(props.ingredients).map((igkey, i) => {
    return (
      <li key={igkey}>
        <span style={{ textTransform: "capitalize" }}>{igkey}</span>:{" "}
        {props.ingredients[igkey]}
      </li>
    );
  });
  console.log("indas", ingredientsummary);
  return (
    <Aux>
      <h3>Your Order:</h3>
      <p>A delicious burger with following ingredients:</p>
      <ul style={{ float: "left" }}>{ingredientsummary}</ul>
      <strong>Total price is {props.orderprice}</strong>
      <br />
      <p>Continue to CheckOut?</p>

      <Button class_name="btn btn-danger" clicked={props.purchasecanceled}>
        Cancel
      </Button>

      <Button class_name="btn btn-primary" clicked={props.purchasecontinue}>
        Proceed
      </Button>
    </Aux>
  );
}

export default OrderSummary;
