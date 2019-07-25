import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationItem.css";
function NavigationItem(props) {
  return (
    <div>
      <li className="NavigationItem">
        <NavLink to={props.link} exact={props.exact} activeClassName="active">
          {props.children}
        </NavLink>
      </li>
    </div>
  );
}

export default NavigationItem;
