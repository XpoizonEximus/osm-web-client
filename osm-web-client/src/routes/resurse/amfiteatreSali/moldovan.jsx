import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faCube } from "@fortawesome/free-solid-svg-icons";

import { PATH } from "../../../const/const";

import banner from "../../../assets/photos/amfiteatre/amf. Moldovan/moldovan.png";
import poza1 from "../../../assets/photos/amfiteatre/amf. Moldovan/1.jpg";
import poza2 from "../../../assets/photos/amfiteatre/amf. Moldovan/2.jpg";
import poza3 from "../../../assets/photos/amfiteatre/amf. Moldovan/3.jpg";
import movie from "../../../assets/photos/amfiteatre/amf. Moldovan/amf Moldovan.mp4";

function MoldovanPage() {
  window.scrollTo(0, 0);
  const maps = PATH.resurse.amfiteatreSali.moldovan.maps;
  const model3d = PATH.resurse.amfiteatreSali.moldovan.model3d;

  return (
    <div id="moldovan" className="amfiteatru">
      <header>
        <div className="img-container">
          <img src={banner} alt="maps" />
        </div>
        <div className="container">
          <h3 className="title">Amfiteatrul Iuliu Moldovan</h3>
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
            Cum ajung la amfiteatrul Iuliu Moldovan?
          </h3>
          <video controls>
            <source src={movie} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>
            Amfiteatrul Molodovan se află pe strada Louis Pasteur nr. 6, dar
            Google Maps vă trimite la numărul 4.
          </p>
          <img src={poza1} alt="poza1" />
          <p>
            Folosiți săgețile de pe hartă ca să vă ghidați și intrați pe prima
            ușă la dreapta după ce intrați sub gang.
          </p>
          <img src={poza2} alt="poza2" />
          <p>După ce intrați, urcați în dreapta pe scările din poză.</p>
          <img src={poza3} alt="poza3" />
          <p>Drept în față se află amfiteatrul Moldovan.</p>
        </section>
      </section>
    </div>
  );
}

export default MoldovanPage;
