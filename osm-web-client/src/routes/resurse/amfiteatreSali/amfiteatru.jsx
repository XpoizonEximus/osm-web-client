import React, { useState, useEffect } from "react";
import "./amfiteatru.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faCube } from "@fortawesome/free-solid-svg-icons";
import { useAmfiteatru } from "../../../api/hooks/axios/amfiteatre";

function AmfiteatruPage({ id }) {
  useEffect(() => window.scrollTo(0, 0), []);
  const data = useAmfiteatru(id);

  const [maps, setMaps] = useState("");
  const [model3d, setModel3d] = useState("");

  useEffect(() => {
    setMaps(data?.hall?.maps_url);
    setModel3d(data?.hall?.tridim_url);
  }, [data]);

  return (
    <div className="amfiteatru">
      <header>
        <div className="img-container">
          <img src={data?.hall?.img_path} alt="maps" />
        </div>
        <div className="container">
          <h3 className="title">
            {data?.hall?.title} {data?.hall?.subtitle}
          </h3>
          <div className="buttons-container">
            {maps && maps !== "" ? (
              <a href={maps}>
                <FontAwesomeIcon icon={faMapLocationDot} />
                Maps
              </a>
            ) : (
              <></>
            )}
            {model3d && model3d !== "" && maps && maps !== "" ? (
              <div className="stretcher row"></div>
            ) : (
              <></>
            )}
            {model3d && model3d !== "" ? (
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
          <h3 className="title">Cum ajung?</h3>
          {data?.hall?.vid_path ? (
            <video controls>
              <source src={data?.hall?.vid_path} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <></>
          )}
          {data?.gallery?.map((element, index) => {
            return (
              <>
                <img src={element?.img_path} alt="" />
                <p>{element?.descr}</p>
              </>
            );
          })}
        </section>
      </section>
    </div>
  );
}

export default AmfiteatruPage;
