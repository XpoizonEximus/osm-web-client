import React from "react";
import "./faq.css";

import banner from "../../../assets/photos/faq-banner.jpg";
import SearchBox from "../../../components/searchBox";
import Header from "../../../layouts/header";

import useFaq from "../../../api/hooks/axios/faq";
import { useEffect, useState } from "react";

function FaqPage() {
  useEffect(() => window.scrollTo(0, 0), []);
  const [src, setSrc] = useState();
  const data = useFaq(src);
  return (
    <div id="faq">
      <Header img={banner} top={100} scrollIcon={false}>
        <h2 className="title">Întrebări frecvente</h2>
        <p>
          Folosește bara de mai jos pentru a căuta prin lista de întrebări și
          răspunsuri.
        </p>
        <br />
        <SearchBox
          placeholder="Caută întrebări și răspunsuri..."
          textSetter={setSrc}
        />
        <br />
      </Header>
      <div className="main">
        {data?.map ? (
          data?.map((element, index) => {
            return (
              <div key={index}>
                <section id={index}>
                  <div className="content">
                    <h3 className="title">{element?.title}</h3>
                    <div className="grid-container">
                      {element?.faqs_arr?.map((e, i) => {
                        return (
                          <>
                            <div className="question">{e?.question}</div>
                            <div
                              className="answer"
                              dangerouslySetInnerHTML={{ __html: e?.answer }}
                            />
                          </>
                        );
                      })}
                    </div>
                  </div>
                </section>
                <hr />
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default FaqPage;
