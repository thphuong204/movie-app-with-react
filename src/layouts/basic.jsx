import React from "react";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import "./../App.css";
import NavDropdownExample from "../components/Nav/basicNav";
function BasicLayout({ children }) {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <NavDropdownExample />
      <div>{children}</div>
    </ThemeProvider>
  );
}

export default BasicLayout;
