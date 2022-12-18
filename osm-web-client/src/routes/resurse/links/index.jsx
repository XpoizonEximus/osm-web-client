import React from "react";
import "./links.css";

import Header from "../../../layouts/header";
import banner from "../../../assets/photos/links-banner.jpg";
import { CardResursaRedirect } from "../../../components/cards/cardResursa";
import { LinksIcon } from "../../../const/icons";
import { LINKS } from "../../../const/const";
import { useEffect } from "react";

function LinksPage() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div id="links">
      <Header img={banner} top={150}>
        <h1 className="title">Legături externe</h1>
        <br />
        <br />
      </Header>
      <section id="content" className="main">
        <div className="content">
          <CardResursaRedirect
            title="Site UMF"
            icon={LinksIcon}
            href={LINKS.umf}
          />
          <CardResursaRedirect
            title="Site Info-Stud"
            icon={LinksIcon}
            href={LINKS.emsys}
          />
          <CardResursaRedirect
            title="Platforma cereri UMF"
            icon={LinksIcon}
            href={LINKS.cereri}
          />
        </div>
      </section>
    </div>
  );
}

export default LinksPage;
