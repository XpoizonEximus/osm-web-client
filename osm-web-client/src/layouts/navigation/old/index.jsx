import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

import NavigationLink from "./navigationLink";
import Menu from "./menu/";

import logo from "../../assets/photos/banner-edited.png";
import menuLogo from "../../assets/photos/menu-logo.png";

import { PATH } from "../../const/const";
import useWindowDimensions from "../../api/hooks/useWindowDimensions";
import { useEffect } from "react";

function Navigation(props) {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const [fullscreenMenu, setFullscreenMenu] = useState(false);
  const windowDimensions = useWindowDimensions();
  useEffect(() => {
    if (windowDimensions.width < 600) setFullscreenMenu(true);
    else setFullscreenMenu(false);
    if (windowDimensions.height < 800) setFullscreenMenu(true);
    else setFullscreenMenu(false);
  }, [windowDimensions]);

  return (
    <>
      <div id="navigation">
        <div className="container flex row">
          <Link to="/">
            <div className="logo-container flex">
              <img src={logo} alt="logo" />
            </div>
          </Link>
          <div className="links-container small flex row">
            <NavigationLink
              padding="50px"
              href={PATH.evenimente.index}
              highlight={true}
            >
              Evenimente
            </NavigationLink>
          </div>
          <div
            className="menu-icon-container flex"
            onMouseEnter={(e) => {
              if (!fullscreenMenu) setMenuVisibility(true);
            }}
            onMouseLeave={(e) => {
              setMenuVisibility(false);
            }}
            onClick={(e) => {
              if (fullscreenMenu) {
                setMenuVisibility(!isMenuVisible);
                window.scrollTo(0, 0);
              }
            }}
          >
            <img src={menuLogo} alt="logo" />
          </div>
          <div className="links-container flex row">
            <NavigationLink
              padding="50px"
              href={PATH.evenimente.index}
              highlight={true}
            >
              Evenimente
            </NavigationLink>
            <NavigationLink padding="50px" href={PATH.resurse.index}>
              Resurse
            </NavigationLink>
            <NavigationLink padding="50px" href={PATH.proiecte.index}>
              Proiecte
            </NavigationLink>
            <NavigationLink padding="50px" href={PATH.shop.index}>
              Shop
            </NavigationLink>
            <NavigationLink padding="50px" href={PATH.contact.index}>
              Contact
            </NavigationLink>
          </div>
        </div>
        {fullscreenMenu ? (
          <></>
        ) : (
          <Menu isVisible={isMenuVisible} setVisibility={setMenuVisibility} />
        )}
      </div>
      {fullscreenMenu ? (
        <Menu isVisible={isMenuVisible} setVisibility={setMenuVisibility} />
      ) : (
        <></>
      )}
    </>
  );
}

export default Navigation;
