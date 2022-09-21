import React from "react";

import Navigation from "../../layouts/navigation";
import Header from "./header";
import About from "./about";
import Footer from "../../layouts/footer";
import Projects from "./projects";

const IndexPage = () => {
  return (
    <div id="index">
      <Navigation />
      <Header />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default IndexPage;
