import React, { useRef } from "react";
import "./links.css";

import Header from "../../../layouts/header";
import banner from "../../../assets/photos/links-banner.jpg";
import Button1 from "../../../components/buttons/button1";
import { CardResursaRedirect } from "../../../components/cards/cardResursa";
import { LinksIcon } from "../../../const/icons";
import { LINKS } from "../../../const/const";

function LinksPage() {
  window.scrollTo(0, 0);
  const LinksContent = useRef(null);

  return (
    <div id="links">
      <Header img={banner} top={150}>
        <h1 className="title">Legături externe</h1>
        <br />
        <br />
        <Button1
          type="button"
          click={(e) => {
            LinksContent.current.scrollIntoView();
          }}
        >
          Vezi toate legăturile »
        </Button1>
      </Header>
      <section id="content" className="main" ref={LinksContent}>
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
