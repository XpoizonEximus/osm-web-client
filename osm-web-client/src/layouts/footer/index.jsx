import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

import Media from "./media";

import logo from "../../assets/photos/banner-new.png";

import { PATH } from "../../const/const";

function Footer() {
  return (
    <footer id="footer">
      <div className="main">
        <div className="content flex">
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
                    <Link to={PATH.parteneri.index}>Parteneri și sponsori</Link>
                  </li>
                  <li>
                    <Link to={`${PATH.echipa.index}${PATH.echipa.cd}/`}>
                      Consiliu director
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`${PATH.echipa.index}${PATH.echipa.reprezentanti}/`}
                    >
                      Reprezentanți de an
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`${PATH.echipa.index}${PATH.echipa.coordonatori}/`}
                    >
                      Coordonatori proiecte
                    </Link>
                  </li>
                  <li>
                    <Link to={PATH.politicaConfidentialitate.index}>
                      Politica de confidențialitate
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="menu-section flex column right">
                <ul className="flex">
                  <li>
                    <Link to={PATH.resurse.faq.index}>Întrebări frecvente</Link>
                  </li>
                  <li>
                    <Link to={PATH.resurse.calculatorMedie.index}>
                      Calculator medie
                    </Link>
                  </li>
                  <li>
                    <Link to={PATH.resurse.amfiteatreSali.index}>
                      Amfiteatre și săli
                    </Link>
                  </li>
                  <li>
                    <Link to={PATH.resurse.ghiduri.index}>Ghiduri</Link>
                  </li>
                  <li>
                    <Link to={PATH.resurse.legaturiExterne.index}>
                      Legături externe
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="copyright flex column">
              <div>
                © Copyright 1990 - 2022 |{" "}
                <i>Organizaţia Studenţilor Medicinişti din Cluj</i> | Toate
                drepturile rezervate
              </div>
              <hr />
              <div>
                Dezvoltatori: <i>Serenus Dragoș</i> și <i>Radu Vaida</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
