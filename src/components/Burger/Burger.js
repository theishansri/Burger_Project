import React from "react";
import { withRouter } from "react-router-dom";
import "./Burger.css";
import BurgerIngredient from "./BurgerIngreidient/BurgerIngreidient";
function Burger(props) {
  console.log(props);
  let transformedingredient = Object.keys(props.ingredients)
    .map(igkey => {
      return [...Array(props.ingredients[igkey])].map((_, i) => {
        return <BurgerIngredient key={igkey + i} type={igkey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  //   console.log(transformedingredient);
  if (transformedingredient.length === 0) {
    transformedingredient = (
      <p style={{ fontWeight: "bold" }}>Please Start Adding Ingredients!!!</p>
    );
  }
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedingredient}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default withRouter(Burger);
