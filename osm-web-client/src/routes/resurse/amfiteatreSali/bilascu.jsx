import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faCube } from "@fortawesome/free-solid-svg-icons";

import { PATH } from "../../../const/const";

import banner from "../../../assets/photos/amfiteatre/amf. Bilascu/bilascu.png";
import poza1 from "../../../assets/photos/amfiteatre/amf. Bilascu/Poza 1.jpg";
import poza2 from "../../../assets/photos/amfiteatre/amf. Bilascu/Poza 2.jpg";
import poza3 from "../../../assets/photos/amfiteatre/amf. Bilascu/Poza 3.jpg";
import poza4 from "../../../assets/photos/amfiteatre/amf. Bilascu/Poza 4.jpg";
import movie from "../../../assets/photos/amfiteatre/amf. Bilascu/Time-lapse.mp4";

function BilascuPage() {
  window.scrollTo(0, 0);
  const maps = PATH.resurse.amfiteatreSali.bilascu.maps;
  const model3d = PATH.resurse.amfiteatreSali.bilascu.model3d;

  return (
    <div id="bilascu" className="amfiteatru">
      <header>
        <div className="img-container">
          <img src={banner} alt="maps" />
        </div>
        <div className="container">
          <h3 className="title">Amfiteatrul Gheorghe Bilașcu - Stomatologie 1</h3>
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
            Cum ajung la amfiteatrul Gheorghe Bilașcu - Stomatologie 1?
          </h3>
          <video controls>
            <source src={movie} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <img src={poza1} alt="poza1" />
          <p>
            Coborâți strada Babeș pe trotuarul drept până la florăriile de lângă
            casa de cultură a studenților.
          </p>
          <img src={poza2} alt="poza2" />
          <p>Între cele doua florării este drumul spre amfiteatru.</p>
          <img src={poza3} alt="poza3" />
          <p>La poartă, amfiteatrul crem din dreapta este Bilașcu.</p>
          <img src={poza4} alt="poza4" />
          <p>Pe el este o plăcuță pe care scrie clar numele.</p>
        </section>
      </section>
    </div>
  );
}

export default BilascuPage;
