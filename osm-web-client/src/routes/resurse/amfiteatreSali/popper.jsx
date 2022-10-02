import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faCube } from "@fortawesome/free-solid-svg-icons";

import { PATH } from "../../../const/const";

import banner from "../../../assets/photos/amfiteatre/amf. Popper/popper.png";
import poza1 from "../../../assets/photos/amfiteatre/amf. Popper/Poza 1.jpg";
import poza2 from "../../../assets/photos/amfiteatre/amf. Popper/Poza 2.jpg";
import poza3 from "../../../assets/photos/amfiteatre/amf. Popper/Poza 3.jpg";
import poza4 from "../../../assets/photos/amfiteatre/amf. Popper/Poza 4.jpg";
import poza5 from "../../../assets/photos/amfiteatre/amf. Popper/Poza 5.jpg";
import movie from "../../../assets/photos/amfiteatre/amf. Popper/Time-lapse.mp4";

function PopperPage() {
  window.scrollTo(0, 0);
  const maps = PATH.resurse.amfiteatreSali.popper.maps;
  const model3d = PATH.resurse.amfiteatreSali.popper.model3d;

  return (
    <div id="popper" className="amfiteatru">
      <header>
        <div className="img-container">
          <img src={banner} alt="maps" />
        </div>
        <div className="container">
          <h3 className="title">Amfiteatrul Erwin Popper - Farmacie A</h3>
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
            Cum ajung la amfiteatrul Erwin Popper - Farmacie A?
          </h3>
          <video controls>
            <source src={movie} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <img src={poza1} alt="poza1" />
          <p>Pe strada Pasteur coborâți spre intersecția cu Babeș.</p>
          <img src={poza2} alt="poza2" />
          <p>
            Fiți atenți după un stâlp care are pe el semnul cu „Pasteur nr. 4”.
          </p>
          <img src={poza3} alt="poza3" />
          <img src={poza4} alt="poza4" />
          <p>Intrați în curte și mergeți tot înainte.</p>
          <img src={poza5} alt="poza5" />
          <p>Amf. Popper este sus în capul scărilor.</p>
        </section>
      </section>
    </div>
  );
}

export default PopperPage;
