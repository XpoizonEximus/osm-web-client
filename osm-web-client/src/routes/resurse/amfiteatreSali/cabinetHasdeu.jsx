import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faCube } from "@fortawesome/free-solid-svg-icons";

import { PATH } from "../../../const/const";

import banner from "../../../assets/photos/amfiteatre/cabinet medical H7/cabinet h7.png";
import poza1 from "../../../assets/photos/amfiteatre/cabinet medical H7/poza1.jpg";

function CabinetHasdeuPage() {
  window.scrollTo(0, 0);
  const maps = PATH.resurse.amfiteatreSali.cabinetHasdeu.maps;
  const model3d = PATH.resurse.amfiteatreSali.cabinetHasdeu.model3d;

  return (
    <div id="anatomie" className="amfiteatru">
      <header>
        <div className="img-container">
          <img src={banner} alt="maps" />
        </div>
        <div className="container">
          <h3 className="title">Cabinet medical Hașdeu</h3>
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
            Cum ajung la cabinet medical din Hașdeu?
          </h3>
          <img src={poza1} alt="poza1" />
          <p>
            Cabinetul medical se află pe laterala căminului H7 care bate înspre
            căminul B11 (spre vest), la parter, cu intrare marcată. Sala de
            așteptare e prima pe stânga iar cabinetul propriu-zis e mai în față.
          </p>
          <p>
            A nu se confunda cu cabinetul medical de pe str. Victor Babeș, de
            lângă cantină.
          </p>
        </section>
      </section>
    </div>
  );
}

export default CabinetHasdeuPage;
