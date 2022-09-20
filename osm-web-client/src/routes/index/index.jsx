import React from "react";
import "./index.css";

import Header from "./header";

import bannerNew from "../../assets/photos/banner-new.png";

const IndexPage = () => {
  return (
    <div class="index">
      <Header />
      <section className="about">
        <div className="main">
          <div className="content">
            <div className="aboutPart">
              <h4>De la studenți.</h4>
              <h4>Pentru studenți.</h4>
              <p>
                Fondată în anul 1990, Organizația Studenților Mediciniști din
                Cluj – OSM apără și reprezintă drepturile și interesele
                studenților Facultății de Medicină Cluj-Napoca de 30 de ani,
                fiind prima organizație a studenților mediciniști din România.
              </p>
            </div>
            <div className="aboutPart">
              <div class="container">
                <img src={bannerNew} alt="placeholder" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndexPage;
