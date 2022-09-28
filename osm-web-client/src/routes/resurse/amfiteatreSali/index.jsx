import React from "react";
import { Routes, Route } from "react-router-dom";

import AmfiteatreSaliPage from "./amfiteatreSali";
import NotFound404Page from "../../notFound404";

import AnatomiePage from "./anatomie";

import { PATH } from "../../../const/const";

function AmfiteatreSaliRouter() {
    return (
    <Routes>
      <Route path="/" element={<AmfiteatreSaliPage />} />
      <Route path="*" element={<NotFound404Page />} />
      <Route
        path={PATH.resurse.amfiteatreSali.anatomie.index}
        element={<AnatomiePage />}
      />
    </Routes>
  );
}

export default AmfiteatreSaliRouter;
