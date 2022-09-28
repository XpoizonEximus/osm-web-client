import React from "react";
import { Routes, Route} from "react-router-dom";

import { PATH } from "../../const/const.js";

import ProiectePage from "./proiecte";
import NotFound404Page from "../notFound404";

function ProiecteRouter() {
  return (
    <Routes>
      <Route path="/" element={<ProiectePage />} />
      <Route path="*" element={<NotFound404Page />} />

      <Route
        path={PATH.proiecte.artisticAnatomy.index}
        element={<NotFound404Page />}
      />
      <Route path={PATH.proiecte.cord.index} element={<NotFound404Page />} />
      <Route path={PATH.proiecte.dans.index} element={<NotFound404Page />} />
      <Route path={PATH.proiecte.dmp.index} element={<NotFound404Page />} />
      <Route
        path={PATH.proiecte.doneazaSange.index}
        element={<NotFound404Page />}
      />
      <Route
        path={PATH.proiecte.foculViu.index}
        element={<NotFound404Page />}
      />
      <Route path={PATH.proiecte.heart.index} element={<NotFound404Page />} />
      <Route
        path={PATH.proiecte.impreunaPentruSanatate.index}
        element={<NotFound404Page />}
      />
      <Route path={PATH.proiecte.medfolk.index} element={<NotFound404Page />} />
      <Route
        path={PATH.proiecte.medicalis.index}
        element={<NotFound404Page />}
      />
      <Route
        path={PATH.proiecte.mediciPentruTine.index}
        element={<NotFound404Page />}
      />
      <Route path={PATH.proiecte.medstic.index} element={<NotFound404Page />} />
      <Route
        path={PATH.proiecte.medstrings.index}
        element={<NotFound404Page />}
      />
      <Route
        path={PATH.proiecte.miciiSanitari.index}
        element={<NotFound404Page />}
      />
      <Route path={PATH.proiecte.mre.index} element={<NotFound404Page />} />
      <Route
        path={PATH.proiecte.roadSafety.index}
        element={<NotFound404Page />}
      />
      <Route
        path={PATH.proiecte.schimburiInternationale.index}
        element={<NotFound404Page />}
      />
      <Route path={PATH.proiecte.scora.index} element={<NotFound404Page />} />
      <Route path={PATH.proiecte.sport.index} element={<NotFound404Page />} />
      <Route
        path={PATH.proiecte.teddyBearHospital.index}
        element={<NotFound404Page />}
      />
      <Route path={PATH.proiecte.tpng.index} element={<NotFound404Page />} />
      <Route
        path={PATH.proiecte.transmed.index}
        element={<NotFound404Page />}
      />
      <Route
        path={PATH.proiecte.twinning.index}
        element={<NotFound404Page />}
      />
      <Route path={PATH.proiecte.vadVoci.index} element={<NotFound404Page />} />
      <Route path={PATH.proiecte.zem.index} element={<NotFound404Page />} />
    </Routes>
  );
}

export default ProiecteRouter;
