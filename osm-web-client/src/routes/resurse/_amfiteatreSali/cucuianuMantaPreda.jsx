import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faCube } from "@fortawesome/free-solid-svg-icons";

import { PATH } from "../../../const/const";

import banner from "../../../assets/photos/amfiteatre/amf. Cucuianu-Manta-Preda/cucuianu și manta și preda.png";
import poza1 from "../../../assets/photos/amfiteatre/amf. Cucuianu-Manta-Preda/Poza 1.jpg";
import poza2 from "../../../assets/photos/amfiteatre/amf. Cucuianu-Manta-Preda/Poza 2.jpg";
import poza3 from "../../../assets/photos/amfiteatre/amf. Cucuianu-Manta-Preda/Poza 3.jpg";
import poza4 from "../../../assets/photos/amfiteatre/amf. Cucuianu-Manta-Preda/Poza 4.jpg";
import poza5 from "../../../assets/photos/amfiteatre/amf. Cucuianu-Manta-Preda/Poza 5-Cucuianu.jpg";
import poza6 from "../../../assets/photos/amfiteatre/amf. Cucuianu-Manta-Preda/Poza 6.jpg";
import poza7 from "../../../assets/photos/amfiteatre/amf. Cucuianu-Manta-Preda/Poza 7.jpg";
import poza8 from "../../../assets/photos/amfiteatre/amf. Cucuianu-Manta-Preda/Poza 8-Manta.jpg";
import poza9 from "../../../assets/photos/amfiteatre/amf. Cucuianu-Manta-Preda/Poza 9-Preda.jpg";
import movie from "../../../assets/photos/amfiteatre/amf. Cucuianu-Manta-Preda/Time lapse.mp4";

function CucuianuMantaPredaPage() {
  window.scrollTo(0, 0);
  const maps = PATH.resurse.amfiteatreSali.anatomie.maps;
  const model3d = PATH.resurse.amfiteatreSali.anatomie.model3d;

  return (
    <div id="anatomie" className="amfiteatru">
      <header>
        <div className="img-container">
          <img src={banner} alt="maps" />
        </div>
        <div className="container">
          <h3 className="title">Amfiteatrele Cucuianu, Manta, Preda</h3>
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
          <h3 className="title">
            Cum ajung la amfiteatrele Cucuianu, Manta, Preda?
          </h3>
          <video controls>
            <source src={movie} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <img src={poza1} alt="poza1" />
          <p>De pe strada Pasteur intrați în curtea principală.</p>
          <img src={poza2} alt="poza2" />
          <img src={poza3} alt="poza3" />
          <p>Înaintați prin curte pe sub arcadele din față.</p>
          <img src={poza4} alt="poza4" />
          <p>În clădirea de sticlă sunt amfiteatrele Cucuianu, Manta, Preda.</p>
          <img src={poza5} alt="poza5" />
          <p>La parter cum intrați în față se află Amf. Cucuianu. </p>
          <img src={poza6} alt="poza6" />
          <p>
            În stânga cum intrați se află un set de scări pe care trebuie să
            urcați ca să ajungeți la Amf. Manta și Preda.
          </p>
          <img src={poza7} alt="poza7" />
          <p>La etajul 1 se află Manta iar la 2 Preda.</p>
          <img src={poza8} alt="poza8" />
          <p>La etajul 1 unde e pictura cu îngerași se află Amf Manta.</p>
          <img src={poza9} alt="poza9" />
          <p>La etajul 2 unde este pictura albastră se află Amf. Preda.</p>
        </section>
      </section>
    </div>
  );
}

export default CucuianuMantaPredaPage;
