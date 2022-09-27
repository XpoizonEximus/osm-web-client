import React from "react";
import "./header.css";

import { default as HeaderLayout } from "../../../layouts/header";

import SearchBar from "../../../components/searchBar";

import banner from "../../../assets/photos/aula.jpg";

function Header() {
  return (
    <HeaderLayout img={banner} top={100}>
      <h2 className="title">
        Amfiteatre și <br />
        săli de curs
      </h2>
      <p className="subtitle">
        Află cum să ajungi la toate amfiteatrele
        <br /> și sălile de curs din universitatea noastră.
      </p>
      <p>
        Explicații detaliate cu poze și locații geografice. <br />
        Modele 3D ale celor mai importante.
      </p>
      <div className="search-container">
        <SearchBar placeholder="Caută amfiteatre și săli..." />
      </div>
    </HeaderLayout>
  );
}

export default Header;
