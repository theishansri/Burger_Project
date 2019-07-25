import React from "react";
import "./Order.css";

function Order(props) {
  let ingredients = [];
  for (let order in props.ingredients) {
    ingredients.push({
      name: order,
      amount: props.ingredients[order]
    });
  }
  const ingredientsOutput = ingredients.map(ig => {
    return (
      <span
        key={ig.name}
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px"
        }}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });
  return (
    <div className="Order">
      <p>Ingredients: {ingredientsOutput}</p>
      <p>
        Price:{" "}
        <strong>
          <i style={{ fontSize: "14px" }} className="fa fa-rupee" />
          &nbsp;{props.price}
        </strong>
      </p>
    </div>
  );
}

export default Order;
