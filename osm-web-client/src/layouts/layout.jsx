import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Navigation from "./navigation";
import Footer from "./footer";

function Layout() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
