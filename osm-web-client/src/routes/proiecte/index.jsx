import React from "react";
import { Routes, Route } from "react-router-dom";

import ProiectePage from "./proiecte";
import NotFound404Page from "../notFound404";
import ProiectPage from "./proiect.jsx";

import { useProiecte } from "../../api/hooks/axios/proiecte";

function ProiecteRouter() {
  const data = useProiecte();

  return (
    <Routes>
      <Route path="/" element={<ProiectePage />} />
      <Route path="*" element={<NotFound404Page />} />

      {data?.map((proiect, i) => {
        return (
          <Route
            key={proiect.id}
            path={proiect.name}
            element={<ProiectPage index={proiect.id} />}
          />
        );
      })}
    </Routes>
  );
}

export default ProiecteRouter;
