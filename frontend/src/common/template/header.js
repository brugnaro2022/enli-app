import React from "react";
import NavBar from "./navbar";

export default () => (
  <header className="main-header">
    <a href="/#/" className="logo">
      <span className="logo-lg">
        <i className="fa fa-image"></i>
        <b>Enli</b>
      </span>
    </a>
    <nav className="navbar navbar-static-top">
      <a href className="sidebar-toggle" data-toggle="offcanvas"></a>
      <NavBar />
    </nav>
  </header>
);
