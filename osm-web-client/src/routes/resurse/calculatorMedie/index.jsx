import React, { useEffect } from "react";
import "./calculatorMedie.css";
import { useState } from "react";
import * as api from "../../../api/hooks/axios/calculatorMedie";

import banner from "../../../assets/photos/calculator-medie-banner.jpg";
import Header from "../../../layouts/header";
import Button1 from "../../../components/buttons/button1";

function CalculatorMediePage() {
  useEffect(() => window.scrollTo(0, 0), []);

  const specializari = api.useSpecializari();
  const [specializare, setSpecializare] = useState();

  const ani = api.useAni(specializare);
  const [an, setAn] = useState();

  const materii = api.useMaterii(an);
  const [data, setData] = useState({});
  const [media, setMedia] = useState(0.0);

  return (
    <div id="calculator-medie">
      <Header img={banner} top={150}>
        <h1 className="title">Calculator medie</h1>
        <div style={{ height: "40px" }} />
        
      </Header>

      <section className="main main-form">
        <div className="content">
          <div className="form flex column">
            <h4>Calculează-ți media</h4>
            <select
              name="specializari"
              id="specializari"
              onChange={(e) => {
                setSpecializare(e.target.value);
              }}
            >
              <option value="default">-- Selectează specializarea-- </option>
              {specializari?.map((element, index) => (
                <option value={element?.id} key={element?.id}>
                  {element?.title}
                </option>
              ))}
            </select>
            <select
              name="ani"
              id="ani"
              onChange={(e) => {
                setAn(e.target.value);
              }}
            >
              <option value="default">-- Selectează anul de studiu-- </option>
              {ani?.map ? (
                ani?.map((element, index) => (
                  <option value={element?.id} key={element?.id}>
                    Anul {element?.year}
                  </option>
                ))
              ) : (
                <></>
              )}
            </select>
            {materii?.map ? (
              materii?.map((element, index) => {
                return (
                  <div className="materie-container">
                    <div className="nume elem">{element?.title}</div>
                    <div className="nota elem">
                      <select
                        name={element?.title}
                        id={element?.title}
                        onChange={(e) => {
                          let v = data;
                          v[element?.id.toString()] = {
                            weight: element?.weight,
                            value: e.target.value,
                          };
                          setData(v);
                        }}
                      >
                        <option value={-1}>Necompletat</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                      </select>
                    </div>
                    <div className="credite elem">
                      Credite: {element?.weight}
                    </div>
                  </div>
                );
              })
            ) : (
              <></>
            )}
            <div className="final">
              <div button-container>
                <Button1
                  type="button"
                  click={(e) => {
                    let sumap = 0;
                    let sumanp = 0;
                    let suma = 0;
                    let suman = 0;
                    for (const [key, value] of Object.entries(data)) {
                      if (value === -1) continue;
                      const weight = parseInt(value.weight);
                      const val = parseInt(value.value);  
                      sumap += weight;
                      sumanp += val * weight;
                      suma += 1;
                      suman += val;
                    }
                    const res = (sumanp / sumap + suman / suma) / 2;
                    setMedia(res);
                  }}
                >
                  Calculează
                </Button1>
              </div>
              <div className="media-container">{media}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CalculatorMediePage;
