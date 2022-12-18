import React, { useRef } from "react";
import "./ghiduri.css";

import Header from "../../../layouts/header";
import banner from "../../../assets/photos/guides-banner.jpg";
import { CardResursaRedirect } from "../../../components/cards/cardResursa";
import { GhiduriIcon } from "../../../const/icons";
import useGhiduri from "../../../api/hooks/axios/ghiduri";
import { useEffect } from "react";

function GhiduriPage() {
  useEffect(() => window.scrollTo(0, 0), []);
  const ghiduriContent = useRef(null);
  const data = useGhiduri();

  return (
    <div id="ghiduri">
      <Header img={banner} top={0}>
        <h1 className="title">Ghiduri</h1>
        <p className="subtitle">Explicații pas cu pas</p>
        <p>
          Află de la cei cu experiență tot ce trebuie să știi despre facultate.
        </p>
        <br />
        <br />
      </Header>
      <section id="content" className="main" ref={ghiduriContent}>
        <div className="content">
          {data?.map((element, index) => {
            return (
              <CardResursaRedirect
                key={index}
                title={element?.descr}
                icon={GhiduriIcon}
                href={element?.file_path}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default GhiduriPage;
