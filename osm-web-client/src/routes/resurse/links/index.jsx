import React, { useRef } from "react";
import "./links.css";

import Header from "../../../layouts/header";
import banner from "../../../assets/photos/links-banner.jpg";
import Button1 from "../../../components/buttons/button1";
import { Card2Redirect } from "../../../components/cards/card2";
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
          <Card2Redirect title="Site UMF" icon={LinksIcon} href={LINKS.umf} />
          <Card2Redirect
            title="Site Info-Stud"
            icon={LinksIcon}
            href={LINKS.emsys}
          />
        </div>
      </section>
    </div>
  );
}

export default LinksPage;
