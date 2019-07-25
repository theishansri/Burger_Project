import React from "react";
import Aux from "../hoc/Auxillary";
import "./Layout.css";
import ToolBar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
function Layout(props) {
  return (
    <Aux>
      <ToolBar />
      <SideDrawer />
      <main className="Content">{props.children}</main>
    </Aux>
  );
}

export default Layout;
