import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Layout from "../../layouts/layout";

import { PATH } from "../../const/const.js";

import ProiectePage from "./proiecte";
import NotFound404Page from "../notFound404";

function ProiecteRouter() {
  console.log("prorut");
  return (
    <Routes>
        <Route path="/" element={<ProiectePage />} />
        <Route path="*" element={<NotFound404Page />} />

        <Route
          path={PATH.proiecte.artisticAnatomy}
          element={<NotFound404Page />}
        />
        <Route path={PATH.proiecte.cord} element={<NotFound404Page />} />
        <Route path={PATH.proiecte.dans} element={<NotFound404Page />} />
        <Route path={PATH.proiecte.dmp} element={<NotFound404Page />} />
        <Route
          path={PATH.proiecte.doneazaSange}
          element={<NotFound404Page />}
        />
        <Route path={PATH.proiecte.foculViu} element={<NotFound404Page />} />
        <Route path={PATH.proiecte.heart} element={<NotFound404Page />} />
        <Route
          path={PATH.proiecte.impreunaPentruSanatate}
          element={<NotFound404Page />}
        />
        <Route path={PATH.proiecte.medfolk} element={<NotFound404Page />} />
        <Route path={PATH.proiecte.medicalis} element={<NotFound404Page />} />
        <Route
          path={PATH.proiecte.mediciPentruTine}
          element={<NotFound404Page />}
        />
        <Route path={PATH.proiecte.medstic} element={<NotFound404Page />} />
        <Route path={PATH.proiecte.medstrings} element={<NotFound404Page />} />
        <Route
          path={PATH.proiecte.miciiSanitari}
          element={<NotFound404Page />}
        />
        <Route path={PATH.proiecte.mre} element={<NotFound404Page />} />
        <Route path={PATH.proiecte.roadSafety} element={<NotFound404Page />} />
        <Route
          path={PATH.proiecte.schimburiInternationale}
          element={<NotFound404Page />}
        />
        <Route path={PATH.proiecte.scora} element={<NotFound404Page />} />
        <Route path={PATH.proiecte.sport} element={<NotFound404Page />} />
        <Route
          path={PATH.proiecte.teddyBearHospital}
          element={<NotFound404Page />}
        />
        <Route path={PATH.proiecte.tpng} element={<NotFound404Page />} />
        <Route path={PATH.proiecte.transmed} element={<NotFound404Page />} />
        <Route path={PATH.proiecte.twinning} element={<NotFound404Page />} />
        <Route path={PATH.proiecte.vadVoci} element={<NotFound404Page />} />
        <Route path={PATH.proiecte.zem} element={<NotFound404Page />} />
    </Routes>
  );
}

export default ProiecteRouter;
