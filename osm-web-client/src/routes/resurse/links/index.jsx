import React, { useRef } from "react";
import "./links.css";

import Header from "../../../layouts/header";
import banner from "../../../assets/photos/links-banner.jpg";
import Button1 from "../../../components/buttons/button1";
import Card2 from "../../../components/cards/card2";
import {LinksIcon} from "../../../const/icons";

function LinksPage() {
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
          <Card2 title="Site UMF" icon={LinksIcon} />
          <Card2 title="Site Info-Stud" icon={LinksIcon} />
        </div>
      </section>
    </div>
  );
}

export default LinksPage;
