import React, { useEffect } from "react";
import "./proiect.css";

import { useProiect } from "../../api/hooks/axios/proiecte";
import CardPerson from "../../components/cards/cardPerson";

function ProiectPage({ index }) {
  useEffect(() => window.scrollTo(0, 0), []);
  const data = useProiect(index);
  console.log(data);

  return (
    <div id={index} className="proiect flex column">
      <header className="flex column">
        <div className="container flex column">
          <img src={data?.project?.img_path} alt="logo" className="logo" />
          <img
            src={data?.project?.department_img_path}
            alt="departamentlogo"
            className="departament-logo"
          />
        </div>
        <h3>{data?.project.title}</h3>
      </header>
      <div className="descriere">{data?.project?.descr}</div>
      <div className="imgs-container">
        {data?.gallery?.map((element, i) => (
          <div key={i}>
            <img src={element?.img_path} alt="img" />
            <span className="img-sub">{element?.descr}</span>
          </div>
        ))}
      </div>
      <div className="contact">
        <CardPerson
          profil={data?.coord?.img_path}
          nume={data?.coord?.name_full}
          subtitlu={data?.coord?.role}
          fields={[data?.coord?.email, data?.coordinator?.phone]}
        />
      </div>
    </div>
  );
}

export default ProiectPage;
