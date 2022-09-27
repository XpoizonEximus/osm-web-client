import React from "react";

import Header from "./header";
import About from "./about";
import Projects from "./projects";
import Resources from "./resources";

const IndexPage = () => {
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
