import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faCube } from "@fortawesome/free-solid-svg-icons";

import { PATH } from "../../../const/const";

import banner from "../../../assets/photos/amfiteatre/amf. Oftalmologie/ofta.png";
import poza1 from "../../../assets/photos/amfiteatre/amf. Oftalmologie/1.jpg";
import poza2 from "../../../assets/photos/amfiteatre/amf. Oftalmologie/2.jpg";
import poza3 from "../../../assets/photos/amfiteatre/amf. Oftalmologie/3.jpg";
import poza4 from "../../../assets/photos/amfiteatre/amf. Oftalmologie/4.jpg";
import poza5 from "../../../assets/photos/amfiteatre/amf. Oftalmologie/5.jpg";

function OftalmologiePage() {
  window.scrollTo(0, 0);
  const maps = PATH.resurse.amfiteatreSali.ofta.maps;
  const model3d = PATH.resurse.amfiteatreSali.ofta.model3d;

  return (
    <div id="ofta" className="amfiteatru">
      <header>
        <div className="img-container">
          <img src={banner} alt="maps" />
        </div>
        <div className="container">
          <h3 className="title">Amfiteatrul Oftalmologie</h3>
          <div className="buttons-container">
            {maps !== "" ? (
              <a href={maps}>
                <FontAwesomeIcon icon={faMapLocationDot} />
                Maps
              </a>
            ) : (
              <></>
            )}
            {model3d !== "" && maps !== "" ? (
              <div className="stretcher row"></div>
            ) : (
              <></>
            )}
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
          <h3 className="title">Cum ajung la amfiteatrul de oftalmologie?</h3>
          <p>
            După ce intri dinspre Babeș în zona de clinici, vei face prima la
            stânga, după care vei avea o clădire în dreapta ta unde va trebui să
            urci un rând de scări și să intri pe ușă, vei intra în hol unde la
            stânga este amfiteatrul.
          </p>
          <img src={poza1} alt="poza1" />
          <img src={poza2} alt="poza2" />
          <img src={poza3} alt="poza3" />
          <img src={poza4} alt="poza4" />
          <img src={poza5} alt="poza5" />
        </section>
      </section>
    </div>
  );
}

export default OftalmologiePage;
