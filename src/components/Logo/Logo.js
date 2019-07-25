import React from "react";
import burgerLogo from "../../assets/Images/burger-logo.png";
import "./Logo.css";
function Logo(props) {
  return (
    <div className="Logo">
      <img src={burgerLogo} alt="MyBurger" />
    </div>
  );
}

export default Logo;
