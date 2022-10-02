import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faCube } from "@fortawesome/free-solid-svg-icons";

import { PATH } from "../../../const/const";

import banner from "../../../assets/photos/amfiteatre/Laborator Biologie celulară/pasteur 6 stânga.png";
import poza1 from "../../../assets/photos/amfiteatre/Laborator Biologie celulară/Poza 1.jpg";
import poza2 from "../../../assets/photos/amfiteatre/Laborator Biologie celulară/Poza 2.jpg";
import poza3 from "../../../assets/photos/amfiteatre/Laborator Biologie celulară/Poza 3.jpg";
import poza4 from "../../../assets/photos/amfiteatre/Laborator Biologie celulară/Poza 4.jpg";
import poza5 from "../../../assets/photos/amfiteatre/Laborator Biologie celulară/Poza 5.jpg";
import poza6 from "../../../assets/photos/amfiteatre/Laborator Biologie celulară/Poza 6.jpg";
import poza7 from "../../../assets/photos/amfiteatre/Laborator Biologie celulară/Poza 7.jpg";
import poza8 from "../../../assets/photos/amfiteatre/Laborator Biologie celulară/Poza 8.jpg";
import poza9 from "../../../assets/photos/amfiteatre/Laborator Biologie celulară/Poza 9.jpg";
import poza10 from "../../../assets/photos/amfiteatre/Laborator Biologie celulară/Poza 10.jpg";
import poza11 from "../../../assets/photos/amfiteatre/Laborator Biologie celulară/Poza 11.jpg";
import poza12 from "../../../assets/photos/amfiteatre/Laborator Biologie celulară/Poza 12.jpg";
import poza13 from "../../../assets/photos/amfiteatre/Laborator Biologie celulară/Poza 13.jpg";
import poza14 from "../../../assets/photos/amfiteatre/Laborator Biologie celulară/Poza 14.jpg";
import movie from "../../../assets/photos/amfiteatre/Laborator Biologie celulară/Videoclip.mp4";

function LabBiocelPage() {
  window.scrollTo(0, 0);
  const maps = PATH.resurse.amfiteatreSali.labBiocel.maps;
  const model3d = PATH.resurse.amfiteatreSali.labBiocel.model3d;

  return (
    <div id="lab-biocel" className="amfiteatru">
      <header>
        <div className="img-container">
          <img src={banner} alt="maps" />
        </div>
        <div className="container">
          <h3 className="title">Laborator biologie celulară</h3>
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
            Cum ajung la laboratorul de biologie celulară?
          </h3>
          <video controls>
            <source src={movie} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <img src={poza1} alt="poza1" />
          <p>Intrați spre curte dinspre strada Pasteur.</p>
          <img src={poza2} alt="poza2" />
          <p>
            Mergeți înainte și apoi la stânga înspre cele două clădiri.(cea de
            informatică medicală și centrul de cercetări).
          </p>
          <img src={poza3} alt="poza3" />
          <p>Mergeți înainte spre clădirea din dreapta voastră.</p>
          <img src={poza4} alt="poza4" />
          <img src={poza5} alt="poza5" />
          <p>
            Înaintați spre intrarea principală în dreptul căreia apare semnul
            "Centrul de cercetări privind Informarea asupra medicamentului".
          </p>
          <img src={poza6} alt="poza6" />
          <img src={poza7} alt="poza7" />
          <img src={poza8} alt="poza8" />
          <img src={poza9} alt="poza9" />
          <img src={poza10} alt="poza10" />
          <img src={poza11} alt="poza11" />
          <img src={poza12} alt="poza12" />
          <img src={poza13} alt="poza13" />
          <img src={poza14} alt="poza14" />
          <p>
            Odată ajunși în clădire urcați până la ultimul etaj iar acolo vă vor
            aștepta asistenții catedrei, urmând să vă primească înăuntru.
          </p>
        </section>
      </section>
    </div>
  );
}

export default LabBiocelPage;
