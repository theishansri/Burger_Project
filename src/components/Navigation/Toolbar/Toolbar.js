import React from "react";
import "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
function Toolbar(props) {
  return (
    <div>
      <header className="Toolbar">
        <div>
          <strong style={{ color: "white" }}>MENU</strong>
        </div>
        <Logo />
        <nav>
          <NavigationItems />
        </nav>
      </header>
    </div>
  );
}

export default Toolbar;
