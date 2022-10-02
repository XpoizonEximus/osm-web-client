import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faCube } from "@fortawesome/free-solid-svg-icons";

import { PATH } from "../../../const/const";

import banner from "../../../assets/photos/amfiteatre/amf. Recuperare/recup.png";
import poza1 from "../../../assets/photos/amfiteatre/amf. Recuperare/1.jpg";
import poza2 from "../../../assets/photos/amfiteatre/amf. Recuperare/2.jpg";
import poza3 from "../../../assets/photos/amfiteatre/amf. Recuperare/3.jpg";
import poza4 from "../../../assets/photos/amfiteatre/amf. Recuperare/4.jpg";
import movie from "../../../assets/photos/amfiteatre/amf. Recuperare/recuperare.mp4";

function RecuperarePage() {
  window.scrollTo(0, 0);
  const maps = PATH.resurse.amfiteatreSali.recuperare.maps;
  const model3d = PATH.resurse.amfiteatreSali.recuperare.model3d;

  return (
    <div id="recuperare" className="amfiteatru">
      <header>
        <div className="img-container">
          <img src={banner} alt="maps" />
        </div>
        <div className="container">
          <h3 className="title">Amfiteatrul Nicolae Andronescu - Recuperare</h3>
          <div className="buttons-container">
            {maps !== "" ? (
              <a href={maps}>
                <FontAwesomeIcon icon={faMapLocationDot} />
                Maps
              </a>
            ) : (
              <></>
            )}
            <div className="stretcher row"></div>
            {model3d !== "" ? (
              <a href={model3d}>
                <FontAwesomeIcon icon={faCube} />
                3D Model
              </a>
            ) : (
              <></>
            )}
          </div>
        </div>
      </header>
      <section className="main">
        <section className="content">
          <h3 className="title">
            Cum ajung la amfiteatrul Nicolae Andronescu - Recuperare?
          </h3>
          <video controls>
            <source src={movie} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>
            Amfiteatrul Nicolae Andreescu se afla lângă Spitalul Clinic de
            Recuperare și nu în incinta sa; intrarea se face de pe str.
            Observatorului și nu de pe Viilor.
          </p>
          <img src={poza1} alt="poza1" />
          <p>Ajungeți în statia Spitalul de Recuperare.</p>
          <img src={poza2} alt="poza2" />
          <p>
            Treceți de cele 2 bariere și mergeți tot în față până dați de
            intrarea din imaginea 3.
          </p>
          <img src={poza3} alt="poza3" />
          <p>Intrați în clădire și luați-o în dreapta.</p>
          <img src={poza4} alt="poza4" />
          <p>Aici găsiți ușa către amfiteatrul Nicolae Andreescu.</p>
        </section>
      </section>
    </div>
  );
}

export default RecuperarePage;
