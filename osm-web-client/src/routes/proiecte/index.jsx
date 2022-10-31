import React from "react";
import { Routes, Route } from "react-router-dom";

import ProiectePage from "./proiecte";
import NotFound404Page from "../notFound404";
import ProiectPage from "./proiect.jsx";

import { useProiecteSumarry } from "../../api/hooks/axios/proiecte";

function ProiecteRouter() {
  const data = useProiecteSumarry();

  return (
    <Routes>
      <Route path="/" element={<ProiectePage />} />
      <Route path="*" element={<NotFound404Page />} />

      {data?.map((proiect, i) => {
        return (
          <Route
            path={proiect.id}
            element={<ProiectPage index={proiect.id} />}
          />
        );
      })}
    </Routes>
  );
}

export default ProiecteRouter;
