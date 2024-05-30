import React from "react";
import image from "../../assests/hotwheels.png";

import "./index.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="container-navbar">
      <div className="logo">
        <img
          src={image}
          alt="HotWheels logo"
          width={90}
          height={80}
          loading="eager"
        />
      </div>
      <ul className="navBar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cars">Carros</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
