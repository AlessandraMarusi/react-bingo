import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <NavLink to="/bingo">Bingo!</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
