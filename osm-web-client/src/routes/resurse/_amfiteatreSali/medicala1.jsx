import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faCube } from "@fortawesome/free-solid-svg-icons";

import { PATH } from "../../../const/const";

import banner from "../../../assets/photos/amfiteatre/amf. Medicală I/medicală1.png";
import poza1 from "../../../assets/photos/amfiteatre/amf. Medicală I/poza1.jpg";
import poza2 from "../../../assets/photos/amfiteatre/amf. Medicală I/poza2.jpg";
import poza3 from "../../../assets/photos/amfiteatre/amf. Medicală I/poza3.jpg";
import poza4 from "../../../assets/photos/amfiteatre/amf. Medicală I/poza4.jpg";
import poza5 from "../../../assets/photos/amfiteatre/amf. Medicală I/poza5.jpg";
import poza6 from "../../../assets/photos/amfiteatre/amf. Medicală I/poza6.jpg";
import poza7 from "../../../assets/photos/amfiteatre/amf. Medicală I/poza7.jpg";
import poza8 from "../../../assets/photos/amfiteatre/amf. Medicală I/poza8.jpg";
import movie from "../../../assets/photos/amfiteatre/amf. Medicală I/medicală1.mp4";

function Medicala1Page() {
  window.scrollTo(0, 0);
  const maps = PATH.resurse.amfiteatreSali.medicala1.maps;
  const model3d = PATH.resurse.amfiteatreSali.medicala1.model3d;

  return (
    <div id="medicala-1" className="amfiteatru">
      <header>
        <div className="img-container">
          <img src={banner} alt="maps" />
        </div>
        <div className="container">
          <h3 className="title">Amfiteatrul Iuliu Hațieganu - Medicală I</h3>
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
            Cum ajung la amfiteatrul Iuliu Hațieganu - Medicală I?
          </h3>
          <video controls>
            <source src={movie} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
          <img src={poza4} alt="poza4" />
          <p>După ce ați coborât, faceți stânga și mergeți tot înainte.</p>
          <img src={poza5} alt="poza5" />
          <p>
            După ce ați trecut de unitatea de primiri urgențe și de scările care
            duc la pavilioanele de pe strada de sus, la Anatomie (pe stânga),
            veți vedea clădirea Medicalei I.
          </p>
          <img src={poza6} alt="poza6" />
          <p>Intrați pe intrarea principală.</p>
          <img src={poza7} alt="poza7" />
          <p>
            Odată intrați, mergeți în față și intrați pe ușa din dreapta
            liftului.
          </p>
          <img src={poza8} alt="poza8" />
          <p>
            Amfiteatrul e tot în față după încă 2 seturi de uși. Grijă la
            urcare, e abrupt!
          </p>
        </section>
      </section>
    </div>
  );
}

export default Medicala1Page;
