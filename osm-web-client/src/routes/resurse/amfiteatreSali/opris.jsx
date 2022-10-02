import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faCube } from "@fortawesome/free-solid-svg-icons";

import { PATH } from "../../../const/const";

import banner from "../../../assets/photos/amfiteatre/amf. Opriș/aleman și opriș.png";
import poza1 from "../../../assets/photos/amfiteatre/amf. Opriș/poza1.jpg";
import poza2 from "../../../assets/photos/amfiteatre/amf. Opriș/poza2.jpg";
import poza3 from "../../../assets/photos/amfiteatre/amf. Opriș/poza3.jpg";
import poza4 from "../../../assets/photos/amfiteatre/amf. Opriș/poza4.jpg";
import movie from "../../../assets/photos/amfiteatre/amf. Opriș/opriș.mp4";

function OprisPage() {
  window.scrollTo(0, 0);
  const maps = PATH.resurse.amfiteatreSali.opris.maps;
  const model3d = PATH.resurse.amfiteatreSali.opris.model3d;

  return (
    <div id="opris" className="amfiteatru">
      <header>
        <div className="img-container">
          <img src={banner} alt="maps" />
        </div>
        <div className="container">
          <h3 className="title">Amfiteatrul Opriș - Victor Babeș 2</h3>
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
            Cum ajung la amfiteatrul Opriș - Victor Babeș 2?
          </h3>
          <video controls>
            <source src={movie} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <img src={poza1} alt="poza1" />
          <p>
            Intrați prin spatele rectoratului, un pic mai jos de intrarea
            principală, acolo unde e bariera.
          </p>
          <img src={poza2} alt="poza2" />
          <img src={poza3} alt="poza3" />
          <p>
            Mergeți tot în față, printre mașini, până ce dați de niște scări pe
            care trebuie să le urcați.
          </p>
          <img src={poza4} alt="poza4" />
          <p>Amf. Opriș imediat cum deschideți ușa, la primul etaj.</p>
        </section>
      </section>
    </div>
  );
}

export default OprisPage;
