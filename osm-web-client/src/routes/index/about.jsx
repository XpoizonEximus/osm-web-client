import React from "react";
import "./about.css";

import bannerNew from "../../assets/photos/banner-new.png";

function About() {
  return (
    <section id="about">
      <div className="main">
        <div className="content">
          <div className="container">
            <h4>De la studenți</h4>
            <h4>Pentru studenți</h4>
            <p>
              Fondată în anul 1990, Organizația Studenților Mediciniști din Cluj
              – OSM apără și reprezintă drepturile și interesele studenților
              Facultății de Medicină Cluj-Napoca de 30 de ani, fiind prima
              organizație a studenților mediciniști din România.
            </p>
          </div>
          <div className="container">
            <div className="img-container flex column">
            <img src={bannerNew} alt="placeholder" height="450px"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
