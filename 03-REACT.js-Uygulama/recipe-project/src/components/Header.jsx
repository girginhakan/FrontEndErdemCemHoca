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
            <NavLink className="navLink" to="main">Home</NavLink>
          </li>
          
          <li>
            <NavLink className="navLink" to="forms">Add Recipe</NavLink>
          </li>
          <li>
            <NavLink className="navLink" to="recipelist">All Recipes</NavLink>
          </li>
          <li>
            <NavLink className="navLink" to="about">About</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Header;
