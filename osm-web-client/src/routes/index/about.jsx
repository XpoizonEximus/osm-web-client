import React from "react";
import "./about.css";

import bannerNew from "../../assets/photos/banner-new.png";

function About() {
  return (
    <section id="about">
      <div className="main">
        <div className="content">
          <div className="container">
            <h4>Despre noi</h4>
            <p className="left">
              Fondată în anul 1990, Organizația Studenților Mediciniști din Cluj
              – OSM apără și reprezintă drepturile și interesele studenților
              Facultății de Medicină Cluj-Napoca de 30 de ani, fiind prima
              organizație a studenților mediciniști din România.
            </p>
          </div>
          <div className="container">
            <div className="img-container flex column">
              <img src={bannerNew} alt="placeholder" height="400px" />
            </div>
          </div>
          <div className="container span">
            <p>
              Creată cu scopul de a mijloci în mod legal dialogul dintre
              studenți și forul academic universitar, aceasta a contribuit
              semnificativ la îmbunătățirea vieții studențești atât din punct de
              vedere al actului didactic (prin implementarea platformei de
              feedback didactic), cât și pe plan social (supervizând îndeaproape
              distribuirea locurilor în cămine, a taberelor de vară și multe
              altele pe care vă invităm să le descoperiți pe acest site).
            </p>
            <p>
              Pe lângă toate acestea, OSM reprezintă nevoile studentului
              medicinist clujean atât la nivel național din anul 1994, prin
              prisma Federației Asociațiilor Studenților Mediciniști din România
              – FASMR fiind, de altfel, unui dintre membrii fondatori ai
              acesteia. Prin intermediul FASMR poziția studenților mediciniști
              români este reprezentată și la nivelul International Federation of
              Medical Students’ Associations – IFMSA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
