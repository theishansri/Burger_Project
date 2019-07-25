import React from "react";
import "./NavigationItems.css";
import NavigationItem from "../NavigationItem/NavigationItem";
// import { Link } from "react-router-dom";
function NavigationItems(props) {
  return (
    <div>
      <ul className="NavigationItems">
        <NavigationItem link="/" exact>
          Burger Builder
        </NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
      </ul>
    </div>
  );
}

export default NavigationItems;
