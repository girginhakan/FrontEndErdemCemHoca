import React from "react";
import "../assets/style/header.scss";
import Logo from "../assets/img/recipe-logo.png";
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav>
        <div className="brand">
          <img src={Logo} alt="" />
          <h3>Recipe Platform</h3>
        </div>
        <ul className="liste">
          <li>
            <NavLink to="main">Home</NavLink>
          </li>
          <li>
            <NavLink to="forms">Add Recipe</NavLink>
          </li>
          <li>
            <NavLink to="recipelist">All Recipes</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Header;
