import React from "react";
import videoBg from "../assets/Merged_Pexel_HG2rB_Pexel.mp4";
import Navbar from "./Navbar";
import "../App.css";
import ButtonsOverhead from "./ButtonsOverhead";

const BackgroundVideoSection = () => {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <ButtonsOverhead />
        <Navbar />
        <div className="scroll-indicator">
          <div>˅</div>
          <div>˅</div>
          <div>˅</div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideoSection;
