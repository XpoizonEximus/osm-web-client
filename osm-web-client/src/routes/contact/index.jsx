import React, { useRef, useState, useEffect } from "react";
import "./contact.css";

import banner from "../../assets/photos/contact-banner.jpg";

import Header from "../../layouts/header";
import Button1 from "../../components/buttons/button1";
import { useContactData, sendContactForm } from "../../api/hooks/axios/contact";

function ContactPage() {
  useEffect(() => window.scrollTo(0, 0), []);
  const data = useContactData();

  const [formNume, setFormNume] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formTitlu, setFormTitlu] = useState("");
  const [formContinut, setFormContinut] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  return (
    <div id="contact">
      <Header img={banner} top={150}>
        <h1 className="title">Contact</h1>
      </Header>

      <section className="main main-form">
        <div className="content">
          <div
            className={
              emailSent ? "form flex column sent" : "form flex column notsent"
            }
          >
            <h4>Contactează OSM</h4>
            <div className="section-title">Date personale</div>
            <label htmlFor="formNume">Nume: </label>
            <input
              type="text"
              id="formNume"
              name="formNume"
              onChange={(e) => setFormNume(e.target.value)}
            />
            <br />
            <label htmlFor="formEmail">E-mail: </label>
            <input
              type="text"
              id="formEmail"
              name="formEmail"
              onChange={(e) => setFormEmail(e.target.value)}
            />
            <br />
            <div className="section-title">Mesaj</div>
            <label htmlFor="formTitlu">Titlu: </label>
            <input
              type="text"
              id="formTitlu"
              name="formTitlu"
              onChange={(e) => setFormTitlu(e.target.value)}
            />
            <br />
            <label htmlFor="formContinut">Conținut: </label>
            <br />
            <textarea
              type="text"
              id="formContinut"
              name="formContinut"
              rows="6"
              onChange={(e) => setFormContinut(e.target.value)}
            />
            <br />
            <Button1
              type="button"
              click={(e) => {
                sendContactForm(formNume, formEmail, formTitlu, formContinut);
                setEmailSent(true);
              }}
            >
              Trimite {emailSent ? "✔" : ""}
            </Button1>
          </div>
        </div>
      </section>
      <section className="main main-details">
        <div className="content">
          <div className="details">
            <b>
              {data?.role}: {data?.name_full}
            </b>
            <p>E-mail: {data?.email}</p>
            <p>Phone: {data?.phone}</p>
            <p>
              Adresa: Strada Bogdan Petriceicu Hașdeu 90-92, cămin X, camera 16
            </p>
          </div>
          <iframe
            title="maps"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d683.2684225182568!2d23.578820353394693!3d46.76344393122468!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490e81259a7633%3A0x619d2f38f750d383!2sOrganiza%C8%9Bia%20Studen%C8%9Bilor%20Medicini%C8%99ti!5e0!3m2!1sro!2sro!4v1667146169619!5m2!1sro!2sro"
            width="100%"
            allowFullScreen=""
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
