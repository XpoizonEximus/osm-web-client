import React from "react";
import banner from "../Assets/Photos/banner.jpg"
import "../App.css";

const HomePage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={banner} className="App-logo" alt="logo" />
        <p>
          ORGANIZATIA STUDENTILOR MEDICINISTI DIN CLUJ
        </p>
      </header>
    </div>
  );
};

export default HomePage;
