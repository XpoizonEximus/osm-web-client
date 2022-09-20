import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import { ROLES } from "../const/const";

import IndexPage from "./index";
import NotFound404Page from "./notFound404";
import ProiectePage from "./proiecte";
import EvenimentePage from "./evenimente";
import UneltePage from "./unelte";
import EchipaPage from "./echipa";
import ParteneriPage from "./parteneri";
import RegulamentePage from "./regulamente";
import FaqPage from "./faq";
import ContactPage from "./contact";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route path="/" element={<IndexPage />} />
        <Route path="*" element={<NotFound404Page />} />

        <Route path="Proiecte/*" element={<ProiectePage />} />
        <Route path="Evenimente/*" element={<EvenimentePage />} />
        <Route path="Unelte/*" element={<UneltePage />} />
        <Route path="Echipa" element={<EchipaPage />} />
        <Route path="Parteneri" element={<ParteneriPage />} />
        <Route path="Regulamente/*" element={<RegulamentePage />} />
        <Route path="Faq" element={<FaqPage />} />
        <Route path="Contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
