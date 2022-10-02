import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faCube } from "@fortawesome/free-solid-svg-icons";

import { PATH } from "../../../const/const";

import banner from "../../../assets/photos/amfiteatre/amf. Anatomie patologica/anato.png";
import poza1 from "../../../assets/photos/amfiteatre/amf. Anatomie patologica/1_babes 8.png";
import poza2 from "../../../assets/photos/amfiteatre/amf. Anatomie patologica/2.jpg";
import poza3 from "../../../assets/photos/amfiteatre/amf. Anatomie patologica/3.jpg";
import poza4 from "../../../assets/photos/amfiteatre/amf. Anatomie patologica/4.jpg";
import poza5 from "../../../assets/photos/amfiteatre/amf. Anatomie patologica/5.jpg";
import poza6 from "../../../assets/photos/amfiteatre/amf. Anatomie patologica/6.jpg";
import movie from "../../../assets/photos/amfiteatre/amf. Anatomie patologica/amf Anato-pat.mp4";

function AnatomiePatologicaPage() {
  window.scrollTo(0, 0);
  const maps = PATH.resurse.amfiteatreSali.anatomiePatologica.maps;
  const model3d = PATH.resurse.amfiteatreSali.anatomiePatologica.model3d;

  return (
    <div id="anatomie-patologica" className="amfiteatru">
      <header>
        <div className="img-container">
          <img src={banner} alt="maps" />
        </div>
        <div className="container">
          <h3 className="title">Amfiteatrul Titu-Vasiliu - Anatomie Patologică</h3>
          <div className="buttons-container">
            {maps !== "" ? (
              <a href={maps}>
                <FontAwesomeIcon icon={faMapLocationDot} />
                Maps
              </a>
            ) : (
              <></>
            )}
            {model3d !== "" && maps !== "" ? <div className="stretcher row"></div> : <></>}
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
            Cum ajung la amfiteatrul Titu-Vasiliu - Anatomie Patologică?
          </h3>
          <video controls>
            <source src={movie} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>
            Amfiteatrul de anatomie patologică se află în aceeași clădire cu cel
            de anatomie, pe strada Victor Babeș, mai jos de numărul 8.
          </p>
          <img src={poza1} alt="poza1" />
          <p>Intrați pe poarta din imagine.</p>
          <img src={poza2} alt="poza2" />
          <p>Mergeți tot înainte până ajungeți la clădirea din imagine.</p>
          <img src={poza3} alt="poza3" />
          <p>Dupa ce intrați, urcați pe scări.</p>
          <img src={poza4} alt="poza4" />
          <p>Luați-o la dreapta.</p>
          <img src={poza5} alt="poza5" />
          <p>Mergeți până în capătul coridorului.</p>
          <img src={poza6} alt="poza6" />
          <p>
            Intrați pe ușa din imagine și luați-o la dreapta și veți ajunge la
            amfiteatrul de anatomie patologică.
          </p>
        </section>
      </section>
    </div>
  );
}

export default AnatomiePatologicaPage;
