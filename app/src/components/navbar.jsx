import React, { useState } from "react";
import "../navbar.css";
import {Link} from 'react-router-dom'

function NavBar(props) {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");

  const navToggle = () => {
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu");

    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };

  return (
    <nav className="nav">
      <a href="#" className="nav__brand">
        PIM-WOC
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Worksapces
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Profile
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Settings
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Login
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Register
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default NavBar;
