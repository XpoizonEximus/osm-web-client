import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faCube } from "@fortawesome/free-solid-svg-icons";

import { PATH } from "../../../const/const";

import banner from "../../../assets/photos/amfiteatre/amf. Dorofteiu/dorofteiu.png";
import poza1 from "../../../assets/photos/amfiteatre/amf. Dorofteiu/1.jpg";
import poza2 from "../../../assets/photos/amfiteatre/amf. Dorofteiu/2.jpg";
import poza3 from "../../../assets/photos/amfiteatre/amf. Dorofteiu/3.jpg";
import poza4 from "../../../assets/photos/amfiteatre/amf. Dorofteiu/4.jpg";
import movie from "../../../assets/photos/amfiteatre/amf. Dorofteiu/amf Dorofteiu.mp4";

function DorofteiuPage() {
  window.scrollTo(0, 0);
  const maps = PATH.resurse.amfiteatreSali.dorofteiu.maps;
  const model3d = PATH.resurse.amfiteatreSali.dorofteiu.model3d;

  return (
    <div id="dorofteiu" className="amfiteatru">
      <header>
        <div className="img-container">
          <img src={banner} alt="maps" />
        </div>
        <div className="container">
          <h3 className="title">Amfiteatrul Papilian-Albu - Anatomie Umană</h3>
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
            Cum ajung la Amfiteatrul Papilian-Albu - Anatomie Umană?
          </h3>
          <video controls>
            <source src={movie} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <img src={poza1} alt="poza1" />
          <p>Urcați scările și intrați în clădire.</p>
          <img src={poza2} alt="poza2" />
          <p>
            Cum ați intrat, mergeți prin prima ușă din dreapta până dați de
            niște scări.
          </p>
          <img src={poza3} alt="poza3" />
          <p>Urcați acele scări până ajungeți la intrarea în sala din poze.</p>
          <img src={poza4} alt="poza4" />
          <p>
            Priviți către dreapta după ce intrați în sală și veti repera
            amfiteatrul Dorofteiu.
          </p>
        </section>
      </section>
    </div>
  );
}

export default DorofteiuPage;
