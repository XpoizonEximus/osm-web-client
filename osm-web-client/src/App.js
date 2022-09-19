import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Router from "./routes/router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Router />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
