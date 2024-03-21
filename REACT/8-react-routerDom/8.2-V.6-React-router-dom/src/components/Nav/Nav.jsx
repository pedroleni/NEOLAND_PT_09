import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

export const Nav = () => {
  return (
    <nav className="nav">
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      <NavLink to="/gallery">
        <button>Gallery</button>
      </NavLink>
      {/* <NavLink to="/gallery">Gallery</NavLink> */}
    </nav>
  );
};
