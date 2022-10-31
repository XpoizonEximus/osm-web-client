import React from "react";
import { Routes, Route } from "react-router-dom";

import AmfiteatreSaliPage from "./amfiteatreSali";
import NotFound404Page from "../../notFound404";

import RegistraturaPage from "./registratura";
import CasieriePage from "./casierie";
import CabinetBabesPage from "./cabinetBabes";
import CabinetHasdeuPage from "./cabinetHasdeu";
import Medicala1Page from "./medicala1";
import Medicala2Page from "./medicala2";
import AnatomiePage from "./anatomie";
import CucuianuMantaPredaPage from "./cucuianuMantaPreda";
import MoldovanPage from "./moldovan";
import FizologiePage from "./fiziologie";
import DorofteiuPage from "./dorofteiu";
import AlemanPage from "./aleman";
import AnatomiePatologicaPage from "./anatomiePatologica";
import BilascuPage from "./bilascu";
import OprisPage from "./opris";
import DermatologiePage from "./dermatologie";
import InfectioasePage from "./infectioase";
import MineaPage from "./minea";
import PopperPage from "./popper";
import RadiologiePage from "./radiologie";
import RecuperarePage from "./recuperare";
import SimitiPage from "./simiti";
import LabBiofizicaPage from "./labBiofizica";
import LabBiocelPage from "./labBiocel";
import LabBiostatPage from "./labBiostat";
import GeneticaPage from "./genetica";
import MultimediaPage from "./multimedia";
import Ginecologie1Page from "./ginecologie1";
import OftalmologiePage from "./oftalmologie";

import { PATH } from "../../../const/const";

function AmfiteatreSaliRouter() {
  return (
    <Routes>
      <Route path="/" element={<AmfiteatreSaliPage />} />
      <Route path="*" element={<NotFound404Page />} />
      <Route
        path={PATH.resurse.amfiteatreSali.registratura.index}
        element={<RegistraturaPage />}
      />
      <Route
        path={PATH.resurse.amfiteatreSali.casierie.index}
        element={<CasieriePage />}
      />
      <Route
        path={PATH.resurse.amfiteatreSali.cabinetBabes.index}
        element={<CabinetBabesPage />}
      />
      <Route
        path={PATH.resurse.amfiteatreSali.cabinetHasdeu.index}
        element={<CabinetHasdeuPage />}
      />
      <Route
        path={PATH.resurse.amfiteatreSali.medicala1.index}
        element={<Medicala1Page />}
      />
      <Route
        path={PATH.resurse.amfiteatreSali.medicala2.index}
        element={<Medicala2Page />}
      />
      <Route
        path={PATH.resurse.amfiteatreSali.anatomie.index}
        element={<AnatomiePage />}
      />
      <Route
        path={PATH.resurse.amfiteatreSali.cucuianuMantaPreda.index}
        element={<CucuianuMantaPredaPage />}
      />
      <Route
        path={PATH.resurse.amfiteatreSali.moldovan.index}
        element={<MoldovanPage />}
      />
      <Route
        path={PATH.resurse.amfiteatreSali.fiziologie.index}
        element={<FizologiePage />}
      />
      <Route
        path={PATH.resurse.amfiteatreSali.dorofteiu.index}
        element={<DorofteiuPage />}
      />
      <Route
        path={PATH.resurse.amfiteatreSali.aleman.index}
        element={<AlemanPage />}
      />
      <Route
        path={PATH.resurse.amfiteatreSali.anatomiePatologica.index}
        element={<AnatomiePatologicaPage />}
      />
      <Route
        path={PATH.resurse.amfiteatreSali.bilascu.index}
        element={<BilascuPage />}
      />
      <Route
        path={PATH.resurse.amfiteatreSali.opris.index}
        element={<OprisPage />}
      />
      <Route
        path={PATH.resurse.amfiteatreSali.dermatologie.index}
        element={<DermatologiePage />}
      />
      <Route
        path={PATH.resurse.amfiteatreSali.infectioase.index}
        element={<InfectioasePage />}
      />
      <Route
        path={PATH.resurse.amfiteatreSali.minea.index}
        element={<MineaPage />}
      />
      <Route
        path={PATH.resurse.amfiteatreSali.popper.index}
        element={<PopperPage />}
      />
      <Route
        path={PATH.resurse.amfiteatreSali.radiologie.index}
        element={<RadiologiePage />}
      />
      <Route
        path={PATH.resurse.amfiteatreSali.recuperare.index}
        element={<RecuperarePage />}
      />
      <Route
        path={PATH.resurse.amfiteatreSali.simiti.index}
        element={<SimitiPage />}
      />
      <Route
        path={PATH.resurse.amfiteatreSali.labBiofizica.index}
        element={<LabBiofizicaPage />}
      />
      <Route
        path={PATH.resurse.amfiteatreSali.labBiocel.index}
        element={<LabBiocelPage />}
      />
      <Route
        path={PATH.resurse.amfiteatreSali.labBiostat.index}
        element={<LabBiostatPage />}
      />
      <Route
        path={PATH.resurse.amfiteatreSali.genetica.index}
        element={<GeneticaPage />}
      />
      <Route
        path={PATH.resurse.amfiteatreSali.multimedia.index}
        element={<MultimediaPage />}
      />
      <Route
        path={PATH.resurse.amfiteatreSali.gine1.index}
        element={<Ginecologie1Page />}
      />
      <Route
        path={PATH.resurse.amfiteatreSali.ofta.index}
        element={<OftalmologiePage />}
      />
    </Routes>
  );
}

export default AmfiteatreSaliRouter;
