import React from "react";
import "./footer.css";

import Media from "./media";

import logo from "../../assets/photos/banner-new.png";

function Footer() {
  return (
    <footer id="footer">
      <div className="main">
        <div className="content flex row">
          <div className="left flex column">
            <a href="./" className="logo-container flex column">
              <img src={logo} alt="logo" />
            </a>
            <div className="media">
              <Media />
            </div>
          </div>
          <div className="right flex column">
            <div className="menu">
              <div className="menu-section flex column">
                <ul className="flex">
                  <li>
                    <a href="/">Proiecte</a>
                  </li>
                  <li>
                    <a href="/">Evenimente</a>
                  </li>
                  <li>
                    <a href="/">Consiliu director</a>
                  </li>
                  <li>
                    <a href="/">Reprezentanți de an</a>
                  </li>
                  <li>
                    <a href="/">Parteneri și sponsori</a>
                  </li>
                  <li>
                    <a href="/">Magazin online</a>
                  </li>
                </ul>
              </div>
              <div className="menu-section flex column">
                <ul className="flex">
                  <li>
                    <a href="/">Calculatoare medii</a>
                  </li>
                  <li>
                    <a href="/">Site Umf</a>
                  </li>
                  <li>
                    <a href="/">Site Infostud</a>
                  </li>
                  <li>
                    <a href="/">Regulamente și ghiduri</a>
                  </li>
                  <li>
                    <a href="/">FAQ</a>
                  </li>
                  <li>
                    <a href="/">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="copyright">
              © Copyright 1990 - 2022 |{" "}
              <i>Organizaţia Studenţilor Medicinişti - OSM Cluj</i> | Toate
              drepturile rezervate
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
