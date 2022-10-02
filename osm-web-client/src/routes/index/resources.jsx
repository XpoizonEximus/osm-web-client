import React from "react";
import { Link } from "react-router-dom";
import "./resources.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCalculator,
  faBuildingColumns,
  faScroll,
  faGraduationCap,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";

import Card2 from "../../components/cards/card2";
import Button1 from "../../components/buttons/button1";
import { PATH } from "../../const/const";

function Resources() {
  return (
    <section id="resources">
      <div className="main">
        <div className="content flex column">
          <h3 className="title">Resurse</h3>
          <p>Pentru a face studenția mai ușoară</p>
          <div className="grid-container">
            <Card2
              title="FAQ"
              icon={<FontAwesomeIcon icon={faCircleQuestion} />}
              href={PATH.resurse.faq.index}
            />
            <Card2
              title="Calculator medie"
              icon={<FontAwesomeIcon icon={faCalculator} />}
              href={PATH.resurse.calculatorMedie.index}
            />
            <Card2
              title="Amfiteatre"
              icon={<FontAwesomeIcon icon={faBuildingColumns} />}
              href={PATH.resurse.amfiteatreSali.index}
            />
            <Card2
              title="Ghid ERASMUS"
              icon={<FontAwesomeIcon icon={faScroll} />}
              href={PATH.resurse.ghiduri.index}
            />
            <Card2
              title="Ghid licență"
              icon={<FontAwesomeIcon icon={faGraduationCap} />}
              href={PATH.resurse.ghiduri.index}
            />
            <Card2
              title="Ghidul bobocului"
              icon={<FontAwesomeIcon icon={faUserDoctor} />}
              href={PATH.resurse.ghiduri.index}
            />
          </div>
          <Button1 type="link" click={PATH.resurse.index}>
            Accesează toate resursele »
          </Button1>
        </div>
      </div>
    </section>
  );
}

export default Resources;
