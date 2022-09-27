import React from "react";
import { Routes, Route} from "react-router-dom";
import Layout from "../layouts/layout"

import { PATH } from "../const/const.js";

import IndexPage from "./index";
import NotFound404Page from "./notFound404";

import ProiectePage from "./proiecte";
import EvenimentePage from "./evenimente";
import ShopPage from "./shop";

import ResursePage from "./resurse";
import RegulamentePage from "./resurse/regulamente";
import GhiduriPage from "./resurse/ghiduri";
import LinksPage from "./resurse/links";
import CalculatorMediePage from "./resurse/calculatorMedie";
import AmfiteatreSaliPage from "./resurse/amfiteatreSali";
import FaqPage from "./resurse/faq";

import EchipaPage from "./echipa";
import ParteneriPage from "./parteneri";
import ContactPage from "./contact";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={PATH.index} element={<IndexPage />} />
        <Route path="*" element={<NotFound404Page />} />

        <Route
          path={PATH.proiecte.index.concat("/*")}
          element={<ProiectePage />}
        />
        <Route path={PATH.evenimente.index} element={<EvenimentePage />} />
        <Route path={PATH.shop.index} element={<ShopPage />} />
        <Route path={PATH.resurse.index} element={<ResursePage />} />
        <Route
          path={PATH.resurse.regulamente.index.concat("/*")}
          element={<RegulamentePage />}
        />
        <Route
          path={PATH.resurse.ghiduri.index.concat("/*")}
          element={<GhiduriPage />}
        />
        <Route
          path={PATH.resurse.legaturiExterne.index}
          element={<LinksPage />}
        />
        <Route
          path={PATH.resurse.calculatorMedie.index}
          element={<CalculatorMediePage />}
        />
        <Route
          path={PATH.resurse.amfiteatreSali.index}
          element={<AmfiteatreSaliPage />}
        />
        <Route path={PATH.resurse.faq.index} element={<FaqPage />} />
        <Route path={PATH.echipa.index} element={<EchipaPage />} />
        <Route path={PATH.parteneri.index} element={<ParteneriPage />} />
        <Route path={PATH.contact.index} element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
