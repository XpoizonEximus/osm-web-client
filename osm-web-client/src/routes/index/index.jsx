import React, { useEffect } from "react";

import Header from "./header";
import About from "./about";
import Projects from "./projects";
import Resources from "./resources";

const IndexPage = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div id="index">
      <Header />
      <About />
      <Projects />
      <Resources />
    </div>
  );
};

export default IndexPage;
