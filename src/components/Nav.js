import React from "react";
import "../styles/css/NavBar.css";
import logo from "../assets/netflix-icon-full.png";

import { useState, useEffect } from "react";

const Nav = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={`navbar ${navbar ? "sticky" : ""}`}>
      <div className="content">
        <div className="left-content">
          <a href="https://google.com" className="home-link">
            <img src={logo} className="img-link"></img>
          </a>
          <ul className="menu-list">
            <li>
              <a className={`hvr-grow ${navbar ? "sticky" : ""}`} href="" target="_blank">
                Home
              </a>
            </li>
            <li>
              <a className={`hvr-grow ${navbar ? "sticky" : ""}`} href="">
                Series
              </a>
            </li>
            <li>
              <a className={`hvr-grow ${navbar ? "sticky" : ""}`} href="">
                Films
              </a>
            </li>
            <li>
              <a className={`hvr-grow ${navbar ? "sticky" : ""}`} href="">
                New & Popular
              </a>
            </li>
            <li>
              <a className={`hvr-grow ${navbar ? "sticky" : ""}`} href="">
                My List
              </a>
            </li>
          </ul>
        </div>
        <div className="right-content">
          <ul className="menu-list">
            <li>
              <a className={`hvr-grow ${navbar ? "sticky" : ""}`} href="" target="_blank">
                <i class="fas fa-search"></i>
              </a>
            </li>
            <li>
              <a className={`hvr-grow ${navbar ? "sticky" : ""}`} href="">
                <i class="fas fa-gift"></i>
              </a>
            </li>
            <li>
              <a className={`hvr-grow ${navbar ? "sticky" : ""}`} href="">
                <i class="fas fa-bell"></i>
              </a>
            </li>
            <li>
              <a className={`hvr-grow ${navbar ? "sticky" : ""}`} href="">
                <i class="far fa-square"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
