import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faCube } from "@fortawesome/free-solid-svg-icons";

import { PATH } from "../../../const/const";

import banner from "../../../assets/photos/amfiteatre/Laborator Biofizica/turn.png";
import poza1 from "../../../assets/photos/amfiteatre/Laborator Biofizica/Poza 1.jpg";
import poza2 from "../../../assets/photos/amfiteatre/Laborator Biofizica/Poza 2.jpg";
import poza3 from "../../../assets/photos/amfiteatre/Laborator Biofizica/Poza 3.jpg";
import poza4 from "../../../assets/photos/amfiteatre/Laborator Biofizica/Poza 4.jpg";
import poza5 from "../../../assets/photos/amfiteatre/Laborator Biofizica/Poza 5.jpg";
import poza6 from "../../../assets/photos/amfiteatre/Laborator Biofizica/Poza 6.jpg";
import poza7 from "../../../assets/photos/amfiteatre/Laborator Biofizica/Poza 7.jpg";
import poza8 from "../../../assets/photos/amfiteatre/Laborator Biofizica/Poza 8.jpg";
import poza9 from "../../../assets/photos/amfiteatre/Laborator Biofizica/Poza 9.jpg";
import poza10 from "../../../assets/photos/amfiteatre/Laborator Biofizica/Poza 10.jpg";
import movie from "../../../assets/photos/amfiteatre/Laborator Biofizica/Videoclip Biofizica.mp4";

function LabBiofizicaPage() {
  window.scrollTo(0, 0);
  const maps = PATH.resurse.amfiteatreSali.labBiofizica.maps;
  const model3d = PATH.resurse.amfiteatreSali.labBiofizica.model3d;

  return (
    <div id="lab-biofizica" className="amfiteatru">
      <header>
        <div className="img-container">
          <img src={banner} alt="maps" />
        </div>
        <div className="container">
          <h3 className="title">Laborator biofizică</h3>
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
            Cum ajung la laboratorul de biofizică?
          </h3>
          <video controls>
            <source src={movie} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <img src={poza1} alt="poza1" />
          <p>
            Dinspre strada Pasteur intrați în curtea principală unde se află
            statueta lui Woodrow Wilson.
          </p>
          <img src={poza2} alt="poza2" />
          <p>Mergeți înnainte pe drumul din dreapta statuetei.</p>
          <img src={poza3} alt="poza3" />
          <img src={poza4} alt="poza4" />
          <p>De pe acel trotuar o veți lua prima la stânga.</p>
          <img src={poza5} alt="poza5" />
          <p>Odată ajunși veți vedea ușa ce coboară la subsol.</p>
          <img src={poza6} alt="poza6" />
          <img src={poza7} alt="poza7" />
          <p>Urcați pe scări un etaj.</p>
          <img src={poza8} alt="poza8" />
          <p>
            Intrarea spre laboratorul de biofizică va fi semnalizată, mergeți
            înainte.
          </p>
          <img src={poza9} alt="poza9" />
          <img src={poza10} alt="poza10" />
          <p>
            La intrarea propriu zisă va fi nevoie să apăsați pe buton (să
            sunați) pentru ca asistenții să vă primească înăuntru.
          </p>
        </section>
      </section>
    </div>
  );
}

export default LabBiofizicaPage;
