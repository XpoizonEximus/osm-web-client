import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faCube } from "@fortawesome/free-solid-svg-icons";

import { PATH } from "../../../const/const";

import banner from "../../../assets/photos/amfiteatre/amf. Fiziologie/fizio.png";
import poza1 from "../../../assets/photos/amfiteatre/amf. Fiziologie/poza1.jpg";
import poza2 from "../../../assets/photos/amfiteatre/amf. Fiziologie/poza2.jpg";
import poza3 from "../../../assets/photos/amfiteatre/amf. Fiziologie/poza3.jpg";
import poza4 from "../../../assets/photos/amfiteatre/amf. Fiziologie/poza4.jpg";

function FiziologiePage() {
  window.scrollTo(0, 0);
  const maps = PATH.resurse.amfiteatreSali.fiziologie.maps;
  const model3d = PATH.resurse.amfiteatreSali.fiziologie.model3d;

  return (
    <div id="fiziologie" className="amfiteatru">
      <header>
        <div className="img-container">
          <img src={banner} alt="maps" />
        </div>
        <div className="container">
          <h3 className="title">Amfiteatrul Fiziologie</h3>
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
          <h3 className="title">Cum ajung la amfiteatrul de fiziologie?</h3>
          <img src={poza1} alt="poza1" />
          <p>
            Intrați pe această stradă, dinspre Babeș, în incinta complexului
            Spitalului Județean de Urgență Cluj.
          </p>
          <img src={poza2} alt="poza2" />
          <p>
            După ce ați intrat, după câțiva metri pe dreapta va fi o scară spre
            partea cu spitalele de mai de jos (imediat înainte de bariere).
          </p>
          <img src={poza3} alt="poza3" />
          <p>
            După ce ați coborât, în dreapta și un pic în față va fi clădirea
            disciplinei de fiziologie. Amfiteatrul e pe fața care dă spre voi.
          </p>
          <img src={poza4} alt="poza4" />
          <p>
            Cum intrați, stânga, și apoi pe dreapta e amfiteatrul. Se poate urca
            și pe scări pentru a intra în spatele amfiteatrului. Atenție, după
            cum spune și afișul, intrarea cu trotinete e strict interzisă!
          </p>
        </section>
      </section>
    </div>
  );
}

export default FiziologiePage;
