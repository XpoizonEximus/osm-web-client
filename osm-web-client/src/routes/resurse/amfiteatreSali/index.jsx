import React from "react";
import { Routes, Route } from "react-router-dom";

import AmfiteatreSaliPage from "./amfiteatreSali";
import AmfiteatruPage from "./amfiteatru";
import NotFound404Page from "../../notFound404";

import { useAmfiteatreSummary } from "../../../api/hooks/axios/amfiteatre";

function AmfiteatreSaliRouter() {
  const data = useAmfiteatreSummary();

  return (
    <Routes>
      <Route path="/" element={<AmfiteatreSaliPage />} />
      <Route path="*" element={<NotFound404Page />} />

      {data?.map((element, index) => (
        <Route
          path={element?.id_path}
          element={<AmfiteatruPage id={element?.id} />}
        />
      ))}
    </Routes>
  );
}

export default AmfiteatreSaliRouter;
