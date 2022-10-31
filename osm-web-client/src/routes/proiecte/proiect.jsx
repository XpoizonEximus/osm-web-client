import React, {useEffect} from "react";
import "./proiect.css";

import { useProiect } from "../../api/hooks/axios/proiecte";

function ProiectPage({ index }) {
  useEffect(() => window.scrollTo(0, 0), []);
  const data = useProiect(index);

  return (
    <div id={index} className="proiect flex column">
      <header className="flex column">
        <div className="container flex column">
          <img src={data?.img_path} alt="logo" className="logo" />
          <img
            src={data?.department_img_path}
            alt="departamentlogo"
            className="departament-logo"
          />
        </div>
        <h3>{data?.name}</h3>
      </header>
      <div className="descriere">{data?.description}</div>
      <div className="imgs-container">
        {data?.gallery?.map((element, i) => (
          <>
            <img src={element.path} alt="img" />
            <span className="img-sub">{element.descr}</span>
          </>
        ))}
      </div>

      <div className="contact">
        <img src={data?.coordinator?.img_path} alt="coord" className="profil" />
        <h5 className="nume">{data?.coordinator?.name}</h5>
        <p className="subtitle">
          {"COORDONATOR".concat(
            String(index) === "schimburi_internationale" ? "I" : ""
          )}
        </p>
        <p className="field">{data?.coordinator?.email}</p>
        <p className="field">{data?.coordinator?.phone}</p>
      </div>
    </div>
  );
}

export default ProiectPage;
