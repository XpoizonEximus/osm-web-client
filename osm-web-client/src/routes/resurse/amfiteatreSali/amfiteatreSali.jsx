import React from "react";
import "./amfiteatreSali.css";

import { PATH } from "../../../const/const";

import Header from "./header";
import Card3 from "../../../components/cards/card3";

import anatomie from "../../../assets/photos/amfiteatre/amf. Anatomie/poza7.jpg";
import aleman from "../../../assets/photos/amfiteatre/amf. Aleman/poza5.jpg";
import anatomiePatologica from "../../../assets/photos/amfiteatre/amf. Anatomie patologica/6.jpg";
import bilascu from "../../../assets/photos/amfiteatre/amf. Bilascu/Poza 4.jpg";
import cabinetBabes from "../../../assets/photos/amfiteatre/cabinet medical Babeș, cantină/poza1.jpg";
import cabinetHasdeu from "../../../assets/photos/amfiteatre/cabinet medical H7/poza1.jpg";
import casierie from "../../../assets/photos/amfiteatre/casierie, birou taxe/poza4.jpg";
import cucuianuMantaPreda from "../../../assets/photos/amfiteatre/amf. Cucuianu-Manta-Preda/cucuianu și manta și preda.png";
import dermatologie from "../../../assets/photos/amfiteatre/amf. Dermatologie/Poza 4.jpg";
import dorofteiu from "../../../assets/photos/amfiteatre/amf. Dorofteiu/4.jpg";
import fiziologie from "../../../assets/photos/amfiteatre/amf. Fiziologie/poza4.jpg";
import genetica from "../../../assets/photos/amfiteatre/turn genetică/poza3.jpg";
import infectioase from "../../../assets/photos/amfiteatre/amf. Infecțioase/poza 3.jpg";
import labBiocel from "../../../assets/photos/amfiteatre/Laborator Biologie celulară/Poza 14.jpg";
import labBiofizica from "../../../assets/photos/amfiteatre/Laborator Biofizica/Poza 10.jpg";
import labBiostat from "../../../assets/photos/amfiteatre/Laborator Biostatistică/Poza 5.jpg";
import medicala1 from "../../../assets/photos/amfiteatre/amf. Medicală I/poza8.jpg";
import minea from "../../../assets/photos/amfiteatre/amf. Minea/3.jpg";
import moldovan from "../../../assets/photos/amfiteatre/amf. Moldovan/3.jpg";
import multimedia from "../../../assets/photos/amfiteatre/sala Multimedia/poza3.jpg";
import opris from "../../../assets/photos/amfiteatre/amf. Opriș/poza4.jpg";
import popper from "../../../assets/photos/amfiteatre/amf. Popper/Poza 5.jpg";
import radiologie from "../../../assets/photos/amfiteatre/amf. Radiologie/poza 5.jpg";
import recuperare from "../../../assets/photos/amfiteatre/amf. Recuperare/4.jpg";
import registratura from "../../../assets/photos/amfiteatre/registratură/poza3.jpg";
import simiti from "../../../assets/photos/amfiteatre/amf. Simiti/Poza 6.jpg";

