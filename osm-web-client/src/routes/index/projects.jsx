import React from "react";
import "./projects.css";

import Card1 from "../../components/cards/card1";

import tpngLogo from "../../assets/photos/tpng-logo.jpeg";
import medisticLogo from "../../assets/photos/medistic-logo.png";
import teddyLogo from "../../assets/photos/teddy-logo.jpg";
import dmpLogo from "../../assets/photos/dmp-logo.png";
import zemLogo from "../../assets/photos/zem-logo.jpg";
import aaLogo from "../../assets/photos/artistic-anatomy-logo.png";

function Projects() {
  return (
    <section id="projects">
      <div className="main">
        <div className="content flex column">
          <h3 class="title">Proiecte</h3>
          <p>Inițiative care aduc un plus orașului și societății</p>
          <div className="grid-container flex">
            <Card1 img={tpngLogo} title="Tutori pentru noua generatie" href="/">
              Tutori pentru Noua Generație este proiectul care ”îi aduce la zi”
              pe boboci cu tot ce trebuie să cunoască pentru a începe viața de
              student cu dreptul. Tutorii sunt stâlpii comunității...
            </Card1>

            <Card1
              img={medisticLogo}
              title="Trupa de teatru a facultăţii – MEDISTIC"
              href="/"
            >
              Știm că poate sună puțin ciudat.. trupa de teatru a facultății de
              medicină, dar cu toate astea o parte dintre noi ne-am spus să
              încercăm! Și suntem împreună în treaba asta (de oameni mai...
            </Card1>

            <Card1 img={teddyLogo} title="Teddy Bear Hospital" href="/">
              Teddy Bear Hospital este un proiect cu și despre copii, care are,
              în principal, scopul de a-i obișnui pe cei mici cu halatul alb și
              mersul la medic. Acest proiect se bazează pe educarea...
            </Card1>

            <Card1
              img={dmpLogo}
              title="Disaster Medicine Preparedness"
              href="/"
            >
              Disaster Medicine Preparedness este un proiect din cadrul OSM,
              departamentul SCORP (Standing Comitee on Human Rights and Peace),
              care îşi propune educarea populaţiei în legătură cu...
            </Card1>

            <Card1
              img={zemLogo}
              title="ZEM – Zilele Educaţiei Medicale"
              href="/"
            >
              ZEM este un proiect care încearcă să ofere studenților din toți
              anii ocazia de a aprofunda cunoștințele și abilitățile dobândite
              conform curriculei universitare. Anul acesta vom...
            </Card1>

            <Card1 img={aaLogo} title="Artistic Anatomy" href="/">
              Artistic Anatomy este proiectul OSM Cluj Napoca ce reuneşte
              studenţi ai Universităţii de Medicină si Farmacie şi Universitaţii
              de Arte într-o comunitate cultural-artistică al...
            </Card1>
          </div>
          <a href="/" class="flex">
            VEZI TOATE PROIECTELE <pre> </pre>»
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
