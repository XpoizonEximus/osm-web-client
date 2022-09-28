import React from "react";
import { Routes, Route } from "react-router-dom";

import { PATH } from "../../const/const.js";

import ProiectePage from "./proiecte";
import NotFound404Page from "../notFound404";
import InConstructionPage from "../inConstruction";

function ProiecteRouter() {
  return (
    <Routes>
      <Route path="/" element={<ProiectePage />} />
      <Route path="*" element={<NotFound404Page />} />

      <Route
        path={PATH.proiecte.artisticAnatomy.index}
        element={<InConstructionPage />}
      />
      <Route path={PATH.proiecte.cord.index} element={<InConstructionPage />} />
      <Route path={PATH.proiecte.dans.index} element={<InConstructionPage />} />
      <Route path={PATH.proiecte.dmp.index} element={<InConstructionPage />} />
      <Route
        path={PATH.proiecte.doneazaSange.index}
        element={<InConstructionPage />}
      />
      <Route
        path={PATH.proiecte.foculViu.index}
        element={<InConstructionPage />}
      />
      <Route
        path={PATH.proiecte.heart.index}
        element={<InConstructionPage />}
      />
      <Route
        path={PATH.proiecte.impreunaPentruSanatate.index}
        element={<InConstructionPage />}
      />
      <Route
        path={PATH.proiecte.medfolk.index}
        element={<InConstructionPage />}
      />
      <Route
        path={PATH.proiecte.medicalis.index}
        element={<InConstructionPage />}
      />
      <Route
        path={PATH.proiecte.mediciPentruTine.index}
        element={<InConstructionPage />}
      />
      <Route
        path={PATH.proiecte.medstic.index}
        element={<InConstructionPage />}
      />
      <Route
        path={PATH.proiecte.medstrings.index}
        element={<InConstructionPage />}
      />
      <Route
        path={PATH.proiecte.miciiSanitari.index}
        element={<InConstructionPage />}
      />
      <Route path={PATH.proiecte.mre.index} element={<InConstructionPage />} />
      <Route
        path={PATH.proiecte.roadSafety.index}
        element={<InConstructionPage />}
      />
      <Route
        path={PATH.proiecte.schimburiInternationale.index}
        element={<InConstructionPage />}
      />
      <Route
        path={PATH.proiecte.scora.index}
        element={<InConstructionPage />}
      />
      <Route
        path={PATH.proiecte.sport.index}
        element={<InConstructionPage />}
      />
      <Route
        path={PATH.proiecte.teddyBearHospital.index}
        element={<InConstructionPage />}
      />
      <Route path={PATH.proiecte.tpng.index} element={<InConstructionPage />} />
      <Route
        path={PATH.proiecte.transmed.index}
        element={<InConstructionPage />}
      />
      <Route
        path={PATH.proiecte.twinning.index}
        element={<InConstructionPage />}
      />
      <Route
        path={PATH.proiecte.vadVoci.index}
        element={<InConstructionPage />}
      />
      <Route path={PATH.proiecte.zem.index} element={<InConstructionPage />} />
    </Routes>
  );
}

export default ProiecteRouter;
