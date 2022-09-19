import React from "react";
import { Routes, Route } from "react-router-dom";

import { ROLES } from "../const/const";

import Layout from "../layouts/layout";

import IndexPage from "./index/index";
import NotFound404Page from "./notFound404/index";
import ProiectePage from "./proiecte/index";
import EvenimentePage from "./evenimente/index";
import UneltePage from "./unelte/index";
import EchipaPage from "./echipa/index";
import ParteneriPage from "./parteneri/index";
import RegulamentePage from "./regulamente/index";
import FaqPage from "./faq/index";
import ContactPage from "./contact/index";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
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
