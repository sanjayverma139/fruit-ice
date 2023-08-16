import React from "react";
import hero from "../assets/hero.png";
import "./hero.css";

const Hero = () => {
  return (
    <div className="container">
      <div className="Img_wrapper">
        <img src={hero} alt="" className="hero_img" />
      </div>
    </div>
  );
};

export default Hero;
