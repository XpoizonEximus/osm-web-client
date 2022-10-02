import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faCube } from "@fortawesome/free-solid-svg-icons";

import { PATH } from "../../../const/const";

import banner from "../../../assets/photos/amfiteatre/Laborator Biostatistică/biostat.png";
import poza1 from "../../../assets/photos/amfiteatre/Laborator Biostatistică/Poza 1.jpg";
import poza2 from "../../../assets/photos/amfiteatre/Laborator Biostatistică/Poza 2.jpg";
import poza3 from "../../../assets/photos/amfiteatre/Laborator Biostatistică/Poza 3.jpg";
import poza4 from "../../../assets/photos/amfiteatre/Laborator Biostatistică/Poza 4.jpg";
import poza5 from "../../../assets/photos/amfiteatre/Laborator Biostatistică/Poza 5.jpg";
import movie from "../../../assets/photos/amfiteatre/Laborator Biostatistică/Videoclip.mp4";

function LabBiostatPage() {
  window.scrollTo(0, 0);
  const maps = PATH.resurse.amfiteatreSali.labBiostat.maps;
  const model3d = PATH.resurse.amfiteatreSali.labBiostat.model3d;

  return (
    <div id="lab-biostat" className="amfiteatru">
      <header>
        <div className="img-container">
          <img src={banner} alt="maps" />
        </div>
        <div className="container">
          <h3 className="title">Laborator biostatistică și MCS</h3>
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
            Cum ajung la laboratorul de biostatistică și MCS?
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
          <p>Mergeți înainte spre clădirea din stânga voastră.</p>
          <img src={poza4} alt="poza4" />
          <p>Urcați scările exterioare.</p>
          <img src={poza5} alt="poza5" />
          <p>Asistenții catedrei vă vor chema înăuntru la momentul potrivit.</p>
        </section>
      </section>
    </div>
  );
}

export default LabBiostatPage;
