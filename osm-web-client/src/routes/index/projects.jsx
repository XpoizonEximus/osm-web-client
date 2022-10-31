import React from "react";
import "./projects.css";

import { PATH } from "../../const/const";
import { useRandomProiecte } from "../../api/hooks/axios/proiecte";

import CardProiect from "../../components/cards/cardProiect";
import Button1 from "../../components/buttons/button1";

function Projects() {
  const data = useRandomProiecte();
  return (
    <section id="projects">
      <div className="main">
        <div className="content flex column">
          <h3 className="title">Proiecte</h3>
          <p>Inițiative care aduc un plus orașului și societății</p>
          <div className="grid-container flex">
            {data?.map((proiect, i) => {
              return (
                <CardProiect
                  key={i}
                  img={proiect.img_path}
                  title={proiect.name}
                  href={PATH.proiecte.index.concat(proiect.id)}
                >
                  {proiect.description}
                </CardProiect>
              );
            })}
          </div>
          <Button1 type="link" click={PATH.proiecte.index}>
            Accesează toate proiectele »
          </Button1>
        </div>
      </div>
    </section>
  );
}

export default Projects;