function AmfiteatreSaliPage() {
  window.scrollTo(0, 0);
  return (
    <div id="amfiteatre-sali">
      <Header />
      <section className="main">
        <div className="content">
          <Card3
            img={registratura}
            href={PATH.resurse.amfiteatreSali.registratura.index}
            title="Registratură"
            subtitle=""
            maps={PATH.resurse.amfiteatreSali.registratura.maps}
            model3d={PATH.resurse.amfiteatreSali.registratura.model3d}
          />
          <Card3
            img={casierie}
            href={PATH.resurse.amfiteatreSali.casierie.index}
            title="Casierie și birou taxe"
            subtitle=""
            maps={PATH.resurse.amfiteatreSali.casierie.maps}
            model3d={PATH.resurse.amfiteatreSali.casierie.model3d}
          />
          <Card3
            img={cabinetBabes}
            href={PATH.resurse.amfiteatreSali.cabinetBabes.index}
            title="Cabinet medical Babeș și cantină"
            subtitle=""
            maps={PATH.resurse.amfiteatreSali.cabinetBabes.maps}
            model3d={PATH.resurse.amfiteatreSali.cabinetBabes.model3d}
          />
          <Card3
            img={cabinetHasdeu}
            href={PATH.resurse.amfiteatreSali.cabinetHasdeu.index}
            title="Cabinet medical Hașdeu"
            subtitle=""
            maps={PATH.resurse.amfiteatreSali.cabinetHasdeu.maps}
            model3d={PATH.resurse.amfiteatreSali.cabinetHasdeu.model3d}
          />
          <Card3
            img={medicala1}
            href={PATH.resurse.amfiteatreSali.medicala1.index}
            title="Amfiteatrul Iuliu Hațieganu"
            subtitle="Medicală I"
            maps={PATH.resurse.amfiteatreSali.medicala1.maps}
            model3d={PATH.resurse.amfiteatreSali.medicala1.model3d}
          />
          <Card3
            img={anatomie}
            href={PATH.resurse.amfiteatreSali.anatomie.index}
            title="Amfiteatrul Papilian-Albu"
            subtitle="Anatomie Umană"
            maps={PATH.resurse.amfiteatreSali.anatomie.maps}
            model3d={PATH.resurse.amfiteatreSali.anatomie.model3d}
          />
          <Card3
            img={cucuianuMantaPreda}
            href={PATH.resurse.amfiteatreSali.cucuianuMantaPreda.index}
            title="Amfiteatrele Cucuianu, Manta, Preda"
            subtitle=""
            maps={PATH.resurse.amfiteatreSali.cucuianuMantaPreda.maps}
            model3d={PATH.resurse.amfiteatreSali.cucuianuMantaPreda.model3d}
          />
          <Card3
            img={moldovan}
            href={PATH.resurse.amfiteatreSali.moldovan.index}
            title="Amfiteatrul Iuliu Moldovan"
            subtitle=""
            maps={PATH.resurse.amfiteatreSali.moldovan.maps}
            model3d={PATH.resurse.amfiteatreSali.moldovan.model3d}
          />
          <Card3
            img={fiziologie}
            href={PATH.resurse.amfiteatreSali.fiziologie.index}
            title="Amfiteatrul Fiziologie"
            subtitle=""
            maps={PATH.resurse.amfiteatreSali.fiziologie.maps}
            model3d={PATH.resurse.amfiteatreSali.fiziologie.model3d}
          />
          <Card3
            img={dorofteiu}
            href={PATH.resurse.amfiteatreSali.dorofteiu.index}
            title="Amfiteatrul Dorofteiu"
            subtitle=""
            maps={PATH.resurse.amfiteatreSali.dorofteiu.maps}
            model3d={PATH.resurse.amfiteatreSali.dorofteiu.model3d}
          />
          <Card3
            img={aleman}
            href={PATH.resurse.amfiteatreSali.aleman.index}
            title="Amfiteatrul Aleman"
            subtitle="Victor Babeș 2"
            maps={PATH.resurse.amfiteatreSali.aleman.maps}
            model3d={PATH.resurse.amfiteatreSali.aleman.model3d}
          />
          <Card3
            img={anatomiePatologica}
            href={PATH.resurse.amfiteatreSali.anatomiePatologica.index}
            title="Amfiteatrul Titu-Vasiliu"
            subtitle="Anatomie Patologică"
            maps={PATH.resurse.amfiteatreSali.anatomiePatologica.maps}
            model3d={PATH.resurse.amfiteatreSali.anatomiePatologica.model3d}
          />
          <Card3
            img={bilascu}
            href={PATH.resurse.amfiteatreSali.bilascu.index}
            title="Amfiteatrul Gheorghe Bilașcu"
            subtitle="Stomatologie 1"
            maps={PATH.resurse.amfiteatreSali.bilascu.maps}
            model3d={PATH.resurse.amfiteatreSali.bilascu.model3d}
          />
          <Card3
            img={opris}
            href={PATH.resurse.amfiteatreSali.opris.index}
            title="Amfiteatrul Opriș"
            subtitle="Victor Babeș 2"
            maps={PATH.resurse.amfiteatreSali.opris.maps}
            model3d={PATH.resurse.amfiteatreSali.opris.model3d}
          />
          <Card3
            img={dermatologie}
            href={PATH.resurse.amfiteatreSali.dermatologie.index}
            title="Amfiteatrul Dermatologie"
            subtitle=""
            maps={PATH.resurse.amfiteatreSali.dermatologie.maps}
            model3d={PATH.resurse.amfiteatreSali.dermatologie.model3d}
          />
          <Card3
            img={infectioase}
            href={PATH.resurse.amfiteatreSali.infectioase.index}
            title="Amfiteatrul Boli Infecțioase"
            subtitle=""
            maps={PATH.resurse.amfiteatreSali.infectioase.maps}
            model3d={PATH.resurse.amfiteatreSali.infectioase.model3d}
          />
          <Card3
            img={minea}
            href={PATH.resurse.amfiteatreSali.minea.index}
            title="Amfiteatrul Ion Minea"
            subtitle="Neurologie"
            maps={PATH.resurse.amfiteatreSali.minea.maps}
            model3d={PATH.resurse.amfiteatreSali.minea.model3d}
          />
          <Card3
            img={popper}
            href={PATH.resurse.amfiteatreSali.popper.index}
            title="Amfiteatrul Erwin Popper"
            subtitle="Farmacie A"
            maps={PATH.resurse.amfiteatreSali.popper.maps}
            model3d={PATH.resurse.amfiteatreSali.popper.model3d}
          />
          <Card3
            img={radiologie}
            href={PATH.resurse.amfiteatreSali.radiologie.index}
            title="Amfiteatrul Dimitrie Negru"
            subtitle="Radiologie"
            maps={PATH.resurse.amfiteatreSali.radiologie.maps}
            model3d={PATH.resurse.amfiteatreSali.radiologie.model3d}
          />
          <Card3
            img={recuperare}
            href={PATH.resurse.amfiteatreSali.recuperare.index}
            title="Amfiteatrul Nicolae Andronescu"
            subtitle="Recuperare"
            maps={PATH.resurse.amfiteatreSali.recuperare.maps}
            model3d={PATH.resurse.amfiteatreSali.recuperare.model3d}
          />
          <Card3
            img={simiti}
            href={PATH.resurse.amfiteatreSali.simiti.index}
            title="Amfiteatrul I. Simiti"
            subtitle="Farmacie"
            maps={PATH.resurse.amfiteatreSali.simiti.maps}
            model3d={PATH.resurse.amfiteatreSali.simiti.model3d}
          />
          <Card3
            img={labBiofizica}
            href={PATH.resurse.amfiteatreSali.labBiofizica.index}
            title="Laborator biofizică"
            subtitle="Turn biofizică"
            maps={PATH.resurse.amfiteatreSali.labBiofizica.maps}
            model3d={PATH.resurse.amfiteatreSali.labBiofizica.model3d}
          />
          <Card3
            img={labBiocel}
            href={PATH.resurse.amfiteatreSali.labBiocel.index}
            title="Laborator biologie celulară"
            subtitle=""
            maps={PATH.resurse.amfiteatreSali.labBiocel.maps}
            model3d={PATH.resurse.amfiteatreSali.labBiocel.model3d}
          />
          <Card3
            img={labBiostat}
            href={PATH.resurse.amfiteatreSali.labBiostat.index}
            title="Laborator biostatistică și MCS"
            subtitle=""
            maps={PATH.resurse.amfiteatreSali.labBiostat.maps}
            model3d={PATH.resurse.amfiteatreSali.labBiostat.model3d}
          />
          <Card3
            img={genetica}
            href={PATH.resurse.amfiteatreSali.genetica.index}
            title="Laborator genetică"
            subtitle="Turn genetică"
            maps={PATH.resurse.amfiteatreSali.genetica.maps}
            model3d={PATH.resurse.amfiteatreSali.genetica.model3d}
          />
          <Card3
            img={multimedia}
            href={PATH.resurse.amfiteatreSali.multimedia.index}
            title="Sala Multimedia"
            subtitle=""
            maps={PATH.resurse.amfiteatreSali.multimedia.maps}
            model3d={PATH.resurse.amfiteatreSali.multimedia.model3d}
          />
        </div>
      </section>
    </div>
  );
}

export default AmfiteatreSaliPage;
