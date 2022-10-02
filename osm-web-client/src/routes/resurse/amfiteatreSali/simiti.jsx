import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faCube } from "@fortawesome/free-solid-svg-icons";

import { PATH } from "../../../const/const";

import banner from "../../../assets/photos/amfiteatre/amf. Simiti/Simiti.png";
import poza1 from "../../../assets/photos/amfiteatre/amf. Simiti/Poza 1.jpg";
import poza2 from "../../../assets/photos/amfiteatre/amf. Simiti/Poza 2.jpg";
import poza3 from "../../../assets/photos/amfiteatre/amf. Simiti/Poza 3.jpg";
import poza4 from "../../../assets/photos/amfiteatre/amf. Simiti/Poza 4.jpg";
import poza5 from "../../../assets/photos/amfiteatre/amf. Simiti/Poza 5.jpg";
import poza6 from "../../../assets/photos/amfiteatre/amf. Simiti/Poza 6.jpg";
import movie from "../../../assets/photos/amfiteatre/amf. Simiti/Time-lapse.mp4";

function SimitiPage() {
  window.scrollTo(0, 0);
  const maps = PATH.resurse.amfiteatreSali.simiti.maps;
  const model3d = PATH.resurse.amfiteatreSali.simiti.model3d;

  return (
    <div id="simiti" className="amfiteatru">
      <header>
        <div className="img-container">
          <img src={banner} alt="maps" />
        </div>
        <div className="container">
          <h3 className="title">Amfiteatrul I. Simiti - Farmacie</h3>
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
            Cum ajung la amfiteatrul I. Simiti - Farmacie?
          </h3>
          <video controls>
            <source src={movie} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <img src={poza1} alt="poza1" />
          <img src={poza2} alt="poza2" />
          <p>
            Coborâți Pasteur-ul până la intersecție, la semafor treceți strada.
          </p>
          <img src={poza3} alt="poza3" />
          <p>
            După ce ați trecut strada, pe lângă clinica de neurologie o luați pe
            strada Ion Creangă.
          </p>
          <img src={poza4} alt="poza4" />
          <p>
            Și aici treceți strada, să fiți pe partea cu facultatea de Farmacie.
          </p>
          <img src={poza5} alt="poza5" />
          <p>
            Mergeți înainte până în curtea interioară de acolo și intrați pe ușa
            de termopan cu plafonul de beton deasupra.{" "}
          </p>
          <img src={poza6} alt="poza6" />
          <p>
            Cum intrați, pe dreapta, după oficiul paznicului este amfiteatrul
            Simiti.
          </p>
        </section>
      </section>
    </div>
  );
}

export default SimitiPage;
