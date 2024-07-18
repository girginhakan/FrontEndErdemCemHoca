import React from "react";
import "../assets/style/header.scss";
import Logo from "../assets/img/recipe-logo.png";
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav>
        <div className="brand">
          <NavLink to="main"><img src={Logo} alt="" /></NavLink>
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
          <li>
            <NavLink className="navLink" to="contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />

      <footer>
        <div className="contact-info">
          <h2>Contact information</h2>
          <ul>
            <li>Email: hakan@hakan.com</li>
            <li>Phone: +90 123 456 789</li>
          </ul>
        </div>
        <div className="social-media">
          <h2>Follow us</h2>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/hakan.girgin.37/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://x.com/Hakan_girgin24"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/hakangirgin24/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Header;
